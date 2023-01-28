import Image from 'next/image'

const HomePage = () => {
  return (
    <main className='flex h-screen'>
      <Image src='/main-background.jpeg' alt='main-image' width={512} height={256} className='m-auto' />
    </main>
  )
}

export default HomePage
