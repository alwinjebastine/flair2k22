import React from 'react'
import licet from '../assets/images/licet.png'
import flair from '../assets/images/Logo_with_2k22-1.png'
import { css, jsx, SerializedStyles } from '@emotion/react'
import { motion, useAnimation, AnimationControls } from 'framer-motion'
import mq from '../utils/mq'

export const About = () => {
  return (
    <>
      <motion.section
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container d-md-flex justify-content-center align-items-center w-100 my-5 card bg-transparent"
      >
        {/* <div className="card card1 bg-dark all-text-white mt-5 rounded-curve shadow-white p-3 text-center"> */}
        <h2 className="my-5 text-center fw-bold h2 font-4">About Us</h2>
        <div className="w-75 text-center">
          <div className="">
            {/* <div>
              <h2 className="h2 text-gradient">
                Loyola - Icam College of Engineering and Technology
              </h2>
            </div>
            <img src={licet} className="" /> */}
            <p
              className="fs-6 fs-md-5 lh-base"
              style={{ textAlign: 'justify' }}
            >
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
            <h2 className="h2 text-gradient my-5 fw-bold">
              Department of Information Technology
            </h2>
            <img
              src="https://licet.ac.in/wp-content/uploads/2021/04/0731yt-scaled.jpg"
              alt="it"
              className="img-fluid rounded-3 mb-5"
            />
            <p
              className="fs-6 fs-md-5 lh-base"
              style={{ textAlign: 'justify' }}
            >
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
            <div className=" justify-content-between align-items-start my-3">
              <div>
                <h4 className="h4 text-gradient my-3 fw-bold">Our Vision</h4>
                <p className="lh-base text-start fs-6 fs-md-5">
                  To Build Proficient Information Technologists Through Moral,
                  Ethical And Technological Standards For The Societal
                  Well-being.
                </p>
              </div>
              <div className="ms-md-3">
                <h4 className="h4 text-gradient my-3 fw-bold">Our Mission</h4>
                <p className="text-start lh-base pb-2">
                  <div className="fs-6 fs-md-5">
                    <li style={{ textAlign: 'justify' }}>
                      To provide a practice oriented methodology with access to
                      contemporary knowledge in Information Technology for the
                      betterment of the society
                    </li>
                    <li style={{ textAlign: 'justify' }}>
                      To prepare students for competent careers in Information
                      Technology through innovation, team spirit, ethics and
                      entrepreneurial skills in evolving technologies
                    </li>
                    <li style={{ textAlign: 'justify' }}>
                      To integrate our department with quality organizations
                      worldwide and promote industry institute interaction for
                      symbiotic benefits
                    </li>
                    <li style={{ textAlign: 'justify' }}>
                      To promote interdisciplinary research through innovation
                      and reflective thinking
                    </li>
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div
            className="rounded bg-white mt-5 mx-auto"
            style={{ height: '1px', width: '90%' }}
          ></div>
          <div className="pt-5">
            <img
              src={flair}
              alt="flair"
              style={{ width: '25%' }}
              className="img-fluid rounded-3 mb-5"
            />
            <p
              className="fs-6 fs-md-5 lh-base"
              style={{ textAlign: 'justify' }}
            >
              Flair 2K22 is a National level technical symposium that usually
              takes place for a day and mostly occurs on annual basis. It is
              organized by the Department of Information Technology, LICET. The
              main aim of this multi- faceted event is to motivate the students
              to apply their technological skills to comprehend and analyse
              complex real world problems to design and implement the feasible
              solutions. Over 100 Colleges from across the city and outside the
              city are invited every year to participate and experience the
              Extravaganza. Flair provides a great opportunity for the aspiring
              students to showcase their talents and to challenge their
              potentiality.It is a chance to improve the confidence and
              competency skill among the students. Its a great exposure and will
              be a remarkable experience for every participants.
            </p>
          </div>
        </div>
      </motion.section>
    </>
  )
}
