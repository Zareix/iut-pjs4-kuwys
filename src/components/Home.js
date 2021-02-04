import React from "react"

import Test from "./Test"
import logo from "../logo.svg"

const styles = {
  backgroundColor: "white",
  color: "black",
}

const Home = (props) => {
  const user = props.firebase.auth().currentUser
  console.log(user)

  return (
    <div className="App">
      <header className="App-header">
        {user && (
          <div>
            <p>Connecté en tant que :</p>
            <p>Email : {user.email}</p>
            <p>displayName : {user.displayName}</p>
          </div>
        )}
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="font-bold">KUWYS</h1>
        <h2>Keeping Up With Your Studies</h2>
        <p className="text-yellow-300">
          Edit <code style={styles}>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h4 className="mt-10">Petits tests pour vous la mif :</h4>
        <Test num={1}></Test>
        <Test num={2}></Test>
      </header>
    </div>
  )
}

export default Home
