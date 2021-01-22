import logo from "./logo.svg"
import "./App.css"
import Test from "./components/Test"

const styles = {
  backgroundColor: "white",
  color: "black",
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="font-bold">KUWYS</h1>
        <h2>Keeping Up With Your Studies</h2>
        <p class="text-yellow-300">
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

export default App
