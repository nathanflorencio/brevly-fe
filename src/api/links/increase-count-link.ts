import { api } from '@/lib/axios'

export async function increaseAccessCount(id: string) {
  const response = await api.patch(`/links/${id}`)
  return response.data
}
