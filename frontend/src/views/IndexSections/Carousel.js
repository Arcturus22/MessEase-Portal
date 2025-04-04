import { Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: require("assets/img/theme/mess0.jpg"),
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: require("assets/img/theme/mess2.jpg"),
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: require("assets/img/theme/mess3.jpg"),
    altText: "",
    caption: "",
    header: "",
  },
];

function Carousel() {
  return (
    <>
      <section className="section section-shaped">
        <div className="shape shape-style-1 shape-default">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <Container className="py-md">
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0" lg="5">
              <h1 className="text-white font-weight-light">Mess Management</h1>
              <p className="lead text-white mt-4">
                Discover our innovative Mess Management System for IIT BHU
                Varanasi. We modernize mess services, streamline billing, and
                prioritize user convenience. Experience efficient meal
                management tailored for our vibrant community's dynamic needs
              </p>
            </Col>
            <Col className="mb-lg-auto" lg="6">
              <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                <UncontrolledCarousel items={items} />
              </div>
            </Col>
          </Row>
        </Container>
        {/* SVG separator */}
        <div className="separator separator-bottom separator-skew">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </section>
    </>
  );
}

export default Carousel;
