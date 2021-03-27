import React, { useEffect } from "react"
import { useGlobalContext } from '../../util/context'

import epingleFlatIcon from "../../svg/epingle.svg"
import userFlatIcon from "../../svg/utilisateur.svg"

const ButtonGrTravail = (props) => {
  const { user } = useGlobalContext()

  var participants = props.dataUneBibliotheque.users.length + 1

  const firebaseHorodatageToString = (timestamp) => {
    console.log(timestamp)
    let date = new Date(timestamp * 1000);
    let dateString = dayToString(date.getDay()) + " " + beautifyingDate(date.getDate()) + "/" + beautifyingDate(date.getMonth()) + " - " + beautifyingDate(date.getHours()) + "h" + beautifyingDate(date.getMinutes())
    return dateString
  }

  const beautifyingDate = (number) => {
    if (number < 10) {
      let beautifiedDate = "0" + number
      return beautifiedDate
    } else {
      return number
    }
  }

  const dayToString = (day) => {
    switch (day) {
      case 0:
        return "Dimanche"
      case 1:
        return "Lundi"
      case 2:
        return "Mardi"
      case 3:
        return "Mercredi"
      case 4:
        return "Jeudi"
      case 5:
        return "Vendredi"
      case 6:
        return "Samedi"
    }
  }

  useEffect(() => {
    if (user.username == props.dataUneBibliotheque.admin) {
      document.getElementById('adminDiv').style.display = 'block';
    }

  }, [])

  return (
    <a
      href="#"
      style={{}}
      className="w-11/12 bg-white grow grButton popUpEffect px-8 py-3 text-black md:py-4 md:text-xs md:px-6 md:mt-4 md:m-auto
      grid grid-cols-6 grid-rows-2"
    >
      <div style={{ color: "#585858" }} className="col-start-1 col-span-3 row-start-1 row-span-1 text-sm font-bold">{firebaseHorodatageToString(props.dataUneBibliotheque.horaire._seconds)}
      </div>
      <div style={{ color: "#585858" }} className="col-start-1 col-span-5 row-start-2 row-span-1 text-sm flex">
        <img src={epingleFlatIcon} style={{ width: '1.4rem' }} className="md:mt-0.5" />
        <p className="mt-0.5 ml-1 font-semibold">{props.dataUneBibliotheque.lieu}</p>
      </div>
      <div style={{ color: "#585858" }} className="col-start-4 col-span-2 row-start-1 row-span-1 text-sm font-semibold">Jusqu'à : <b>{beautifyingDate(props.dataUneBibliotheque.capaciteMax)}</b> participants</div>
      <div style={{ color: "#585858" }} className="col-start-6 col-span-1 row-start-1 row-span-1 text-sm flex justify-end md:mr-3">
        <img src={userFlatIcon} style={{ width: '1.4rem' }} className="md:mt-0.5" />
        <p className="mt-0.5 ml-1 font-bold">{beautifyingDate(participants)}</p>
      </div>
      <div style={{ color: "#585858" }} className="col-start-6 col-span-1 row-start-2 row-span-1 text-sm flex justify-end">
        <p id="adminDiv" style={{ backgroundColor: "#5FCAD6", color: "white", borderRadius: '12px' }} className="md:px-2 mt-0.5 ml-1 font-semibold hidden">ADMIN</p>
      </div>
    </a>
  )
}

export default ButtonGrTravail
