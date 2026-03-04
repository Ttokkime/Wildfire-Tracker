const LocationInfoBox = ({ info, onClose }) => {
  return (
    <div className="location-info">
      <button onClick={onClose} style={{ float: 'right', background: 'none', border: 'none', color: '#fff', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
      <h2>Event Location Info</h2>
      <ul>
        <li>ID: <strong>{info.id}</strong></li>
        <li>Title: <strong>{info.title}</strong></li>
      </ul>
    </div>
  )
}

export default LocationInfoBox