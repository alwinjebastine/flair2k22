import React from 'react';
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import licet from "../assets/images/licet.png";

export const About = () => {
  return(
  <>
  <section className='container d-flex justify-content-center align-items-center w-100 my-5'>
    <div className="card card1 bg-dark all-text-white mt-5 rounded-curve shadow-white p-3 text-center">
      <div className="card-content d-md-flex align-items-center">
        <img src={licet}/>
        <div>The Loyola-ICAM (Institute Catholique d’Arts et Metiers) College of Engineering and Technology (LICET) is a Christian minority institution, founded in 2010 by the Jesuit Chennai Mission to form competent engineers with social responsibility. 
          The Loyola College Society with its rich experience in Higher Education administers LICET in collaboration with ICAM group Lille, France.
            It is approved by AICTE and affiliated to Anna University, Chennai. 
            LICET offers a collective enterprise contributing to the formation of engineers who would promote growth in individuals and in society.
        </div>
      </div>
    </div>
  </section>
  </>
  );
}
