import { useState } from 'react'
import { GoogleMap, useJsApiLoader, OverlayView } from '@react-google-maps/api'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

const containerStyle = { width: '100vw', height: '100vh' }
const defaultCenter = { lat: 42.3265, lng: -122.8756 }

const Map = ({ eventData }) => {
  const [locationInfo, setLocationInfo] = useState(null)

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  if (!isLoaded) return <div>Loading map...</div>

  return (
    <div className="map">
      <GoogleMap mapContainerStyle={containerStyle} center={defaultCenter} zoom={4}>
        {eventData.map(ev => {
          if (!ev.geometry || ev.geometry.length === 0) return null
          const lat = ev.geometry[0].coordinates[1]
          const lng = ev.geometry[0].coordinates[0]
          return (
            <OverlayView
              key={ev.id}
              position={{ lat, lng }}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >
              <LocationMarker onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
            </OverlayView>
          )
        })}
      </GoogleMap>
      {locationInfo && <LocationInfoBox info={locationInfo} onClose={() => setLocationInfo(null)} />}
    </div>
  )
}

export default Map