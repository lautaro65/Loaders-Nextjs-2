"use client"

import React from 'react'
import { motion } from 'framer-motion'

const ParticleLoader: React.FC = () => {
  const particles = 12
  const radius = 50

  return (
    <div className="relative w-40 h-40" aria-label="Cargando" role="status">
      {[...Array(particles)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-3 h-3 bg-purple-400 rounded-full"
          style={{
            top: '50%',
            left: '50%',
            margin: '-6px 0 0 -6px'
          }}
          animate={{
            x: Math.cos(index * (360 / particles) * (Math.PI / 180)) * radius,
            y: Math.sin(index * (360 / particles) * (Math.PI / 180)) * radius,
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * (2 / particles),
          }}
        />
      ))}
    </div>
  )
}

export default ParticleLoader

