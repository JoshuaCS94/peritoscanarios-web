'use client'

import { useRef, FormEvent } from 'react'

import { EMAIL } from '@/utils/constants'

const ContactForm = () => {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const name = nameRef.current!.value
    const email = emailRef.current!.value
    const message = messageRef.current!.value

    window.open(`mailto:${EMAIL}?body=Nombre: ${name}%0d%0aCorreo: ${email}%0d%0a%0d%0a${message}`)
  }

  return (
    <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-4'>
      <input type='text' required placeholder='Nombre' ref={nameRef} className='input-bordered input-primary input' />
      <input type='email' required placeholder='Correo' ref={emailRef} className='input-bordered input-primary input' />
      <textarea
        required
        placeholder='Mensaje'
        ref={messageRef}
        className='textarea-bordered textarea-primary textarea col-span-2'
      />
      <button className='btn-primary btn col-span-2 md:col-span-1'>Enviar</button>
    </form>
  )
}

export default ContactForm
