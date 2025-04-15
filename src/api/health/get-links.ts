import { api } from '@/lib/axios'

export async function getLinks() {
  const response = await api.get('/links')
  return response.data
}
