import React, { useEffect } from "react"
import { Link } from "react-router-dom"

var firebaseui = require("firebaseui")

const Login = (props) => {
  var firebase = props.firebase

  useEffect(() => {
    var ui = new firebaseui.auth.AuthUI(firebase.auth())

    var uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
          console.log(authResult.user.uid)
          document.getElementById("backButton").style.display = "block"
          return false
        },
        uiShown: function () {
          document.getElementById("loader").style.display = "none"
        },
      },
      // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
      signInFlow: "popup",
      signInSuccessUrl: "#",
      signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
      // Terms of service url.
      tosUrl: "<your-tos-url>",
      // Privacy policy url.
      privacyPolicyUrl: "<your-privacy-policy-url>",
    }

    ui.start("#firebaseui-auth-container", uiConfig)
    return () => {}
  }, [firebase])

  return (
    <div>
      <h1>Welcome to My Awesome App</h1>
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div>
      <Link id="backButton" to="home" style={{ display: "none" }}>
        Back
      </Link>
    </div>
  )
}

export default Login
