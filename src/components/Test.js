import React, { useState, useEffect } from "react"

const Test = (props) => {
  // state = état = données du composants
  // Quand on l'update, le rendu du COMPOSANT se re-fait en entier (le return)
  // useState(etatInitial) renvoie l'objet du state (ici visible un boolean) et le setter (setVisible)
  const [visible, setVisible] = useState(false)
  const [text, setText] = useState("GG")

  const handleClick = () => {
    if (text === "OH") {
      setText("AH")
    } else {
      setText("OH")
    }
  }

  // Equivalent de componentDidMount, etc. d'une classe React
  // Se lance au rendu du composant et lance le return quand le composant disparait
  // [x, y, z] la liste des variables dont useEffect dépend
  // ATTENTION AUX BOUCLES : si useEffect appelle un setter du state !
  useEffect(() => {
    console.log("rendu de test : " + props.num)
    return () => {
      console.log("fin de test : " + props.num)
    }
  }, [props.num])

  // > Return = le rendu (sous forme de JSX)
  // > props = des paramètres qu'on peut envoyer à chaque composants
  // ici on envoye num={x} dans l'App donc props.num = x
  // > {visible && <div></div>} signifie que si visible == true (et != null implicitement) on retourne la <div></div> après le &&
        // -> on peut enchainer plusieurs &&
        // -> on peut return une seul <div> (penser à foutre tout dans une si on doit afficher un gros truc)
  // > (p) => quelqueChose(p) permet de créer une fonction fléché avec paramètre
        // -> pour éviter les problèmes de réf à this et permettre d'envoyer des paramètres
  // > {" "} insère un espace
  return (
    <div>
      {props.num}
      {" "}

      <button onClick={() => setVisible(!visible)}>Click me</button>
      {visible && <span> {text} </span>}
      <button onClick={handleClick}>Click me aussi</button>
    </div>
  )
}

export default Test
