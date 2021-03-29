import React from 'react'
// TODO
const Comments = (props) => {
  const { comments } = props

  //TODO - To component, used in ButtonGrTravail
  const firebaseHorodatageToString = (timestamp) => {
    let date = new Date(timestamp * 1000)
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
      default:
        return 'Néant'
    }
  }

  return (
    <div className="w-full">
      {comments.map((comment) => {
        return (
          <div key={comment.id} className="rounded-xl my-3 border w-auto p-2">
            <div className="flex">
              <img src={comment.userImage} className="h-10 m-2" alt="profil pp"></img>
              <div className="grid">
                <h1 className="font-bold text-md">{comment.username}</h1>
                <p className="my-1">
                  {firebaseHorodatageToString(comment.createdAt._seconds)}
                </p>
              </div>
            </div>
            <p className=" m-4 flex text-justify">{comment.body}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Comments
