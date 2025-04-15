import { getLinks } from '@/api/health/get-links'
import { useQuery } from '@tanstack/react-query'

export function Home() {
  const { data: links, isLoading: isLoadingLinks } = useQuery({
    queryKey: ['links'],
    queryFn: getLinks,
  })

  console.log(links)

  return <div>...</div>
}
