import React from "react"
import "../App.css"

import imgHeader from "../pictures/Graduation.jpg"

const Accueil = (props) => {
  
    return (
      <div>
      <div class="wave-container">
        <div class="grid grid-cols-3 gap-14 md:grid-cols-11 md:grid-rows-3">
          <div class="col-start-2 col-span-1 md:col-span-2 md:col-start-4 md:row-start-3">
            <div href="#" class="w-full flex items-center justify-center shadow-xl px-8 py-3 font-bold rounded-full text-white mainButton md:py-4 md:text-lg md:px-10">
              <a>Connexion</a>
            </div>
          </div>
          <div class="col-start-2 col-span-1 md:col-span-2 md:col-start-7 md:row-start-3">
            <div href="#" class="w-full flex items-center justify-center shadow-xl px-8 py-3 font-bold rounded-full text-white mainButton md:py-4 md:text-lg md:px-10">
              <a>S'inscrire</a>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 260"><path fill="#ffffff" fill-opacity="1" d="M0,256L80,240C160,224,320,192,480,192C640,192,800,224,960,218.7C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      </div>

      <div id="onHoverPresentation">
        <div class="grid gap-9 md:grid-cols-10 md:grid-rows-5">
          <div class="col-start-2 col-span-2 md:col-span-2 md:col-start-2 md:row-start-2">
          <div href="#" class="w-full flex items-center justify-center shadow-xl px-8 py-3 font-bold rounded-lg text-white mainButton md:py-4 md:text-lg md:px-10">
              <a>S'inscrire</a>
            </div>
          </div>
        </div>

      </div>



      </div>

      
    )
  }
  
  export default Accueil
  