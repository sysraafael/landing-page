import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import Image from 'next/image'
import HeroImage from '../public/images/hero.png'
import Trending from '../components/Trending'

function MainPage() {
  return (
    <>
      <div className=" w-screen">
        <div className="flex h-auto w-screen items-center justify-center p-8">
          <div className="ml-10 md:ml-20 md:w-1/2">
            <h1 className="my-5 text-5xl font-bold text-gray-800 md:text-7xl">
              Explore World
            </h1>
            <p className="text-base text-gray-500 md:text-xl">
                Viajar é uma das melhores maneiras de aumentar o crescimento pessoal. 
                Isso permite que você faça coisas diferentes de suas atividades de rotina diária
            </p>
            <div className="mt-12 flex items-start justify-start gap-5 text-center ">
              <button className=" h-14  cursor-pointer rounded-xl  bg-violet-600 px-8 font-semibold text-white hover:bg-violet-900 hover:shadow-xl">
                Agende Agora !
              </button>
              <button className="h-14 cursor-pointer rounded-xl  border border-violet-600 px-8 font-semibold text-violet-600 hover:bg-violet-900 hover:text-white hover:shadow-xl">
                Preços
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <Image
              src={HeroImage}
              width={900}
              height={700}
              objectFit="contain"
              alt="hero img"
            />
          </div>
        </div>
        <Trending />
      </div>
    </>
  )
}

export default MainPage
