import React, { useEffect, useState } from "react"
import { useGlobalContext } from '../../util/context'

import epingleFlatIcon from "../../svg/epingle.svg"
import userFlatIcon from "../../svg/utilisateur.svg"
import JoinGroup from "./JoinGroup"

const ButtonGrTravail = (props) => {
  const { user } = useGlobalContext()

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isUserInGroup, setIsUserInGroup] = useState(false)

  const handleClose = () => {
    setIsDialogOpen(false)
  }

  var participants = props.dataUneBibliotheque.usersInGroup.length + 1
  //TODO - to component, used in Fiche
  const firebaseHorodatageToString = (timestamp) => {
    //console.log(timestamp)
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
      default:
        return "Néant"
    }
  }

  useEffect(() => {
    props.dataUneBibliotheque.usersInGroup.forEach(u => {
      if (user.username === u) {
        setIsUserInGroup(true)
        return
      }
    });
  }, [])

  return (
    <div>
      <a
        onClick={() => setIsDialogOpen(true)}
        style={{}}
        className="w-11/12 bg-white grow grButton popUpEffect px-8 py-3 text-black md:py-4 md:text-xs md:px-6 my-2 m-auto grid grid-cols-6 grid-rows-3 md:grid-rows-2"
      >
        <div style={{ color: "#585858" }} className="col-start-1 col-span-5 row-start-1 row-span-1 md:col-start-1 md:col-span-3 md:row-start-1 md:row-span-1 text-sm font-bold">{firebaseHorodatageToString(props.dataUneBibliotheque.horaire._seconds)}
        </div>
        <div style={{ color: "#585858" }} className="col-start-1 col-span-6 row-start-3 row-span-1 md:col-start-1 md:col-span-5 md:row-start-2 md:row-span-1 text-sm flex">
          <img src={epingleFlatIcon} style={{ width: '1.4rem' }} className="md:mt-0.5" alt="epingle flat icon" />
          <p className="mt-0.5 ml-1 font-semibold">{props.dataUneBibliotheque.lieu}</p>
        </div>
        <div style={{ color: "#585858" }} className="col-start-1 col-span-6 row-start-2 row-span-1 md:col-start-4 md:col-span-2 md:row-start-1 md:row-span-1 text-sm font-semibold">Jusqu'à : <b>{beautifyingDate(props.dataUneBibliotheque.capaciteMax)}</b> participants</div>
        <div style={{ color: "#585858" }} className="col-start-6 col-span-1 row-start-1 row-span-1 text-sm flex justify-end md:mr-3">
          <img src={userFlatIcon} style={{ width: '1.4rem' }} className="md:mt-0.5" alt="user flat icon" />
          <p className="mt-0.5 ml-1 font-bold">{beautifyingDate(participants)}</p>
        </div>
        <div style={{ color: "#585858" }} className="col-start-6 col-span-1 row-start-2 row-span-1 text-sm flex justify-end">
          {props.dataUneBibliotheque.admin === user.username && <p id="adminDiv" style={{ backgroundColor: "#5FCAD6", color: "white", borderRadius: '12px' }} className="px-2 mt-0.5 ml-1 font-semibold">ADMIN</p>}
          {isUserInGroup && <p id="inscritDiv" style={{ backgroundColor: "#bf6e6f", color: "white", borderRadius: '12px' }} className="px-2 mt-0.5 ml-1 font-semibold">INSCRIT</p>}
          </div>

      </a>
      <JoinGroup open={isDialogOpen} onClose={handleClose} group={props.dataUneBibliotheque} dateMiseEnForme={firebaseHorodatageToString(props.dataUneBibliotheque.horaire._seconds)} />
    </div>

  )
}

export default ButtonGrTravail
