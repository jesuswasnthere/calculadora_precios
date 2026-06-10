// data/precios.ts
export const precios = {
  implementacion: {
    paginaPrincipal: 40,
    paginaEstatica: { min: 5, max: 10 },
    paginaDinamica: { min: 10, max: 30 }
  },
  funcionalidad: {
    dominio: 15,
    seccion: { min: 5, max: 10 },
    animacionElemento: { min: 5, max: 10 },
    animacionConjunta: { min: 5, max: 20 },
    login: null, // "Concretar"
    gestionContenido: null,
    corpmail: 5,
    googleAnalytics: { min: 5, max: 10 },
    seo: { min: 5, max: 10 },
    hosting: 5,
    indexarGoogle: 5
  },
  postImplementacion: {
    cambios: { min: 3, max: 5 },
    nuevasFuncionalidades: 10
  }
}