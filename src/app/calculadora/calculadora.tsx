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

  // Nuevos estados para manejar los valores temporales de los inputs
  const [tempPaginasEstaticas, setTempPaginasEstaticas] = useState(0);
  const [tempPaginasDinamicas, setTempPaginasDinamicas] = useState(0);
  const [tempSeccion, setTempSeccion] = useState(0);

  const total = useCalculadora(seleccion);

  // Función para manejar el cambio en los checkboxes
  const handleCheckboxChange = (field: any, e: any) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setSeleccion(s => ({ ...s, [field]: 1 }));
      if (field === 'paginasEstaticas') setTempPaginasEstaticas(1);
      if (field === 'paginasDinamicas') setTempPaginasDinamicas(1);
      if (field === 'seccion') setTempSeccion(1);
    } else {
      setSeleccion(s => ({ ...s, [field]: 0 }));
    }
  };

  // Función para manejar el cambio en los inputs de número
  const handleInputChange = (field: any, e: any) => {
    const value = Number(e.target.value);
    if (field === 'paginasEstaticas') setTempPaginasEstaticas(value);
    if (field === 'paginasDinamicas') setTempPaginasDinamicas(value);
    if (field === 'seccion') setTempSeccion(value);
  };

  // Función para manejar la confirmación al perder el foco o presionar Enter
  const handleInputBlur = (field: any, tempValue: any) => {
    setSeleccion(s => ({ ...s, [field]: tempValue }));
  };

  return (
    <div className='calculadora' style={{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>

      <h1>💰 Calculadora de precios</h1>
      <br /><br /><br />
      <div style={{ marginLeft: '5px' }}>
        <label>
          <input
            style={{ marginRight: '10px' }}
            type="checkbox"
            checked={seleccion.paginaPrincipal}
            onChange={e => setSeleccion(s => ({ ...s, paginaPrincipal: e.target.checked }))}
          />
          Página principal
        </label>
        <br /><br />

        <label>
          <input
            style={{ marginRight: '10px' }}
            type="checkbox"
            checked={seleccion.paginasEstaticas > 0}
            onChange={e => handleCheckboxChange('paginasEstaticas', e)}
          />
          Páginas estáticas
          {seleccion.paginasEstaticas > 0 && (
            <input
              style={{ marginLeft: '10px', textAlign: 'center' }}
              min={0}
              max={20}
              type="number"
              value={tempPaginasEstaticas}
              onChange={e => handleInputChange('paginasEstaticas', e)}
              onBlur={e => handleInputBlur('paginasEstaticas', Number(e.target.value))}
            />
          )}
        </label>
        <br /><br />

        <label>
          <input
            style={{ marginRight: '10px' }}
            type="checkbox"
            checked={seleccion.paginasDinamicas > 0}
            onChange={e => handleCheckboxChange('paginasDinamicas', e)}
          />
          Páginas Dinámicas
          {seleccion.paginasDinamicas > 0 && (
            <input
              style={{ marginLeft: '10px', textAlign: 'center' }}
              min={0}
              max={20}
              type="number"
              value={tempPaginasDinamicas}
              onChange={e => handleInputChange('paginasDinamicas', e)}
              onBlur={e => handleInputBlur('paginasDinamicas', Number(e.target.value))}
            />
          )}
        </label>
        <br /><br />

        <label>
          <input
            style={{ marginRight: '10px' }}
            type="checkbox"
            checked={seleccion.dominio}
            onChange={e => setSeleccion(s => ({ ...s, dominio: e.target.checked }))}
          />
          Dominio
        </label>
        <br /><br />

        <label>
          <input
            style={{ marginRight: '10px' }}
            type="checkbox"
            checked={seleccion.seccion > 0}
            onChange={e => handleCheckboxChange('seccion', e)}
          />
          Secciones
          {seleccion.seccion > 0 && (
            <input
              style={{ marginLeft: '10px', textAlign: 'center' }}
              min={0}
              max={20}
              type="number"
              value={tempSeccion}
              onChange={e => handleInputChange('seccion', e)}
              onBlur={e => handleInputBlur('seccion', Number(e.target.value))}
            />
          )}
        </label>
        <br /><br />

        <label>
          <input
            style={{ marginRight: '10px' }}
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
  );
}
