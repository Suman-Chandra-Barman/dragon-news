import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Header from "../pages/Shared/Header";
import LeftSideNave from "../pages/Shared/LeftSideNave";
import RightSideNav from "../pages/Shared/RightSideNav";

const Root = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col lg={2} className="d-none d-lg-block">
            <LeftSideNave />
          </Col>
          <Col lg={7}>
            <Outlet />
          </Col>
          <Col lg={3}>
            <RightSideNav />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Root;
