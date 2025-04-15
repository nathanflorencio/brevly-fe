import { cn } from '@/lib/utils'
import type { IconProps } from 'phosphor-react'
import type { ComponentProps } from 'react'

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  icon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >
}

function Button({
  variant = 'primary',
  children,
  icon: Icon,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'flex items-center justify-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer',
        variant === 'primary' &&
          'w-[352px] h-[48px] rounded-lg bg-blue-base text-white',
        variant === 'primary' && '[&:not(:disabled)]:hover:bg-blue-dark',
        variant === 'secondary' &&
          'w-[70px] h-[32px] rounded-sm bg-gray-200 text-gray-500',
        variant === 'secondary' &&
          '[&:not(:disabled)]:hover:border [&:not(:disabled)]:hover:border-blue-base'
      )}
      {...props}
    >
      {variant === 'secondary' && Icon && <Icon className="w-4 h-4" />}
      {children}
    </button>
  )
}

function Title({ children }: { children: React.ReactNode }) {
  return <span>{children}</span>
}

function Icon({
  icon: Icon,
}: {
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >
}) {
  return <Icon className="w-4 h-4" />
}

Button.Title = Title
Button.Icon = Icon

export { Button }
