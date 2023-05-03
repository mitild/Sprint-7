import { StyledContainer, StyledSidebarBtn, StyledUl } from './StyledSidebar';
import useSavedBudget from '../../custom-hooks/useSavedBudgets';

const Sidebar = ({ array, handleArray }) => {
  // Custom Hook for handling and sorting saved Budgets
  const [ handleSortBtns, budgets ] = useSavedBudget(array, handleArray)

  return (
    <StyledContainer className="sidebar">
      <p>Ordenar por:</p>
      <StyledSidebarBtn
        id='alpha'
        onClick={ handleSortBtns }
      >A-Z</StyledSidebarBtn>
      <StyledSidebarBtn
        id='old'
        onClick={ handleSortBtns }
      >Antiguos</StyledSidebarBtn>
      <StyledSidebarBtn
        id='new'
        onClick={ handleSortBtns }
      >Recientes</StyledSidebarBtn>
      <h1>Tus Presupuestos</h1>
      <StyledUl>
        { budgets }
      </StyledUl>
    </StyledContainer>
  )
}

export default Sidebar