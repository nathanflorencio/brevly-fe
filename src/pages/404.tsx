import { Link } from 'react-router'

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2 bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-4xl font-bold">Página não encontrada</h1>
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
