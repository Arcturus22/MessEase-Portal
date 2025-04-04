import React, {  useEffect, useRef } from "react";
import { useLoaderData } from "react-router-dom";

// reactstrap components
import { Card, Container } from "reactstrap";

// functions
import { fetchStudentDetails, getExtrasBill, getMessBill } from "api/student";
import Data from "components/StudData/Data";
import { checkStudAuthLoader, getId } from "auth";

function StudentProfile() {
  const mainRef = useRef();
  const { stud, messBillData, extrasBillData } = useLoaderData();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainRef.current.scrollTop = 0;
  });

  return (
    <>
      <main className="profile-page" ref={mainRef}>
        <section className="section-profile-cover section-shaped my-0">
          {/* Circles background */}
          <div className="shape shape-style-1 shape-default alpha-4">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
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
        <section className="section">
          <Container>
            <Card className="card-profile shadow mt--300">
              <div className="px-4 mb-5">
                <div className="card-profile-image mb-5">
                  <img
                    alt="..."
                    className="rounded-circle"
                    src={require("assets/img/stud/stud1.jpg")}
                  />
                </div>
              </div>
              <div id="card-content" className="mb-5">
                <div className="text-center mt-5">
                  <h3>{stud.fullName}</h3>
                  <div className="h6 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    {stud.hostel}
                  </div>
                  <div className="h6 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    Roll Number - {stud.rollNo}
                  </div>
                  <div>
                    <i className="ni education_hat mr-2" />
                    Email ID - {stud.email}
                  </div>
                  {stud.messEnrolled && (
                    <Data
                      messBillData={messBillData}
                      extrasBillData={extrasBillData}
                    />
                  )}
                </div>
              </div>
            </Card>
          </Container>
        </section>
      </main>
    </>
  );
}

export default StudentProfile;

export async function studentProfileLoader() {
  checkStudAuthLoader();
  const studId = getId();
  const stud = await fetchStudentDetails();
  if(!stud.messEnrolled) {
    return {stud};
  }
  const messBillData = await getMessBill(studId);
  const extrasBillData = await getExtrasBill(studId);
  return { stud, messBillData, extrasBillData };
}
