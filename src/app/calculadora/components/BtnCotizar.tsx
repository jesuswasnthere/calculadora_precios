// src/app/calculadora/components/BtnCotizar.tsx
'use client'

type Props = {
  minTotal: number
  maxTotal: number
}

export default function BtnCotizar({ minTotal, maxTotal }: Props) {
  const handleEnviar = () => {
    const telefono = "+584125249992"; // TODO: Reemplaza con tu número de WhatsApp
    const rango = minTotal !== maxTotal ? `$${minTotal} - $${maxTotal}` : `$${minTotal}`;
    const texto = `¡Hola Jesús Mariño! Estuve en tu página y me gustaría solicitar una cotización de página web. Mi presupuesto estimado es: ${rango}.`;
    
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="cart-wrapper">
      <div className="cart-icon" onClick={handleEnviar}>
        <div className="cart-tooltip">Cotizar</div>
        {/* Ícono de Carrito de Compras */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      </div>
    </div>
  )
}