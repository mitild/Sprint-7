import styled from "styled-components"
import { StyledForm } from "../StyledForm/StyledForm"
const StyledError = styled(StyledForm)`
  width: 70%;
  margin: auto;
`

const Error = () => {
  return (
    <StyledError>
      <h1>Ops...</h1>
      <p>Parece que no hemos podido encontrar la página que buscabas. Por favor controla que no haya ningún error en la url o bien usa el menú de navegación</p>
    </StyledError>
  )
}

export default Error

