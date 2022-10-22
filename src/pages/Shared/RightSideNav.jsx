import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaFile,
} from "react-icons/fa";
import { ListGroup } from "react-bootstrap";
import BrandCarousel from "./BrandCarousel";
import { AuthContext } from "../../contexts/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";

const RightSideNav = () => {
  const { googleLogin, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  return (
    <div>
      <div className="d-grid gap-2">
        <Button onClick={handleGoogleLogin} variant="outline-primary" size="lg">
          <FaGoogle />
          <small className="ms-2"> Login With Google</small>
        </Button>
        <Button variant="outline-dark" size="lg">
          <FaGithub />
          <small className="ms-2">Login With GitHub</small>
        </Button>
      </div>
      <div className="my-4">
        <h6>Find Us On</h6>
        <ListGroup>
          <ListGroup.Item>
            <FaLinkedin /> LinkedIn
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaYoutube /> YouTube
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram />
            Instagram
          </ListGroup.Item>
          <ListGroup.Item>
            <FaFile /> Terms and Condition
          </ListGroup.Item>
        </ListGroup>
      </div>
      <BrandCarousel />
    </div>
  );
};

export default RightSideNav;
