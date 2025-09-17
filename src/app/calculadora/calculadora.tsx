// src/app/calculadora/Calculadora.tsx
'use client'
import { useState } from 'react'
import { useCalculadora } from '@/app/calculadora/hooks/useCalculadora'

export default function Calculadora() {
  const [seleccion, setSeleccion] = useState({
    paginaPrincipal: true,
    paginasEstaticas: 0,
    paginasDinamicas: 0,
    googleAnalytics: false,
    dominio: false,
    seccion: 0,
    cambios: 0,
    nuevasFuncionalidades: 0
  })

  const total = useCalculadora(seleccion)

  return (
    <div className='calculadora' style={{
        padding: '2rem' ,
        display: 'flex', // activa el flex
        flexDirection: 'column', // uno debajo del otro
        alignItems: 'center'     // centra horizontalmente el bloque
      }}>

      <h1>💰 Calculadora de precios</h1>
      <br />
      <div style={{ marginLeft: '5px' }}>
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
            checked={seleccion.dominio}
            onChange={e => setSeleccion(s => ({ ...s, dominio: e.target.checked }))}
            />
            Dominio
        </label>
        <br /><br />

        <label>
          <input style={{ marginRight: '10px' }}
            type="checkbox"
            checked={seleccion.seccion > 0}
            onChange={e => setSeleccion(s => ({ ...s, seccion: e.target.checked ? 1 : 0 }))}
          />
          Secciones
          {seleccion.seccion > 0 && (
            <input style={{ marginLeft: '10px', textAlign: 'center' }}
              min={0}
              max={20}
              type="number"
              value={seleccion.seccion}
              onChange={e => setSeleccion(s => ({ ...s, seccion: Number(e.target.value) }))}
            />
          )}
        </label>
        <br /><br />

        <label>
          <input style={{ marginRight: '10px' }}
            type="checkbox"
            checked={seleccion.googleAnalytics}
            onChange={e => setSeleccion(s => ({ ...s, googleAnalytics: e.target.checked }))}
            />
            Google Analytics
        </label>
        <br /><br />

        <h2>Total: ${total}</h2>
      </div>
    </div>
  )
}