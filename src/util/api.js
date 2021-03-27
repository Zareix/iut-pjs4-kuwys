import axios from "axios"

export default axios.create({
	baseURL: "https://europe-west1-pjs4-iut-ts.cloudfunctions.net/api/",
})
