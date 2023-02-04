import Image from 'next/image'
import { IconBrandWhatsapp, IconMail } from '@tabler/icons-react'

const PHONE = '+34 649 349 953'
const EMAIL = 'info@tuperitomedico.com'

export const Header = () => {
  return (
    <div className='flex w-full flex-col items-center justify-between py-4 px-16 md:flex-row'>
      <Image src='/logo-full.jpeg' alt='main-image' width={256} height={80} />
      <div className='mt-4 flex flex-col items-center md:mt-0 md:flex-row'>
        <a href={`https://wa.me/${PHONE}`} className='inline-flex items-center gap-2'>
          <IconBrandWhatsapp width={20} height={20} /> {PHONE}
        </a>
        <span className='mx-2 hidden h-6 w-0.5 bg-gray-900 md:block' />
        <a href={`mailto:${EMAIL}`} className='inline-flex items-center gap-2 underline'>
          <IconMail width={20} height={20} className='-mb-0.5' /> {EMAIL}
        </a>
      </div>
    </div>
  )
}
