import styled from "styled-components"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2em;
  border-left: 3px solid #000;
  z-index: -1;
  transition: all .6s;
  @media (max-width: 952px) {
    border-left: none !important;
    border-top: 3px solid #000;
    text-align: center;
    margin-top: 2em;
    grid-column-start: 1;
    grid-column-end: -1;
  }
`

const StyledLi = styled.li`
  margin-bottom: .7em;
`
export { StyledContainer, StyledLi }