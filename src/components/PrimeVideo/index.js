import Slider from 'react-slick'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div>
        <Slider {...settings}>
          {moviesList.map(each => (
            <div>
              <img src={each.thumbnailUrl} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PrimeVideo
