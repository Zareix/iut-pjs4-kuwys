import React from 'react'
import { useGlobalContext } from '../../util/context'

const EcoleMembersNumber = (props) => {
  const { user } = useGlobalContext()

  return (
    <div className={"greyBox px-6 py-3 " + (props.className !== null ? props.className : "")}>
      <div className="flex grButton p-4 px-6 bg-white ourMainFontColor">
        <p className="w-2/3 font-semibold">Nombre de membres :</p>
        <p className="w-1/3 text-right font-bold">{user.institute.membersNumber}</p>
      </div>
    </div>
  )
}

export default EcoleMembersNumber
