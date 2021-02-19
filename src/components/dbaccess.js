import React, { useState, useContext } from "react"

import { Link } from "react-router-dom"

import { DbContext } from "../App"

export const useCheckUniquePseudo = async (pseudo) => {
  const { db } = useContext()

  const users = await db.collection("users")
  const response = users.find((user) => user.pseudo === pseudo)
  return response.length === 0
}
