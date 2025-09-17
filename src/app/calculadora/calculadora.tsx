// src/app/calculadora/Calculadora.tsx
'use client'
import { useState } from 'react'
import { useCalculadora } from './hooks/useCalculadora'

export default function Calculadora() {
  const [seleccion, setSeleccion] = useState({
    paginaPrincipal: true,
    paginasEstaticas: 0,
    paginasConjuntas: 0,
    login: false,
    cambios: 0,
    nuevasFuncionalidades: 0
  })

  const total = useCalculadora(seleccion)

  return (
    <div style={{ padding: '2rem' }}>
      <h1>💰 Calculadora de precios</h1>

      <label>
        <input
          type="checkbox"
          checked={seleccion.paginaPrincipal}
          onChange={e => setSeleccion(s => ({ ...s, paginaPrincipal: e.target.checked }))}
        />
        Página principal
      </label>

      <label>
        Páginas estáticas:
        <input
          type="number"
          value={seleccion.paginasEstaticas}
          onChange={e => setSeleccion(s => ({ ...s, paginasEstaticas: Number(e.target.value) }))}
        />
      </label>

      <label>
        Login:
        <input
          type="checkbox"
          checked={seleccion.login}
          onChange={e => setSeleccion(s => ({ ...s, login: e.target.checked }))}
        />
      </label>

      <h2>Total: ${total}</h2>
    </div>
  )
}
