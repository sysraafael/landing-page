import React from 'react'

function destination() {
  return (
    <div className="my-40 mx-auto">
      <div>
        <p className="text-center text-base uppercase text-gray-600">Explore</p>
        <h1 className="text-center text-5xl font-bold text-gray-900">
          Destino
        </h1>
      </div>
      <div className="mt-10 mb-10 flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 ">
          <div className="group flex h-20 w-auto cursor-pointer items-center justify-center gap-8 rounded-xl border border-violet-400 px-8 hover:bg-violet-600 hover:shadow-xl ">
            <h1 className="text-xl font-semibold text-violet-600 group-hover:text-white">
              Floresta
            </h1>
          </div>
          <div className="group flex h-20 w-auto cursor-pointer items-center justify-center gap-8 rounded-xl border border-violet-400 px-8 hover:bg-violet-600 hover:shadow-xl ">
            <h1 className="text-xl font-semibold text-violet-600 group-hover:text-white">
              Montanhas
            </h1>
          </div>
          <div className="group flex h-20 w-auto cursor-pointer items-center justify-center gap-8 rounded-xl border border-violet-400 px-8 hover:bg-violet-600 hover:shadow-xl ">
            <h1 className="text-xl font-semibold text-violet-600 group-hover:text-white">
              Cidades
            </h1>
          </div>
          <div className="group flex h-20 w-auto cursor-pointer items-center justify-center gap-8 rounded-xl border border-violet-400 px-8 hover:bg-violet-600 hover:shadow-xl ">
            <h1 className="text-xl font-semibold text-violet-600 group-hover:text-white">
              Praias
            </h1>
          </div>
          <div className="group flex h-20 w-auto cursor-pointer items-center justify-center gap-8 rounded-xl border border-violet-400 px-8 hover:bg-violet-600 hover:shadow-xl ">
            <h1 className="text-xl font-semibold text-violet-600 group-hover:text-white">
              Ilhas
            </h1>
          </div>
          <div className="group flex h-20 w-auto cursor-pointer items-center justify-center gap-8 rounded-xl border border-violet-400 px-8 hover:bg-violet-600 hover:shadow-xl ">
            <h1 className="text-xl font-semibold text-violet-600 group-hover:text-white">
              Resorts
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default destination
