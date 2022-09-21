/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { IconProps } from './Header'
import { motion } from 'framer-motion'

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
  font-family: var(--font-sans);
  color: var(--white);
  font-size: 40px;
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

        position: relative;
        // background-image: url('/Bg.png');
        // background-size: cover;
        background-color: var(--black);
      `}
      className="text-end vh-100"
    >
      <img src="./Bg.png" alt="avatar" className="img-fluid vh-100" />
      <div
        css={css`
          position: absolute;
          left: 40px;
          bottom: 140px;
        `}
      >
        <h1 css={tagLineCss}>Unlock.</h1>
        <h1 css={tagLineCss}>Within</h1>
        <a href="/register" css={ctaCss}>
          Register Now
        </a>
      </div>
      <DownArrow
        xCss={css`
          position: absolute;
          bottom: 35px;
          left: 50%;
        `}
      />
    </div>
  )
}

export default Hero
