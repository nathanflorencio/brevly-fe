import { Input, Label } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { createLink } from '@/api/links/create-link'

const createLinkFormSchema = z.object({
  originalUrl: z.string().url('URL inválida'),
  shortUrl: z.string().min(1, 'URL encurtada é obrigatória'),
})

type CreateLinkFormSchema = z.infer<typeof createLinkFormSchema>

type CreateLinkParams = {
  data: {
    originalUrl: string
    shortUrl: string
  }
}

export function CreateLinkForm() {
  /* const { mutateAsync: createLinkFn, isPending: isCreatingLink } = useMutation({
    mutationFn: (data: CreateLinkParams) => {
      createLink({ originalUrl: data.originalUrl, shortUrl: data.shortUrl })
    },
  }) */

  const form = useForm<CreateLinkFormSchema>({
    resolver: zodResolver(createLinkFormSchema),
    values: {
      originalUrl: '',
      shortUrl: 'brev.ly/',
    },
  })

  function handleSubmit(data: CreateLinkFormSchema) {
    console.log(data)
  }

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={form.handleSubmit(handleSubmit)}
    >
      <div className="flex flex-col gap-2">
        <Label htmlFor="originalUrl" title="Link original" />
        <Input
          autoFocus
          id="originalUrl"
          name="originalUrl"
          type="text"
          placeholder="www.exemplo.com.br"
        />

        <Label htmlFor="shortUrl" title="Link encurtado" />
        <Input id="shortUrl" name="shortUrl" type="text" />
      </div>
      <Button type="submit" className="w-full mt-6" variant="primary" disabled>
        <Button.Title>Salvar link</Button.Title>
      </Button>
    </form>
  )
}
