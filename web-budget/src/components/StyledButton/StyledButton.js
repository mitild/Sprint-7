import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  background-color: #F27052;
  border: 1px solid #F27052;
  border-radius: 7px;
  width: 30px;
  height 30px;
  color: #FFFFFF;
  font-size: 1.2rem;
  font-weight: bold;
  &:hover,
  &:focus {
    color: #F27052;
    background-color: #FFFFFF;
  }
  &:active {
    color: #a94f3a;
    border-color: #a94f3a;
  }
  &:first-of-type {
    margin-left: .3em;
  }
`

export default StyledButton