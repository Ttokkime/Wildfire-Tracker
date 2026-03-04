import { useState, useEffect } from 'react'
import Map from './components/Map'
import Loader from './components/Loader'
import Header from './components/Header'

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('https://eonet.gsfc.nasa.gov/api/v3/events?category=wildfires&status=open')
        const data = await res.json()
        setEventData(data.events)
      } catch (err) {
        console.error('Failed to fetch events:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchEvents()
  }, [])

  return (
    <div>
      <Header />
      {loading ? <Loader /> : <Map eventData={eventData} />}
    </div>
  )
}

export default App