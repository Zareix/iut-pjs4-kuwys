import React, { useState, useContext } from "react"

import { Link } from "react-router-dom"

import { DbContext } from "../App"
import { useCheckUniquePseudo } from "./dbaccess"

const Rien = () => {
  console.log(useCheckUniquePseudo("arthur"))
  return <div>Rien</div>
}

export default Rien
