import React from 'react'

import pp from '../../svg/PPAnonymous.svg'

const Bio = () => {
  return (
    <div className="grid grid-cols-3 border w-11/12 h-50 shadow-lg p-4">
      <div className="grid justify-center content-start col-span-1">
        <img src={pp}></img>
        <button className="border bg-yellow-300 text-white font-bold text-xs h-6 mt-4 px-2 rounded-full">
          Modifier la photo
        </button>
      </div>
      <div className="py-4 col-span-2">
        <h1 className="font-bold text-xl">Pseudo</h1>
        <h2 className="mt-2 mb-1">Mini-Biographie</h2>
        <textarea
          style={{ resize: 'none' }}
          placeholder="Ecrivez ici"
          className="border w-4/5 h-20 shadow-inner"
        ></textarea>
        <div className="grid justify-end w-4/5 mt-1">
          <button className="border bg-yellow-300 text-white font-bold text-xs h-6 px-2 rounded-full">
            Modifier la biographie
          </button>
        </div>
      </div>
    </div>
  )
}

export default Bio
