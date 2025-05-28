import { useEffect } from 'react'
import { useLocation, useParams, Link } from 'react-router'
import { useQuery, useMutation } from '@tanstack/react-query'
import { getOriginalLink } from '@/api/links/get-original-link'
import { increaseAccessCount } from '@/api/links/increase-count-link'

export function Redirect() {
  const { shortUrl } = useParams()
  const location = useLocation()

  const {
    data: link,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['original-link', shortUrl],
    queryFn: () => getOriginalLink(shortUrl!),
    enabled: !!shortUrl,
  })

  const { mutateAsync: increaseAccessCountFn } = useMutation({
    mutationFn: (id: string) => increaseAccessCount(id),
  })

  useEffect(() => {
    if (link?.link.id && link?.link.originalUrl) {
      increaseAccessCountFn(link.link.id)
      window.location.href = link.link.originalUrl
    }
  }, [link, increaseAccessCountFn])

  if (!shortUrl || isLoading) {
    return null
  }

  const renderNotFound = () => (
    <main className="flex flex-col items-center justify-center h-screen w-screen">
      <div className="bg-gray-100 flex flex-col items-center justify-center w-[580px] rounded-lg p-12">
        <img src="./404.svg" alt="404" />
        <h2 className="mt-6 text-xl text-gray-600">Link não encontrado</h2>
        <div className="mt-6 text-md text-gray-500 flex flex-col items-center justify-center max-w-[400px]">
          <span className="text-md text-gray-500 text-wrap text-center">
            O link que você está tentando acessar não existe, foi removido ou é
            uma URL inválida. Saiba mais em{' '}
            <Link to="/" className="text-blue-base underline">
              brev.ly
            </Link>
            .
          </span>
        </div>
      </div>
    </main>
  )

  const renderRedirecting = () => (
    <main className="flex flex-col items-center justify-center h-screen w-screen">
      <div className="bg-gray-100 flex flex-col items-center justify-center w-[580px] rounded-lg p-12">
        <img src="./logo-icon.svg" alt="logo" />
        <h2 className="mt-6 text-xl text-gray-600">Redirecionando...</h2>
        <div className="mt-6 text-md text-gray-500 flex flex-col items-center justify-center max-w-[400px]">
          <span className="text-md text-gray-500 text-wrap text-center">
            O link será aberto automaticamente em alguns instantes. Não foi
            redirecionado?{' '}
            <Link to={location.pathname} className="text-blue-base underline">
              Acesse aqui
            </Link>
          </span>
        </div>
      </div>
    </main>
  )

  if (isError || !link?.link.originalUrl) {
    return renderNotFound()
  }

  return renderRedirecting()
}
