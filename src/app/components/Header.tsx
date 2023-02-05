'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useEventListener } from 'usehooks-ts'
import { IconBrandWhatsapp, IconMail } from '@tabler/icons-react'

import { PHONE, EMAIL, WHATSAPP_LINK } from '@/utils/constants'
import { cn } from '@/utils/misc'

export const Header = () => {
  const [shrunk, setShrunk] = useState(false)

  const handleScroll = () => {
    setShrunk(window.scrollY > 200)
  }

  useEventListener('scroll', handleScroll)

  return (
    <div
      className={cn(
        'fixed top-0 flex h-fit w-full flex-col items-center justify-between border-b bg-white py-4 px-16 shadow-lg backdrop-blur-sm transition-all md:flex-row',
        shrunk ? '-mt-4 h-40 md:h-20' : 'h-44 md:h-32'
      )}
    >
      <Image
        src='/logo-full.jpeg'
        alt='main-image'
        width={256}
        height={80}
        className={cn('transition-all', shrunk && 'scale-50 md:mt-4 md:-ml-16')}
      />
      <div className='-mt-2 flex flex-col items-center md:mt-4 md:mt-0 md:flex-row'>
        <a href={WHATSAPP_LINK} target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2'>
          <IconBrandWhatsapp width={20} height={20} className='text-green-400' /> {PHONE}
        </a>
        <span className='mx-2 hidden h-6 w-0.5 bg-gray-900 md:block' />
        <a href={`mailto:${EMAIL}`} className='inline-flex items-center gap-2'>
          <IconMail width={20} height={20} className='mb-[-1px]' /> {EMAIL}
        </a>
      </div>
    </div>
  )
}
