// Write your code here.
import './index.css'

const TechnologyCards = props => {
  const {CardsDetails} = props
  const {title, description, imgUrl, className} = CardsDetails

  return (
    <li className={className}>
      <h1 className="heading">{title}</h1>
      <p className="paragraph">{description}</p>
      <div className="flexing-img">
        <img src={imgUrl} alt={title} className="img" />
      </div>
    </li>
  )
}

export default TechnologyCards
