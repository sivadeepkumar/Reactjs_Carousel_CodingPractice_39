import {
  PlanetContainer,
  Image,
  Name,
  Description,
} from '../PlanetsSlider/styledComponents'

const PlanetItem = props => {
  const {eachPlanet} = props

  const {name, imageUrl, description} = eachPlanet

  return (
    <PlanetContainer>
      <Image className="planet-img" src={imageUrl} alt={`planet ${name}`} />
      <Name>{name}</Name>
      <Description>{description}</Description>
    </PlanetContainer>
  )
}

export default PlanetItem
