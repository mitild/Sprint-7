import { StyledSaveBudgetInput, SaveBudgetDiv, StyledH4, StyledLabel } from "./StyledSaveBudgetForm"

const SaveBudgetForm = ({ handleBudget }) => {
  return (
    <SaveBudgetDiv>
      
      <StyledH4>Usa los campos a continuación para guardar tus presupuestos</StyledH4>

      <StyledLabel htmlFor="budgetName">
        Nombre del Presupuesto
        <StyledSaveBudgetInput
          id={ 'budgetName' }
          type="text"
          name="budget"
          onChange={ handleBudget }
        />
      </StyledLabel>

      <StyledLabel htmlFor="clientName">
        Nombre del Cliente
        <StyledSaveBudgetInput
          id={ 'clientName' }
          type="text"
          name="client"
          onChange={ handleBudget }
        />
      </StyledLabel>

    </SaveBudgetDiv>
  )
}

export default SaveBudgetForm