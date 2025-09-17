// src/app/calculadora/Calculadora.tsx
'use client'
import { useState } from 'react'
import { useCalculadora } from '@/app/calculadora/hooks/useCalculadora'

export default function Calculadora() {
  const [seleccion, setSeleccion] = useState({
    paginaPrincipal: true,
    paginasEstaticas: 0,
    paginasDinamicas: 0,
    login: false,
    cambios: 0,
    nuevasFuncionalidades: 0
  })

  const total = useCalculadora(seleccion)

  return (
    <div style={{ padding: '2rem' }}>
      <h1>💰 Calculadora de precios</h1>
      <br />
      <div style={{ marginLeft: '50px' }}>
        <label>
          <input style={{ marginRight: '10px' }}
            type="checkbox"
            checked={seleccion.paginaPrincipal}
            onChange={e => setSeleccion(s => ({ ...s, paginaPrincipal: e.target.checked }))}
          />
          Página principal
        </label>
        <br /><br />

        <label>
          <input style={{ marginRight: '10px' }}
            type="checkbox"
            checked={seleccion.paginasEstaticas > 0}
            onChange={e => setSeleccion(s => ({ ...s, paginasEstaticas: e.target.checked ? 1 : 0 }))}
          />
          Páginas estáticas
          {seleccion.paginasEstaticas > 0 && (
            <input style={{ marginLeft: '10px', textAlign: 'center' }}
              min={0}
              max={20}
              type="number"
              value={seleccion.paginasEstaticas}
              onChange={e => setSeleccion(s => ({ ...s, paginasEstaticas: Number(e.target.value) }))}
            />
          )}
        </label>
        <br /><br />

        <label>
          <input style={{ marginRight: '10px' }}
            type="checkbox"
            checked={seleccion.paginasDinamicas > 0}
            onChange={e => setSeleccion(s => ({ ...s, paginasDinamicas: e.target.checked ? 1 : 0 }))}
          />
          Páginas Dinámicas
          {seleccion.paginasDinamicas > 0 && (
            <input style={{ marginLeft: '10px', textAlign: 'center' }}
              min={0}
              max={20}
              type="number"
              value={seleccion.paginasDinamicas}
              onChange={e => setSeleccion(s => ({ ...s, paginasDinamicas: Number(e.target.value) }))}
            />
          )}
        </label>
        <br /><br />

        <label>
          <input style={{ marginRight: '10px' }}
            type="checkbox"
            checked={seleccion.login}
            onChange={e => setSeleccion(s => ({ ...s, login: e.target.checked }))}
            />
            Login
        </label>
        <br /><br />

        <h2>Total: ${total}</h2>
      </div>
    </div>
  )
}