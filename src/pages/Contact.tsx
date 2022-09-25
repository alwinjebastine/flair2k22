import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import licet from '../assets/images/licet.png'

export const Contact = () => {
  return (
    <>
      <section className="container d-md-flex justify-content-center align-items-center w-100 my-5 card bg-transparent">
        <div className="my-5 bg-dark rounded-curve shadow-white p-md-5 p-4 mr-card">
          <div className='d-md-flex text-center'>
          <img src={licet} className="img-fluid me-md-3" alt="licet" />
          <div className='me-md-5'>
            <div className="h3 text-center text-gradient ms-2">CONTACT US!</div>
             <div className='d-grid gap-3 text-start mt-4 ms-2'>
               <div><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#f9f9f9" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104.1,104.1,0,0,0,24.1,132.1c2.1,54.7,47,98.8,101.8,99.9a104,104,0,0,0,91.4-50.8,4,4,0,0,0-4.1-6,52.5,52.5,0,0,1-9.2.8c-18.3,0-28.5-8-33.9-14.7a43.9,43.9,0,0,1-3.4-5A48,48,0,1,1,128,80a47.4,47.4,0,0,1,32,12.3v-4a8.2,8.2,0,0,1,7.5-8.3,8,8,0,0,1,8.5,8v40c0,14.6,4.9,32,28,32s27.6-16.2,28-30.5V128A104.1,104.1,0,0,0,128,24Z"></path><circle cx="128" cy="128" r="32"></circle></svg><a className="ms-2" href="mailto:flairit@licet.ac.in">flair2k22 team</a></div>
               <div><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#f9f9f9" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="32"></circle><path d="M172,28H84A56,56,0,0,0,28,84v88a56,56,0,0,0,56,56h88a56,56,0,0,0,56-56V84A56,56,0,0,0,172,28ZM128,176a48,48,0,1,1,48-48A48,48,0,0,1,128,176Zm52-88a12,12,0,1,1,12-12A12,12,0,0,1,180,88Z"></path></svg><a className="ms-2" href="https://www.instagram.com/flairit_2k22/">Message us!</a></div>
               <div className='d-flex'><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#f9f9f9" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M222,158.4l-46.9-20a15.6,15.6,0,0,0-15.1,1.3l-25.1,16.7a76.5,76.5,0,0,1-35.2-35h0L116.3,96a15.9,15.9,0,0,0,1.4-15.1L97.6,34a16.3,16.3,0,0,0-16.7-9.6A56.2,56.2,0,0,0,32,80c0,79.4,64.6,144,144,144a56.2,56.2,0,0,0,55.6-48.9A16.3,16.3,0,0,0,222,158.4Z"></path><path d="M157.4,47.7a72.6,72.6,0,0,1,50.9,50.9,8,8,0,0,0,7.7,6,7.6,7.6,0,0,0,2.1-.3,7.9,7.9,0,0,0,5.6-9.8,88,88,0,0,0-62.2-62.2,8,8,0,1,0-4.1,15.4Z"></path><path d="M149.1,78.6a40.4,40.4,0,0,1,28.3,28.3,7.9,7.9,0,0,0,7.7,6,6.4,6.4,0,0,0,2-.3,7.9,7.9,0,0,0,5.7-9.8,55.8,55.8,0,0,0-39.6-39.6,8,8,0,1,0-4.1,15.4Z"></path></svg><pre className="ms-2 mt-2">SANDESH 73586 73984</pre></div>
               <div className='d-flex'><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#f9f9f9" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M222,158.4l-46.9-20a15.6,15.6,0,0,0-15.1,1.3l-25.1,16.7a76.5,76.5,0,0,1-35.2-35h0L116.3,96a15.9,15.9,0,0,0,1.4-15.1L97.6,34a16.3,16.3,0,0,0-16.7-9.6A56.2,56.2,0,0,0,32,80c0,79.4,64.6,144,144,144a56.2,56.2,0,0,0,55.6-48.9A16.3,16.3,0,0,0,222,158.4Z"></path><path d="M157.4,47.7a72.6,72.6,0,0,1,50.9,50.9,8,8,0,0,0,7.7,6,7.6,7.6,0,0,0,2.1-.3,7.9,7.9,0,0,0,5.6-9.8,88,88,0,0,0-62.2-62.2,8,8,0,1,0-4.1,15.4Z"></path><path d="M149.1,78.6a40.4,40.4,0,0,1,28.3,28.3,7.9,7.9,0,0,0,7.7,6,6.4,6.4,0,0,0,2-.3,7.9,7.9,0,0,0,5.7-9.8,55.8,55.8,0,0,0-39.6-39.6,8,8,0,1,0-4.1,15.4Z"></path></svg><pre className="ms-2 mt-2">CRISPIN 97899 33204</pre></div>
             </div>
           </div>
          </div>
        </div>
      </section>
      <div className='my-5 w-50 d-flex flex-column justify-content-center'>
        <div className='h3 fw-bold text-gradient'>FREQUENTLY ASKED QUESTION</div>
        <Accordion className='bg-dark1'>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    </>
  )
}
