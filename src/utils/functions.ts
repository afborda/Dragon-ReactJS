import { format } from 'date-fns'

export function firstCapitalLetter(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export function formatDate(value: string) {
  return format(new Date(value), 'dd/MM/yyyy')
}
