const Footer = () => {
  return (
    <section className="container card text-center text-muted w-75 mt-5 mb-3 bg-transparent">
      <hr />
      <div className="d-flex justify-content-center align-items-center mt-0 mb-4">
        <div className="col-8 d-md-flex justify-content-md-between justify-content-sm-center d-grid gap-3">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/events">Events</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>
      <h6>©2022 LICET. All Rights Reserved.</h6>
      <h6 className="mt-3">
        Made with <del>love</del> keyboard by Daniel, Alwin & Crispin.
      </h6>
    </section>
  )
}

export default Footer
