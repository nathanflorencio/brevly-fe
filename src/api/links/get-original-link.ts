import { api } from '@/lib/axios'
import { increaseAccessCount } from '@/api/links/increase-count-link'

type GetLinkResponse = {
  link: {
    id: string
    originalUrl: string
  }
}

export async function getOriginalLink(
  shortUrl: string
): Promise<GetLinkResponse> {
  const response = await api.get(`/links/${shortUrl}`)
  if (response.status === 200) {
    const id = response.data.link.id
    await increaseAccessCount(id)
  }
  return response.data
}
