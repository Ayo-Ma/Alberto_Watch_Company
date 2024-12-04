import  "../../Css/watches-grid-items.css"
import PropTypes from "prop-types";
const WatchGridItem = ({ image, title, description, link }) => {
  return (
    <div className="watches-grid-child">
    <img src={image} alt={title} />
    <div className="overlay">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link}>View More</a>
    </div>
  </div>
  )
  
}

WatchGridItem.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  };
  

export default WatchGridItem
