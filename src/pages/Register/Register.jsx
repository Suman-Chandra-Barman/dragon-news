import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Register = () => {
  const { createUser, updateUserProfile, emailVerification } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        handleUpdateUserProfile(name, photoURL);
        handleEmailVerification();
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      });
  };

  const handleTermsAndConditions = (e) => {
    setAccepted(e.target.checked);
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    updateUserProfile(name, photoURL)
      .then(() => {})
      .catch((e) => console.error(e));
  };
  const handleEmailVerification = () => {
    emailVerification()
      .then(() =>
        toast.success("Verification email send! Please check your email")
      )
      .catch((error) => console.error(error));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhotoURL">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control
          name="photoURL"
          type="text"
          placeholder="Enter photo url"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="true"
          required
        />
        <Form.Text className="text-danger">{error}</Form.Text>
      </Form.Group>
      <Form.Group
        onClick={handleTermsAndConditions}
        className="mb-3"
        controlId="formBasicCheckbox"
      >
        <Form.Check
          type="checkbox"
          label={
            <>
              Accept <Link to="/terms">Terms and conditions</Link>
            </>
          }
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!accepted}>
        Register
      </Button>
    </Form>
  );
};

export default Register;
