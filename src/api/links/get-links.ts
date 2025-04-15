import { api } from '@/lib/axios'
import type { ILink } from '@/types/link'

type GetLinksResponse = {
  links: ILink[]
  total: number
}

export async function getLinks(): Promise<GetLinksResponse> {
  const response = await api.get('/links')
  return response.data
}
