import styled from "styled-components"
import { StyledInput } from "../StyledForm/StyledForm"

const SaveBudgetDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: .5em;
  margin: 2em 0 1em;
`
const StyledSaveBudgetInput = styled(StyledInput)`
  display: block;
  margin: 0;
`

const StyledH4 = styled.h5`
  max-width: 300px;
  padding: 0;
  margin: 0;
`
const StyledLabel = styled.label`
  font-size: .8rem;
`

export { StyledSaveBudgetInput, SaveBudgetDiv, StyledH4, StyledLabel }