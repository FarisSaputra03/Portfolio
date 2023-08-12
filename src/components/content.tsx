import React from 'react'
import Image from 'next/image'
const Content = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Keahlian</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
        Di bawah ini adalah dasar-dasar keahlian saya jadi mohon bantuan nya supaya saya bisa memperdalam lagi keahlian tersebut.
       </p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
        <Image width={720} height={400} src="/img/HTML.jpeg" alt="" />
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">HTML</h2>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
        <Image width={721} height={401} src="/img/CSS.jpeg" alt="" />
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">CSS</h2>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
        <Image width={722} height={402} src="/img/LARAVEL.jpeg" alt="" />
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">LARAVEL</h2>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
        <Image width={723} height={403} src="/img/JS.jpeg" alt="" />
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">JAVASCRIPT</h2>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Content