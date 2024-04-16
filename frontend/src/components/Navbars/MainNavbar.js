import React, { useState, useEffect } from "react";
import {
  Link,
  NavLink,
  useNavigate,
  useRouteLoaderData,
} from "react-router-dom";
import Headroom from "headroom.js";
import {
  Button,
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";
import LogoutButton from "components/Buttons/LogoutButton";
import { getId } from "auth";

const MainNavbar = () => {
  const [collapseClasses, setCollapseClasses] = useState("");
  const [collapseOpen, setCollapseOpen] = useState(false);
  const navigate = useNavigate();
  const id = getId();
  const userType = useRouteLoaderData("root");
  console.log(userType);

  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    headroom.init();
  }, []);

  const onExiting = () => {
    setCollapseClasses("collapsing-out");
  };

  const onExited = () => {
    setCollapseClasses("");
  };

  const toggleCollapse = () => {
    setCollapseOpen(!collapseOpen);
  };

  const handleAuthClick = () => {
    navigate("/students/login");
  };

  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
              <img
                alt="..."
                src={require("assets/img/brand/argon-react-white.png")}
              />
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="navbar_global"
              onClick={toggleCollapse}
            >
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                        alt="..."
                        src={require("assets/img/brand/argon-react.png")}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              {userType && (
                <>
                  <Nav
                    className="navbar-nav-hover align-items-lg-center"
                    navbar
                  >
                    {userType === "staff" && (
                      <>
                        <NavItem>
                          <NavLink
                            to="/mess-bill"
                            tag={Link}
                            className="nav-link"
                          >
                            <i className="fa fa-hand-o-right d-lg-none mr-2" />
                            <span className="nav-link-inner--text">
                              Mess Bill
                            </span>
                          </NavLink>
                        </NavItem>
                      </>
                    )}
                    {userType === "stud" && (
                      <NavItem>
                        <NavLink
                          to="/cancel-meal"
                          tag={Link}
                          className="nav-link"
                        >
                          <i className="fa fa-hand-o-right d-lg-none" />
                          <span className="nav-link-inner--text">
                            Cancel Meal
                          </span>
                        </NavLink>
                      </NavItem>
                    )}
                  </Nav>
                  <Nav
                    className="navbar-nav-hover align-items-lg-center ml-lg-auto"
                    navbar
                  >
                    <LogoutButton />
                    {userType === "stud" && (
                      <>
                        <NavItem>
                          <NavLink
                            id="stud"
                            to={`/students/${id}`}
                            className="ml-4"
                            color="default"
                          >
                            <i
                              className="fa fa-user fa-2x mt-2"
                              aria-hidden="true"
                            ></i>
                          </NavLink>
                        </NavItem>
                      </>
                    )}
                    {userType === "staff" && (
                      <>
                        <NavItem>
                          <NavLink
                            id="staff-profile"
                            to={`/staffs/${id}`}
                            className="ml-4"
                            color="link"
                          >
                            <i
                              className="fa fa-user fa-2x mt-2"
                              aria-hidden="true"
                            />
                          </NavLink>
                        </NavItem>
                      </>
                    )}
                  </Nav>
                </>
              )}
              {!userType && (
                <>
                  <Nav
                    className="navbar-nav-hover align-items-lg-center ml-lg-auto"
                    navbar
                  >
                    <Button
                      className="btn-1 btn-neutral ml-2"
                      type="button"
                      onClick={handleAuthClick}
                    >
                      <i className="fa fa-hand-o-right d-sm-none" />
                      <span />
                      SIGN IN
                    </Button>
                  </Nav>
                </>
              )}
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default MainNavbar;
