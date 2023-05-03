import { StyledModal } from "./StyledModal"
import InfoMessage from "../StyledInfoMessage/InfoMessage"

const CustomModal = ({ state, handler }) => {
  
  return (
    <>
      { state.visible && 
      <>
      <StyledModal onClick={()=> handler(false)} />
        <InfoMessage
          service={ state.name }
          pages={ state.pages }
          languages={ state.lang }
        />
      </>
      }
    </>
  )
}

export default CustomModal