import axios from "axios"

export default axios.create({
	baseURL: "https://0b964dd8417a.ngrok.io/pjs4-iut-ts/europe-west1/api/",
  // baseURL: "https://europe-west1-pjs4-iut-ts.cloudfunctions.net/api/",
})
