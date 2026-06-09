// src/app/calculadora/Calculadora.tsx
'use client'
import { useState, ChangeEvent } from 'react'
import { useCalculadora } from '@/app/calculadora/hooks/useCalculadora'
import NeoToggle from '@/app/calculadora/components/NeoToggle'
import NeoCounter from '@/app/calculadora/components/NeoCounter'
import BtnCotizar from '@/app/calculadora/components/BtnCotizar'

// 1. Tipamos los campos exactos para evitar el uso de 'any'
type CamposNumericos = 'paginasEstaticas' | 'paginasDinamicas' | 'seccion';

export default function Calculadora() {
  const [seleccion, setSeleccion] = useState({
    paginaPrincipal: true,
    paginasEstaticas: 1,
    paginasDinamicas: 1,
    googleAnalytics: false,
    dominio:true,
    seccion: 1,
    cambios: 0,
    nuevasFuncionalidades: 0
  })

  // Estados temporales para los inputs
  const [tempPaginasEstaticas, setTempPaginasEstaticas] = useState(1);
  const [tempPaginasDinamicas, setTempPaginasDinamicas] = useState(1);
  const [tempSeccion, setTempSeccion] = useState(1);

  const { minTotal, maxTotal } = useCalculadora(seleccion);

  // 2. Manejador del Toggle tipado correctamente
  const handleCheckboxChange = (field: CamposNumericos, isChecked: boolean) => {
    if (isChecked) {
      setSeleccion(s => ({ ...s, [field]: 1 }));
      if (field === 'paginasEstaticas') setTempPaginasEstaticas(1);
      if (field === 'paginasDinamicas') setTempPaginasDinamicas(1);
      if (field === 'seccion') setTempSeccion(1);
    } else {
      setSeleccion(s => ({ ...s, [field]: 0 }));
      // Reseteamos los estados temporales a 0 si desmarcan la opción
      if (field === 'paginasEstaticas') setTempPaginasEstaticas(0);
      if (field === 'paginasDinamicas') setTempPaginasDinamicas(0);
      if (field === 'seccion') setTempSeccion(0);
    }
  };

  // 3. Manejador del Input numérico tipado
  const handleInputChange = (field: CamposNumericos, e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (field === 'paginasEstaticas') setTempPaginasEstaticas(value);
    if (field === 'paginasDinamicas') setTempPaginasDinamicas(value);
    if (field === 'seccion') setTempSeccion(value);
  };

  const handleInputBlur = (field: CamposNumericos, tempValue: number) => {
    setSeleccion(s => ({ ...s, [field]: tempValue }));
  };

  return (
      <div className="cyber-pattern">
        <div className='calculadora' style={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>

          <h1 className="titulo-animado">
            <span>💰 Calculadora de precios WebPages</span>
          </h1>
          <br /><br /><br />
          <div style={{ marginLeft: '5px' }}>
            
            <label style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', gap: '10px' }}>
              <NeoToggle
                id="toggle-paginaPrincipal"
                checked={seleccion.paginaPrincipal}
                onChange={(checked: boolean) => setSeleccion(s => ({ ...s, paginaPrincipal: checked }))}
              />
              <span>Página principal</span>
              <div className="tooltip-container">
                <span className="tooltip-icon">ⓘ</span>
                <span className="tooltip-text">
                  La página de inicio es la cara de tu sitio web. Es la primera impresión que tus clientes tienen de tu marca.
                </span>
              </div>
            </label>

            <label style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', gap: '10px' }}>
              <NeoToggle
                id="toggle-paginasEstaticas"
                checked={seleccion.paginasEstaticas > 0}
                onChange={(checked: boolean) => handleCheckboxChange('paginasEstaticas', checked)}
              />
              <span>Páginas estáticas</span>
              <div className="tooltip-container">
                <span className="tooltip-icon">ⓘ</span>
                <span className="tooltip-text">
                  Una página estática es un sitio web simple sin bases de datos o funcionalidades avanzadas. Perfecta para "Acerca de nosotros" o "Contacto".
                </span>
              </div>
              {seleccion.paginasEstaticas > 0 && (
                <NeoCounter 
                  value={tempPaginasEstaticas} 
                  onChange={(val) => {
                    setTempPaginasEstaticas(val);
                    setSeleccion(s => ({ ...s, paginasEstaticas: val }));
                  }} 
                />
              )}
            </label>
            
            <label style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', gap: '10px' }}>
              <NeoToggle
                id="toggle-paginasDinamicas"
                checked={seleccion.paginasDinamicas > 0}
                onChange={(checked: boolean) => handleCheckboxChange('paginasDinamicas', checked)}
              />
              <span>Páginas Dinámicas</span>
              <div className="tooltip-container">
                <span className="tooltip-icon">ⓘ</span>
                <span className="tooltip-text">
                  Las páginas dinámicas interactúan con una base de datos para mostrar contenido que cambia. Ideal para blogs, tiendas online y portafolios.
                </span>
              </div>
              {seleccion.paginasDinamicas > 0 && (
                <NeoCounter 
                  value={tempPaginasDinamicas} 
                  onChange={(val) => {
                    setTempPaginasDinamicas(val);
                    setSeleccion(s => ({ ...s, paginasDinamicas: val }));
                  }} 
                />
              )}
            </label>
            
            <label style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', gap: '10px' }}>
              <NeoToggle
                id="toggle-dominio"
                checked={seleccion.dominio}
                onChange={(checked: boolean) => setSeleccion(s => ({ ...s, dominio: checked }))}
              />
              <span>Dominio</span>
              <div className="tooltip-container">
                <span className="tooltip-icon">ⓘ</span>
                <span className="tooltip-text">
                  Tu dominio es el nombre de tu sitio web (ej. "tumarca.com"). Es tu dirección en Internet.
                </span>
              </div>
            </label>
            
            <label style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', gap: '10px' }}>
              <NeoToggle
                id="toggle-seccion"
                checked={seleccion.seccion > 0}
                onChange={(checked: boolean) => handleCheckboxChange('seccion', checked)}
              />
              <span>Secciones</span>
              <div className="tooltip-container">
                <span className="tooltip-icon">ⓘ</span>
                <span className="tooltip-text">
                  Cada sección es un bloque de contenido que organiza la información en tu sitio, como "Testimonios" o "Servicios".
                </span>
              </div>
              {seleccion.seccion > 0 && (
                <NeoCounter 
                  value={tempSeccion} 
                  onChange={(val) => {
                    setTempSeccion(val);
                    setSeleccion(s => ({ ...s, seccion: val }));
                  }} 
                />
              )}
            </label>
            
            <label style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', gap: '10px' }}>
              <NeoToggle
                id="toggle-googleAnalytics"
                checked={seleccion.googleAnalytics}
                onChange={(checked: boolean) => setSeleccion(s => ({ ...s, googleAnalytics: checked }))}
              />
              <span>Google Analytics</span>
              <div className="tooltip-container">
                <span className="tooltip-icon">ⓘ</span>
                <span className="tooltip-text">
                  Google Analytics te permite medir el tráfico de tu sitio web para entender cómo lo usan tus visitantes.
                </span>
              </div>
            </label>
            
            <br /><br />
          
          {/* Contenedor Flex para alinear el H2 y el Botón horizontalmente */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '20px' 
          }}>
            
            <h2 style={{ margin: 0 }}>
              Total estimado: ${minTotal} {minTotal !== maxTotal ? `- $${maxTotal}` : ''}
            </h2>
            
            <BtnCotizar minTotal={minTotal} maxTotal={maxTotal} />
            
          </div>

        </div>
      </div>
    </div>
  );
  
}