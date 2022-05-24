import { useState, useEffect } from "react"

function App() {
  const [forecast, setForecast] = useState([])

  useEffect(() => {
    fetch("/api/WeatherForecast")
      .then((response) => response.json())
      .then((result) => setForecast(result))
  }, [])

  return (
    <div className="App">
      <header className="App-header">Zombiecide weather</header>
      <ul>
        {forecast.map((item: any, index) => (
          <li key={index}>
            {item.summary} {item.date}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
