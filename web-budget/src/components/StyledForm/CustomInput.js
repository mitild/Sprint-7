import { StyledForm, StyledInput } from './StyledForm'
import CustomButton from '../StyledButton/CustomButton'
import StyledInfoBtn from '../StyledInfoBtn/StyledInfoBtn'

const CustomInput = ({ onchange, pageValue, langValue, modalState, handleModal }) => {
  return (
    <StyledForm>
      <label htmlFor="pages">Número de Páginas   
        <CustomButton
          text= '+'
          handleClick={ onchange }
          id= 'addPage'
        ></CustomButton>
        <StyledInput 
          type="number"
          onChange={ onchange }
          name="pages"
          id="pages"
          value={ pageValue }
        />
        <CustomButton
          text= '-'
          handleClick={ onchange }
          id= 'removePage'
        ></CustomButton>
        <StyledInfoBtn 
          handler={ handleModal }
          state={ modalState }
          service={ 'página' }
          pages={ pageValue }
        />
      </label>
      <label htmlFor="languages">Número de Idiomas
        <CustomButton
          text= '+'
          handleClick={ onchange }
          id= 'addLang'
        ></CustomButton>
        <StyledInput 
          type="number"
          onChange={ onchange }
          name="languages"
          id="languages"
          value={ langValue }
        />
        <CustomButton
          text= '-'
          handleClick={ onchange }
          id= 'removeLang'
        ></CustomButton>
         <StyledInfoBtn 
          handler={ handleModal }
          state={ modalState }
          service={ 'idioma' }
          languages={ langValue }
        />
      </label>
    </StyledForm>
  )
}

export default CustomInput