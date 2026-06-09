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
  let minTotal = 0
  let maxTotal = 0

  if (seleccion.paginaPrincipal) {
    minTotal += precios.implementacion.paginaPrincipal
    maxTotal += precios.implementacion.paginaPrincipal // Precio fijo
  }
  if (seleccion.paginasEstaticas) {
    minTotal += seleccion.paginasEstaticas * precios.implementacion.paginaEstatica.min
    maxTotal += seleccion.paginasEstaticas * precios.implementacion.paginaEstatica.max
  }
  if (seleccion.paginasDinamicas) {
    minTotal += seleccion.paginasDinamicas * precios.implementacion.paginaDinamica.min
    maxTotal += seleccion.paginasDinamicas * precios.implementacion.paginaDinamica.max
  }
  if (seleccion.seccion) {
    minTotal += seleccion.seccion * precios.funcionalidad.seccion.min
    maxTotal += seleccion.seccion * precios.funcionalidad.seccion.max
  }
  if (seleccion.dominio) {
    minTotal += precios.funcionalidad.dominio
    maxTotal += precios.funcionalidad.dominio // Precio fijo
  }
  if (seleccion.googleAnalytics) {
    minTotal += precios.funcionalidad.googleAnalytics.min
    maxTotal += precios.funcionalidad.googleAnalytics.max
  }

  // Ahora devolvemos un objeto con ambos valores
  return { minTotal, maxTotal }
}