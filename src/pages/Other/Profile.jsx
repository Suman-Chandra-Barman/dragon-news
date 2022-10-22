import React, { useContext, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../../contexts/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName);
  const photoURLRef = useRef(user?.photoURL);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(photoURLRef.current.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          defaultValue={user?.email}
          readOnly
          placeholder="Enter email"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your name</Form.Label>
        <Form.Control
          onChange={(e) => setName(e.target.value)}
          name="name"
          type="text"
          defaultValue={name}
          placeholder="Enter name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhotoURL">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control
          name="photoURL"
          ref={photoURLRef}
          type="text"
          placeholder="Enter photo url"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default Profile;
