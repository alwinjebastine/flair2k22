import React from 'react'
import licet from '../assets/images/licet.png'

export const About = () => {
  return (
    <>
      <section className="container d-md-flex justify-content-center align-items-center w-100 my-5 card bg-transparent">
        {/* <div className="card card1 bg-dark all-text-white mt-5 rounded-curve shadow-white p-3 text-center"> */}
        <h1 className="h1 my-5 text-center fw-bold">About Us</h1>
        <div className="w-75 text-center">
          <div className="">
            <div>
              <h2 className="h2 text-gradient">
                Loyola - Icam College of Engineering and Technology
              </h2>
            </div>
            <img src={licet} className="" />
            <p className="fs-5 lh-base">
              The Loyola-ICAM (Institute Catholique d’Arts et Metiers) College
              of Engineering and Technology (LICET) is a Christian minority
              institution, founded in 2010 by the Jesuit Chennai Mission to form
              competent engineers with social responsibility. The Loyola College
              Society with its rich experience in Higher Education administers
              LICET in collaboration with ICAM group Lille, France. It is
              approved by AICTE and affiliated to Anna University, Chennai.
              LICET offers a collective enterprise contributing to the formation
              of engineers who would promote growth in individuals and in
              society.
            </p>
          </div>
          <div>
            <h2 className="h2 text-gradient my-5">
              Department of Information Technology
            </h2>
            <img
              src="https://licet.ac.in/wp-content/uploads/2021/04/0731yt-scaled.jpg"
              alt="it"
              className="img-fluid rounded-3 mb-5"
            />
            <p className="fs-6 lh-base" style={{ textAlign: 'justify' }}>
              The department has vibrant and active faculty who are continually
              updating their knowledge and skills through numerous quality
              improvement initiatives. The students are provided with every
              modern facility and design tool they will need to complete their
              projects. The Department is associated with NMEICT MHRD, Govt of
              India through “Spoken Tutorial Project” organizing FOSS online
              courses for the students and faculty, deeming LICET as the Nodal
              Centre. The Department coordinates the Virtual Lab facility, an
              initiative of NMEICT,MHRD for various labs such as Pattern
              recognition, Cryptography, Computer Networks and Data Structures.
              The Department has constant interaction with industries and public
              institutes of higher education such as Google, IIT, ICAM France,
              Capgemini, Calibrant, etc., for various workshops, visits, and
              faculty development programs. Training supported by Google for
              Android and Design Thinking, Cloud Computing and Redhat- RHCSA
              Training and certification contributes to the objectives of higher
              learning of the students. Research knowledge of students and
              faculty has been growing over the past years through national and
              international conferences organized by the department with
              publications in international journals and notable keynote
              speakers from USA, Malaysia. The Department transforms and
              accelerates the students to engage in Government initiated
              competitions like Smart India Hackathon, National level IIT
              projects, winning laurels for the department and college, proving
              that our students can be expert learners and provide solutions for
              the global community.
            </p>
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h4 className="h4 text-gradient my-3">Our Vision</h4>
                <p>
                  To Build Proficient Information Technologists Through Moral,
                  Ethical And Technological Standards For The Societal
                  Well-being.
                </p>
              </div>
              <div>
                <h4 className="h4 text-gradient my-3">Our Mission</h4>
                <p className="text-start">
                  <ul className="ul">
                    <li>
                      To provide a practice oriented methodology with access to
                      contemporary knowledge in Information Technology for the
                      betterment of the society
                    </li>
                    <li>
                      To prepare students for competent careers in Information
                      Technology through innovation, team spirit, ethics and
                      entrepreneurial skills in evolving technologies
                    </li>
                    <li>
                      To integrate our department with quality organizations
                      worldwide and promote industry institute interaction for
                      symbiotic benefits
                    </li>
                    <li>
                      To promote interdisciplinary research through innovation
                      and reflective thinking
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  )
}
