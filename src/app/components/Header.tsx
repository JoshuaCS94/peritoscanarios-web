import Image from 'next/image'

const PHONE = '(+34) 649 349 953'
const EMAIL = 'info@tuperitomedico.com'

export const Header = () => {
  return (
    <div className='flex w-full items-center justify-between py-4 px-16'>
      <Image src='/logo-full.jpeg' alt='main-image' width={256} height={80} />
      <p>
        <a href={`tel:${PHONE}`}>{PHONE}</a>
        &nbsp;|&nbsp;
        <a href={`mailto:${EMAIL}`} className='underline'>
          {EMAIL}
        </a>
      </p>
    </div>
  )
}
