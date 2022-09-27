/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { IconProps } from './Header'
import { motion } from 'framer-motion'
import licet from '../assets/images/licet.png'
import mq from '../utils/mq'
import React from 'react'
import flair from '../assets/images/Logo_with_2k22-1.png'

const DownArrow = ({ xCss, ...props }: IconProps) => (
  <motion.svg
    initial={{ x: -25 }}
    animate={{ y: [-10, -10, 0, 0], opacity: [0, 1, 1, 0] }}
    transition={{
      duration: 2,
      times: [0, 0.25, 0.75, 1],
      ease: 'easeInOut',
      repeat: Infinity,
      repeatDelay: 1,
    }}
    css={xCss}
    {...props}
    width="49"
    height="17"
    viewBox="0 0 49 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 1L24.9273 15L48 1" stroke="white" strokeWidth="2" />
  </motion.svg>
)

const tagLineCss = css`
  // font-family: var(--font-sans);
  color: var(--white);
  font-size: 26px;
  line-height: 1.3em;
  ${mq['lg']} {
    line-height: 1em;
    font-size: 30px;
  }
  // text-align: left;
  position: relative;
  max-width: 600px;
  width: 100%;
  //
`
// const ctaCss = css`
//   font-family: var(--font-serif);
//   color: var(--l-blue);
//   text-decoration: none;
//   cursor: pointer;
//   font-weight: 100;

//   display: inline-block;
//   position: relative;
//   margin-top: 20px;
//   font-size: 28px;

//   &::after {
//     content: '';
//     display: block;
//     position: absolute;
//     width: 100%;
//     margin-top: 4px;
//     height: 1px;
//     background-color: var(--l-blue);

//     transform: scaleX(0);
//     transform-origin: right center;
//     transition: transform cubic-bezier(0.19, 1, 0.22, 1) 0.6s;
//   }

//   &:hover {
//     color: var(--white);
//   }
//   &:hover::after {
//     transform: scaleX(1);
//     transform-origin: left center;
//   }
// `
const Hero = () => {
  return (
    <React.Fragment>
      <div
        css={css`
          background-color: var(--black);
        `}
        className="vh-100 w-100"
      >
        <div className="d-flex justify-content-end align-items-center">
          <img
            src="./Bg.png"
            alt="avatar"
            className="img-fluid vh-100 card bg-transparent"
          />
        </div>
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 2,
            },
          }}
          viewport={{ once: true }}
          css={css`
            position: absolute;
            text-align: left;

            ${mq['lg']} {
              left: 70px;
              bottom: 160px;
            }
            left: 20px;
            bottom: 100px;
          `}
        >
          <div className="d-md-flex flex-column align-items-center justify-content-center">
            {/* <img
              src={licet}
              className="img-fluid"
              alt="licet"
              style={{ width: '150px', height: '150px' }}
            /> */}
            <div className="text-center  me-md-3 me-lg-5">
              <h2
                className="h2 mb-0 ms-md-2 fw-bold lh-base italics me-md-3 me-lg-5"
                css={css`
                  font-family: var(--font-sans);
                  font-size: 1em;
                  margin-bottom: 15px;
                  ${mq['lg']} {
                    font-size: 1.8em;
                    margin-bottom: 20px;
                  }
                `}
              >
                Department of Information Technology organises
              </h2>
              <img
                src={flair}
                alt="flair"
                css={css`
                  width: 40%;
                `}
                className="img-fluid rounded-3 mt-3 me-md-3 me-lg-5"
              />
            </div>
            <motion.h1
              css={tagLineCss}
              className="mt-md-5 mt-3 mb-md-4 mb-3 ms-2  ms-md-3 ms-lg-5"
            >
              A rendezvous beyond the horizon!
            </motion.h1>
            <div className=" me-md-3 me-lg-5">
              <motion.a
                href="/events"
                className="h6 btn-gradient rounded-pill p-2 px-3 text-dark fw-bold ms-2 ms-md-0 me-md-3 me-lg-5"
              >
                Wanna peek?
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
      {/* <div className="ms-5 ps-5" style={{ marginTop: '-50px' }}>
        <DownArrow />
      </div> */}
    </React.Fragment>
  )
}

export default Hero
