import React, { useCallback, ReactNode } from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import Footer from './Footer'
interface Props {
  children?: ReactNode
}

export const BaseLayout = ({ children }: Props) => {
  const particlesOptions = {
    particles: {
      number: {
        value: 300,
        density: {
          enable: true,
          value_area: 1262.6960138265217,
        },
      },
      color: {
        value: '#c2e5f0',
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 1,
          color: '#5fa7c5',
        },
        polygon: {
          nb_sides: 3,
        },
      },
      opacity: {
        value: 0.5688555587603761,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0,
          sync: false,
        },
      },
      size: {
        value: 2.5,
        random: true,
        anim: {
          enable: true,
          speed: 4,
          size_min: 0.3,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: '#c2e5f0',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 600,
        },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'bubble',
        },
        onclick: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 250,
          size: 0,
          duration: 2,
          opacity: 0,
          speed: 3,
        },
        repulse: {
          distance: 400,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  }

  const particlesInit = useCallback((main: any) => {
    loadFull(main)
  }, [])
  return (
    <>
      <Particles
        options={particlesOptions as any}
        init={particlesInit as any}
      />
      <section className="mx-auto">
        <Header />
        {children}
        <Footer />
      </section>
    </>
  )
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
