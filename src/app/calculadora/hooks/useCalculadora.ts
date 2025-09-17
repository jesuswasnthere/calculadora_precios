// src/app/calculadora/hooks/useCalculadora.ts
import { precios } from '@/app/calculadora/data/precios'

type Seleccion = {
  paginaPrincipal?: boolean
  paginasEstaticas?: number
  paginasDinamicas?: number
  dominio?: boolean
  seccion?: number
  googleAnalytics?: boolean
  ecommerce?: boolean
  cambios?: number
  nuevasFuncionalidades?: number
}

export function useCalculadora(seleccion: Seleccion) {
  let total = 0

  if (seleccion.paginaPrincipal) {
    total += precios.implementacion.paginaPrincipal
  }
  if (seleccion.paginasEstaticas) {
    total += seleccion.paginasEstaticas * precios.implementacion.paginaEstatica.min
  }
  if (seleccion.paginasDinamicas) {
    total += seleccion.paginasDinamicas * precios.implementacion.paginaDinamica.min
  }
  if (seleccion.seccion) {
    total += seleccion.seccion * precios.funcionalidad.seccion.min
  }
  if (seleccion.dominio) {
    total += precios.funcionalidad.dominio
  }
  if (seleccion.googleAnalytics) {
    total += precios.funcionalidad.googleAnalytics.min
  }
  // if (seleccion.cambios) {
  //   total += seleccion.cambios * precios.postImplementacion.cambios
  // }
  // if (seleccion.nuevasFuncionalidades) {
  //   total += seleccion.nuevasFuncionalidades * precios.postImplementacion.nuevasFuncionalidades
  // }

  return total
}