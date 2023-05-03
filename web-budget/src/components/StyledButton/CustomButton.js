import { StyledButton } from "./StyledButton"

const CustomButton = ({ text, handleClick, id }) => {
  return (
    <StyledButton
      onClick={ handleClick }
      id={ id }    
    >{ text }</StyledButton>
  )
}

export default CustomButton