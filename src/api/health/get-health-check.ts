import { api } from '@/lib/axios'

export async function getHealthCheck() {
  const response = await api.get('/health')
  return response.data
}
