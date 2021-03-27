import React,{useState,useEffect} from 'react'
import API from '../../util/api'
// TODO
const Comments = (props) => {
  const {comments} = props

  //TODO - To component, used in ButtonGrTravail
  const firebaseHorodatageToString = (timestamp) => {
    //console.log('Time', timestamp)
    let date = new Date(timestamp * 1000)
    //console.log(date);
    let dateString =
      dayToString(date.getDay()) +
      ' ' +
      beautifyingDate(date.getDate()) +
      '/' +
      beautifyingDate(date.getMonth()) +
      ' - ' +
      beautifyingDate(date.getHours()) +
      'h' +
      beautifyingDate(date.getMinutes())
    
    return dateString
  }

  const beautifyingDate = (number) => {
    //console.log(number);
    if (number < 10) {
      let beautifiedDate = '0' + number
      return beautifiedDate
    } else {
      return number
    }
  }
  const dayToString = (day) => {
    switch (day) {
      case 0:
        return 'Dimanche'
      case 1:
        return 'Lundi'
      case 2:
        return 'Mardi'
      case 3:
        return 'Mercredi'
      case 4:
        return 'Jeudi'
      case 5:
        return 'Vendredi'
      case 6:
        return 'Samedi'
    }
  }
  
  return <div className="w-full">
      {
      comments.map(c => {
          return <div key={c.id} className="rounded-xl border w-auto shadow-lg p-2">
              <div className="flex">
              <img src={c.userImage} className="h-10 m-2" alt="profil pp"></img>
              <h1 className="font-bold text-md">{c.username}</h1>
              </div>
              <p className="mx-2">{firebaseHorodatageToString(c.createdAt._seconds)}</p>
              <p className=" m-4 flex text-justify">{c.body}</p>
            </div>
      })}
      </div>
}

export default Comments


