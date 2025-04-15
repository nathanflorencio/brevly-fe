import { api } from '@/lib/axios'

type GetHealthCheckResponse = {
  message: string
}

export async function getHealthCheck(): Promise<GetHealthCheckResponse> {
  const response = await api.get('/health')
  return response.data
}
