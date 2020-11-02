import { format } from 'date-fns'
import { orderBy } from 'lodash'

interface IDragonData {
  id: string
  createdAt: string
  name: string
  type: string
  histories: string[]
}

export function firstCapitalLetter(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export function formatDatePT(value: string) {
  return format(new Date(value), 'dd/MM/yyyy')
}
export function formatDateEN(value: string) {
  return format(new Date(value), 'yyyy/MM/dd')
}

export function orderByObject(object: IDragonData[]) {
  const orderDragons = orderBy(object, ['name'], ['asc'])
  return orderDragons
}
