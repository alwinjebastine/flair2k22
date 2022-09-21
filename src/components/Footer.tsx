import React from 'react'
// import InstagramIcon from '@mui/icons-material/Instagram'
// import IconButton from '@mui/material/IconButton'

const Footer = () => {
  return (
    <section
      className="container card text-center text-muted w-75 mt-5 mb-3 z-10"
      style={{ background: 'transparent' }}
    >
      <hr />
      <div className="d-flex justify-content-center align-items-center mt-0 mb-4">
        <div className="col-8 d-flex justify-content-between align-items-center">
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/events">Events</a>
          <a href="/register">Register</a>
          <a href="">Need Help?</a>
        </div>
      </div>
      <h6>©2022 LICET. All Rights Reserved.</h6>
    </section>
  )
}

export default Footer
