// data/precios.ts
export const precios = {
  implementacion: {
    paginaPrincipal: 35,
    paginaEstatica: { min: 3, max: 10 },
    paginaDinamica: { min: 15, max: 40 }
  },
  funcionalidad: {
    dominio: 12,
    seccion: { min: 3, max: 10 },
    animacionElemento: { min: 3, max: 10 },
    animacionConjunta: { min: 3, max: 20 },
    login: null, // "Concretar"
    gestionContenido: null,
    googleAnalytics: { min: 3, max: 10 },
    seo: { min: 0, max: 10 },
    hosting: 0,
    indexarGoogle: 0
  },
  postImplementacion: {
    cambios: 3,
    nuevasFuncionalidades: 5
  }
}