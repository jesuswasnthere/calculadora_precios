// src/app/calculadora/components/NeoCounter.tsx
'use client'
import React from 'react'

type Props = {
  value: number
  min?: number
  max?: number
  onChange: (value: number) => void
}

export default function NeoCounter({ value, min = 0, max = 20, onChange }: Props) {
  const handleDecrement = () => {
    if (value > min) onChange(value - 1)
  }

  const handleIncrement = () => {
    if (value < max) onChange(value + 1)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10)
    if (isNaN(val)) onChange(min)
    else if (val >= min && val <= max) onChange(val)
    else if (val > max) onChange(max)
  }

  return (
    <div className="neo-counter">
      <button type="button" className="neo-counter-btn left" onClick={handleDecrement}>
        <svg className="neo-counter-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
        </svg>
      </button>
      
      <input
        type="text"
        className="neo-counter-input"
        value={value}
        onChange={handleChange}
      />
      
      <button type="button" className="neo-counter-btn right" onClick={handleIncrement}>
        <svg className="neo-counter-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
        </svg>
      </button>
    </div>
  )
}