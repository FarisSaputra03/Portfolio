import React from 'react'
import Image from 'next/image'
function Static() {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div className="w-full sm:p-4 px-4 mb-6">
        <h1 className="title-font font-medium text-xl mb-2 text-gray-900">Student Internship Cyberlabs</h1>
        <div className="leading-relaxed">Saya dulu waktu SMK pernah Student Internship dan ditugaskan membuat web 
        Tropisianimal mengugunakan LARAVEL 8 atau versi 8 dan saya pernah mendapat tugas seperti dibawah berikut.
        </div>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-gray-900">Mebuat BlogSpot</h2>
        <p className="leading-relaxed">Tugas pertama saya adalah mebuat blogspot, untuk absen selama student internship</p>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-gray-900">Membuat Website</h2>
        <p className="leading-relaxed">Tugas kedua saya membuat website Tropisianimal menggunakan Laravel 8</p>
      </div>
    </div>
    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
    <Image width={400} height={400} src="/img/cyberlabs.png" alt="" />
    </div>
  </div>
</section>
  )
}

export default Static