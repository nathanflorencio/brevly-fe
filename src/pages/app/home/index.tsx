import { getLinks } from '@/api/links/get-links'
import { CreateLinkForm } from '@/components/create-link-form'
import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { useQuery } from '@tanstack/react-query'
import { DownloadSimple, Link } from 'phosphor-react'

export function Home() {
  const { data: links, isLoading: isLoadingLinks } = useQuery({
    queryKey: ['links'],
    queryFn: getLinks,
  })

  return (
    <div className="flex flex-col justify-center max-w-7xl mx-auto items-start h-screen w-screen">
      <Header />
      <main className="flex gap-5 w-full">
        <div className="bg-gray-100 lg:w-[450px] w-full p-8 rounded-lg">
          <h1 className="text-gray-600 text-lg mb-6">Novo link</h1>
          <CreateLinkForm />
        </div>
        <div className="lg:w-[580-px] lg:h-[234px] w-full bg-gray-100 p-8 rounded-lg">
          <div className="flex items-center justify-between">
            <h2 className="text-gray-600 text-lg mb-6">Meus links</h2>
            <Button
              variant="secondary"
              disabled={links?.total === 0 || isLoadingLinks}
            >
              <Button.Icon icon={DownloadSimple} />
              <Button.Title className="font-semibold text-sm-semibold">
                Baixar CSV
              </Button.Title>
            </Button>
          </div>
          <div className="flex w-full items-center justify-center mt-5 pb-4">
            {links?.total === 0 && !isLoadingLinks && (
              <div className="w-full flex items-center justify-center flex-col gap-3">
                <div className="border w-full border-gray-200 mb-4" />
                <Link className="size-8 text-gray-400" />
                <span className="text-xs text-gray-500">
                  Ainda não existem links cadastrados
                </span>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
