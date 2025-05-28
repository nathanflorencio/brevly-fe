import { api } from '@/lib/axios'

export async function exportCSV() {
  const response = await api.post('/links/exports')
  return response.data
}
