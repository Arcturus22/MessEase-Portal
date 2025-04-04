import React, { useState } from "react";
import classnames from "classnames";
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col,
} from "reactstrap";

const TabsSection = () => {
  const [iconTabs, setIconTabs] = useState(1);
  const [plainTabs, setPlainTabs] = useState(1);

  const toggleNavs = (state, index) => {
    state === "iconTabs" ? setIconTabs(index) : setPlainTabs(index);
  };

  return (
    <>
      <h3 className="h4 text-success font-weight-bold mb-4">Tabs</h3>
      <Row className="justify-content-center">
        <Col lg="6">
          {/* Tabs with icons */}
          <div className="mb-3">
            <small className="text-uppercase font-weight-bold">
              With icons
            </small>
          </div>
          <div className="nav-wrapper">
            <Nav
              className="nav-fill flex-column flex-md-row"
              id="tabs-icons-text"
              pills
              role="tablist"
            >
              <NavItem>
                <NavLink
                  aria-selected={iconTabs === 1}
                  className={classnames("mb-sm-3 mb-md-0", {
                    active: iconTabs === 1,
                  })}
                  onClick={() => toggleNavs("iconTabs", 1)}
                  href="#pablo"
                  role="tab"
                >
                  <i className="ni ni-cloud-upload-96 mr-2" />
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  aria-selected={iconTabs === 2}
                  className={classnames("mb-sm-3 mb-md-0", {
                    active: iconTabs === 2,
                  })}
                  onClick={() => toggleNavs("iconTabs", 2)}
                  href="#pablo"
                  role="tab"
                >
                  <i className="ni ni-bell-55 mr-2" />
                  Profile
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  aria-selected={iconTabs === 3}
                  className={classnames("mb-sm-3 mb-md-0", {
                    active: iconTabs === 3,
                  })}
                  onClick={() => toggleNavs("iconTabs", 3)}
                  href="#pablo"
                  role="tab"
                >
                  <i className="ni ni-calendar-grid-58 mr-2" />
                  Messages
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          <Card className="shadow">
            <CardBody>
              <TabContent activeTab={"iconTabs" + iconTabs}>
                <TabPane tabId="iconTabs1">
                  <p className="description">
                    Raw denim you probably haven't heard of them jean shorts
                    Austin. Nesciunt tofu stumptown aliqua, retro synth master
                    cleanse. Mustache cliche tempor, williamsburg carles vegan
                    helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                    synth.
                  </p>
                  <p className="description">
                    Raw denim you probably haven't heard of them jean shorts
                    Austin. Nesciunt tofu stumptown aliqua, retro synth master
                    cleanse.
                  </p>
                </TabPane>
                <TabPane tabId="iconTabs2">
                  <p className="description">
                    Cosby sweater eu banh mi, qui irure terry richardson ex
                    squid. Aliquip placeat salvia cillum iphone. Seitan aliquip
                    quis cardigan american apparel, butcher voluptate nisi qui.
                  </p>
                </TabPane>
                <TabPane tabId="iconTabs3">
                  <p className="description">
                    Raw denim you probably haven't heard of them jean shorts
                    Austin. Nesciunt tofu stumptown aliqua, retro synth master
                    cleanse. Mustache cliche tempor, williamsburg carles vegan
                    helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                    synth.
                  </p>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
        <Col className="mt-5 mt-lg-0" lg="6">
          {/* Menu */}
          <div className="mb-3">
            <small className="text-uppercase font-weight-bold">With text</small>
          </div>
          <div className="nav-wrapper">
            <Nav
              className="nav-fill flex-column flex-md-row"
              id="tabs-icons-text"
              pills
              role="tablist"
            >
              <NavItem>
                <NavLink
                  aria-selected={plainTabs === 1}
                  className={classnames("mb-sm-3 mb-md-0", {
                    active: plainTabs === 1,
                  })}
                  onClick={() => toggleNavs("plainTabs", 1)}
                  href="#pablo"
                  role="tab"
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  aria-selected={plainTabs === 2}
                  className={classnames("mb-sm-3 mb-md-0", {
                    active: plainTabs === 2,
                  })}
                  onClick={() => toggleNavs("plainTabs", 2)}
                  href="#pablo"
                  role="tab"
                >
                  Profile
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  aria-selected={plainTabs === 3}
                  className={classnames("mb-sm-3 mb-md-0", {
                    active: plainTabs === 3,
                  })}
                  onClick={() => toggleNavs("plainTabs", 3)}
                  href="#pablo"
                  role="tab"
                >
                  Messages
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          <Card className="shadow">
            <CardBody>
              <TabContent activeTab={"plainTabs" + plainTabs}>
                <TabPane tabId="plainTabs1">
                  <p className="description">
                    Raw denim you probably haven't heard of them jean shorts
                    Austin. Nesciunt tofu stumptown aliqua, retro synth master
                    cleanse. Mustache cliche tempor, williamsburg carles vegan
                    helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                    synth.
                  </p>
                  <p className="description">
                    Raw denim you probably haven't heard of them jean shorts
                    Austin. Nesciunt tofu stumptown aliqua, retro synth master
                    cleanse.
                  </p>
                </TabPane>
                <TabPane tabId="plainTabs2">
                  <p className="description">
                    Cosby sweater eu banh mi, qui irure terry richardson ex
                    squid. Aliquip placeat salvia cillum iphone. Seitan aliquip
                    quis cardigan american apparel, butcher voluptate nisi qui.
                  </p>
                </TabPane>
                <TabPane tabId="plainTabs3">
                  <p className="description">
                    Raw denim you probably haven't heard of them jean shorts
                    Austin. Nesciunt tofu stumptown aliqua, retro synth master
                    cleanse. Mustache cliche tempor, williamsburg carles vegan
                    helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                    synth.
                  </p>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default TabsSection;
