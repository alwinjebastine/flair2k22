/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { IconProps } from './Header'
import { motion } from 'framer-motion'
import Woodsprite from '../assets/images/Woodsprite.png'
import Logo from '../assets/images/Logo.png'
import mq from '../utils/mq'

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
    font-size: 40px;
  }
  text-align: left;
  position: relative;
  max-width: 600px;
  width: 100%;
`
const ctaCss = css`
  font-family: var(--font-serif);
  color: var(--l-blue);
  text-decoration: none;
  cursor: pointer;
  font-weight: 100;

  display: inline-block;
  position: relative;
  margin-top: 20px;
  font-size: 28px;

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    margin-top: 4px;
    height: 1px;
    background-color: var(--l-blue);

    transform: scaleX(0);
    transform-origin: right center;
    transition: transform cubic-bezier(0.19, 1, 0.22, 1) 0.6s;
  }

  &:hover {
    color: var(--white);
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: left center;
  }
`
const Hero = () => {
  return (
    <div
      css={css`
        width: 100%;
        height: ${window.innerHeight}px;
        // position: relative;
        background-color: var(--black);
      `}
      className="text-end vh-100"
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
          overflow: hidden;

          ${mq['lg']} {
            left: 70px;
            bottom: 140px;
          }
          left: 20px;
          bottom: 70px;
        `}
      >
        <motion.h1 css={tagLineCss}>
          A rendezvous beyond the horizon, a challenge for diligence, a chance
          to exhibit your exorbitance
        </motion.h1>
        <motion.a href="/register" css={ctaCss}>
          Register Now
        </motion.a>
      </motion.div>
    </div>
  )
}

export default Hero
