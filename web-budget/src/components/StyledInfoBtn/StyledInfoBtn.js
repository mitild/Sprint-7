import 'remixicon/fonts/remixicon.css'
import { StyledBtn } from './StyledBtn'

const StyledInfoBtn = ({ handler, state, service, pages, languages }) => {

  return (
    <StyledBtn
      onClick={()=> handler(
        {
          name: service, 
          visible: !state.visible,
          pages: pages,
          lang: languages
        }
        )}
      id={ service }>
        <i className="ri-information-line"></i>
    </StyledBtn>
  )
}

export default StyledInfoBtn