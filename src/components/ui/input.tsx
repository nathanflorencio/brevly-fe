import { cn } from '@/lib/utils'
import type { ComponentProps } from 'react'

type InputProps = ComponentProps<'input'> & {}

type LabelProps = ComponentProps<'label'> & {
  title: string
}

function Label({ className, htmlFor, title, ...props }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        className,
        'text-xs text-gray-500, active:text-blue-base invalid:text-danger'
      )}
      {...props}
    >
      {title}
    </label>
  )
}

function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        className,
        'w-[352px] h-[48px] p-4 rounded-lg placeholder:text-gray-400 ring-1 ring-gray-300 active:ring-blue-base invalid:ring-danger'
      )}
      {...props}
    />
  )
}

export { Input, Label }
