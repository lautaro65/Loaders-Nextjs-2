"use client"

import React from 'react'
import ParticleLoader from './components/ParticleLoader/page'

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-900">
      <ParticleLoader />
    </main>
  )
}

