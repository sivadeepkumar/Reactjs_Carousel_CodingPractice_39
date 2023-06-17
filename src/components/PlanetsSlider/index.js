import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'
import './index.css'

import {PlanetsAppContainer, Heading} from './styledComponents'

const PlanetsSlider = props => {
  const {planetsList} = props

  const setting = {
    dots: true,
    slidesToScroll: 1,
    slidesToShow: 1,
  }

  return (
    <PlanetsAppContainer data-testid="planets">
      <Heading>PLANETS</Heading>
      <Slider {...setting}>
        {planetsList.map(eachPlanet => (
          <PlanetItem key={eachPlanet.id} eachPlanet={eachPlanet} />
        ))}
      </Slider>
    </PlanetsAppContainer>
  )
}

export default PlanetsSlider
