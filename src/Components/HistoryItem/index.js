import './index.css'

const HistoryItem = props => {
  const {list, clicked} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = list
  const deletelist = () => {
    clicked(id)
  }
  return (
    <li className="licontainer">
      <p className="time">{timeAccessed}</p>
      <div className="titlecontainer">
        <img src={logoUrl} alt="domain logo" className="domainimage" />
        <p className="title">
          {title} <span className="domainurl">{domainUrl}</span>
        </p>
      </div>
      <button
        type="button"
        className="button"
        testid="delete"
        onClick={deletelist}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="deleteimg"
        />
      </button>
    </li>
  )
}

export default HistoryItem
