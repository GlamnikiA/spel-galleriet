import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

// Pages
import Home from './pages/Home'

// Components
import Header from './components/Header'

// API
import { getGameDeals } from './api/getGameDeals'


function App() {
  const [gameDeals, setGameDeals] = useState([])

  useEffect(() => {
    getDealsRequest()
  }, [])

  const getDealsRequest = async () => {
    const deals = await getGameDeals()
    setGameDeals(deals)
  }

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<Home gameDeals={gameDeals}/>}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App;
