import { Link, useRouteError } from 'react-router'

export function RouterError() {
  const error = useRouteError() as Error

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2 bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-4xl font-bold">Whoops, algo aconteceu...</h1>
      <p className="text-accent-foreground">
        Um erro aconteceu na aplicação, abaixo você encontra mais detalhes:
      </p>
      <pre>{error?.message || JSON.stringify(error)}</pre>
      <p className="text-accent-foreground">
        Voltar para o{' '}
        <Link
          to="../"
          className="underline text-swc-primary-light dark:text-swc-primary-dark"
        >
          Dashboard
        </Link>
      </p>
    </div>
  )
}
