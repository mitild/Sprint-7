import { useEffect } from "react"
import { StyledModal } from "./StyledModal"
import InfoMessage from "../StyledInfoMessage/InfoMessage"

const CustomModal = ({ state, handler }) => {
  // Close the modal window when clicked on the background
  // useEffect(()=> {
  //   const closeModal = () => handler(false)
  //   document.addEventListener('mousedown', closeModal)

  //   return ()=> {
  //     document.removeEventListener('mousedown', closeModal)
  //   }
  // })

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