import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

const LocationMarker = ({ onClick }) => {
  return (
    <div onClick={onClick} style={{ cursor: 'pointer', transform: 'translate(-50%, -50%)' }}>
      <Icon icon={locationIcon} className="location-icon" />
    </div>
  )
}

export default LocationMarker