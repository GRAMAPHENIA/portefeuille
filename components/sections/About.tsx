'use client'

import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../SectionHeading'
import { useSectionInView } from '@/lib/hooks'

export default function About () {
  const { ref } = useSectionInView('Acerca')

  return (
    <section
      className="mb-10 max-w-[45rem] leading-8 text-center  scroll-mt-60"
      id="about"
    >
      <motion.section
        ref={ref}
        className=""
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <SectionHeading>Acerca de mi</SectionHeading>
        <p className="mb-3">
          <span>
            Soy{' '}
            <span className="font-bold">Juan Pablo Di corato.</span> {' '}
          </span>
          <span className="font-bold">
            Mi enfoque principal es el desarrollo web{' '}
          </span>
          <span className="italic">
            Durante más de dos años, he estado aprendiendo y construyendo
            proyectos para mejorar mis habilidades.
          </span>{' '}
          {''}
          <span className="">
            Me mantengo al tanto de las últimas tendencias
            tecnológicas, siempre dispuesto a aprender algo nuevo.{' '}
          </span>
        </p>
      </motion.section>
    </section>
  )
}
