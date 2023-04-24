import { StyledForm, StyledInput } from './StyledForm'

const Panel = ({ onchange }) => {
  return (
    <StyledForm>
      <label htmlFor="pages">Número de Páginas
        <StyledInput 
          type="number"
          onChange={ onchange }
          name="pages"
          id="pages"
        />
      </label>
      <label htmlFor="languages">Número de Idiomas
        <StyledInput 
          type="number"
          onChange={ onchange }
          name="languages"
          id="languages"
        />
      </label>
    </StyledForm>
  )
}

export default Panel