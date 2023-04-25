import { StyledForm, StyledInput } from './StyledForm'

const Panel = ({ onchange, pageValue, langValue }) => {
  return (
    <StyledForm>
      <label htmlFor="pages">Número de Páginas
        <StyledInput 
          type="number"
          onChange={ onchange }
          name="pages"
          id="pages"
          value={ pageValue }
        />
      </label>
      <label htmlFor="languages">Número de Idiomas
        <StyledInput 
          type="number"
          onChange={ onchange }
          name="languages"
          id="languages"
          value={ langValue }
        />
      </label>
    </StyledForm>
  )
}

export default Panel