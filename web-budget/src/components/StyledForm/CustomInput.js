import { StyledForm, StyledInput } from './StyledForm'
import CustomButton from '../StyledButton/CustomButton'

const CustomInput = ({ onchange, pageValue, langValue }) => {
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
      </label>
    </StyledForm>
  )
}

export default CustomInput