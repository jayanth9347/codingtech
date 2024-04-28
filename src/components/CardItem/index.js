import './index.css'

const Userprofile = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList

  return (
    <li className={className}>
      <h4> {title} </h4>
      <p> {description} </p>
      <img src={imgUrl} alt={title} />
    </li>
  )
}

export default Userprofile
