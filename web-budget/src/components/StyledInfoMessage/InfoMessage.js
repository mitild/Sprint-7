import { StyledMessage } from "./StyledInfoMsg"

const InfoMessage = ({ service, pages, languages }) => {
  // Conditionally render the amount of pages or languages selected accordingly to the clicked button
  const conditionalAmount = service === 'página' ? pages : languages

  // Conditionally render a 's' if the amount is 0 or plural or not
  const isPlural = conditionalAmount > 1 || conditionalAmount === 0 ? 's' : ''

  return (
    <StyledMessage>
      <p>En este campo debes indicar el número de { service + 's' } que deseas. Actualmente has seleccionado { conditionalAmount } { service + isPlural }</p>
    </StyledMessage>
  )
}

export default InfoMessage