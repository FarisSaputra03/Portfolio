import React from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-l from-pink-300 via-purple-300 to-indigo-400">
      <div className="flex justify-center">
        <div className="container mx-auto flex py-24 md:flex-row  items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hello!
              <br className=" lg:inline-block" /> My name is Faris Saputra
            </h1>
            <p className="text-white text-xl lowercase">
              Saya lulusan sekolah SMK NEGERI 7 BALEENDAH dengan jurusan RPL
              atau Rekayasa Perangkat Lunak dan memiliki dasar-dasar tentang
              computer dan program.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="rounded-full"
              width={300}
              height={500}
              src="/img/faris.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
