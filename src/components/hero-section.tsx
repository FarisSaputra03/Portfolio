import React from 'react'
import Image from 'next/image'
const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hello!
        <br className="hidden lg:inline-block"/> My name is Faris Saputra
      </h1>
      <p className="mb-8 leading-relaxed"> Saya lulusan sekolah SMK NEGERI 7 BALEENDAH dengan 
      jurusan RPL atau Rekayasa Perangkat Lunak dan memiliki dasar-dasar tentang computer dan
      program.
      </p>
      <div className="flex justify-center">
        
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    <Image width={300} height={400} src="/img/faris.jpeg" alt="" />
    </div>
  </div>
</section>
  )
}

export default HeroSection