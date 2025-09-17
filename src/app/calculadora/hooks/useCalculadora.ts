// src/app/calculadora/hooks/useCalculadora.ts
import { precios } from '@/app/calculadora/data/precios'

type Seleccion = {
  paginaPrincipal?: boolean
  paginasEstaticas?: number
  paginasConjuntas?: number
  login?: boolean
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
  if (seleccion.paginasConjuntas) {
    total += seleccion.paginasConjuntas * precios.implementacion.paginaDinamica.min
  }
  if (seleccion.login) {
    total += precios.funcionalidad.login ?? 0
  }
  if (seleccion.cambios) {
    total += seleccion.cambios * precios.postImplementacion.cambios
  }
  if (seleccion.nuevasFuncionalidades) {
    total += seleccion.nuevasFuncionalidades * precios.postImplementacion.nuevasFuncionalidades
  }

  return total
}
