import React from 'react'

const SoloNotif = (props) => {
  return (
    <div
      className="gap-5w-11/12 bg-white grow grButton popUpEffect px-8 py-3 text-black md:py-4 md:text-xs md:px-6 my-2 m-auto
        grid grid-cols-7"
    >
      <div className="col-start-1 col-span-1">IMG</div>
      <div className="col-start-2 col-span-6 md:font-bold ourMainFontColor">
        {props.dataNotif.desc}
      </div>
    </div>
  )
}

export default SoloNotif
