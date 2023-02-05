import Image from 'next/image'

import { Header } from './components/Header'
import { Footer } from './components/Footer'

const HomePage = () => {
  return (
    <main className='h-screen pt-44 md:pt-28'>
      <Header />
      <div className='pb-8'>
        <Image src='/background.jpg' alt='background' width={900} height={400} className='md:float-right md:ml-16' />
        <div className='mt-4 text-center md:mt-0 md:pl-16 md:pt-40'>
          <h1 className='text-4xl font-semibold leading-snug text-blue-900 md:text-5xl'>
            Valoración de Daño Corporal y Peritaje Médico
          </h1>
          <button className='mt-4 rounded bg-blue-900 px-4 py-2 text-white md:mt-12'>Reservar ahora</button>
        </div>
      </div>
      <div className='clear-both flex flex-col-reverse gap-8 bg-sky-100 p-10 md:grid md:grid-cols-2 md:gap-16 md:p-20'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d438.5986252605379!2d-16.491143841773543!3d28.42562290000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc41d51ef908bedd%3A0xc90d780a86de75b1!2sCarr.%20Espa%C3%B1a%2C%2011%2C%2038390%20Sta%20%C3%9Arsula%2C%20Santa%20Cruz%20de%20Tenerife!5e0!3m2!1sen!2ses!4v1675196543857!5m2!1sen!2ses'
          width={600}
          height={450}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          className='w-full shrink-0 border-2'
        ></iframe>
        <div className='flex flex-col justify-center gap-2'>
          <h2 className='text-3xl font-semibold'>Tu Perito Médico</h2>
          <div className='my-4 h-0.5 w-full bg-gray-900 md:w-60' />
          <p className='text-justify'>
            Gabinete médico dirigido por la <strong>Dra. Masiel Navarro Pérez</strong> (Col. 383807844), Licenciada en
            Medicina en la Universidad de Ciencias Médicas de la Habana, Máster en Valoración de Daño Corporal y
            Peritaje Médico en la Universidad de Barcelona, así como especialista en Elaboración de Informes Periciales
            en la Universidad Antonio de Nebrija. Disponiendo de amplia experiencia en el ámbito laboral e incapacidades
            y ejerciendo su labor bajo los principios de:
          </p>
          <ul className='list-inside list-disc'>
            <li>Independencia y libertad</li>
            <li>Lealtad e integridad</li>
            <li>Dignidad</li>
            <li>Profesionalidad, objetividad, imparcialidad y veracidad</li>
            <li>Capacitación y formación</li>
            <li>Secreto profesional y confidencialidad</li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col gap-8 p-10 md:grid md:grid-cols-2 md:gap-16 md:p-20'>
        <div>
          <h2 className='text-3xl'>Servicios</h2>
          <div className='my-4 h-0.5 w-full bg-gray-900 md:w-60' />
          <ul>
            <li>Consulta médica</li>
            <li>Elaboración de informes de aptitud</li>
            <li>Accidentes (tráfico, vía pública, laboral o común)</li>
            <li>Impugnación de alta médica</li>
            <li>Determinación de contingencia profesional (EP o AT)</li>
            <li>Determinación de contingencia común (ITCC)</li>
            <li>Valoración integral para solicitud de cambio de puesto de trabajo</li>
            <li>Valoración de incapacidad permanente (parcial, total, absoluta, gran invalidez)</li>
            <li>Cálculo estimado de la cuantía indemnizatoria</li>
            <li>Asistencia a juicio</li>
          </ul>
        </div>
        <div>
          <h2 className='text-3xl'>Honorarios</h2>
          <div className='my-4 h-0.5 w-full bg-gray-900 md:w-60' />
          <p>
            Precios personalizados para cada caso teniendo en cuenta la dificultad del mismo, tiempo empleado, urgencia,
            especialización exigida, utilización de material específico, desplazamientos y asistencia a juicio
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default HomePage
