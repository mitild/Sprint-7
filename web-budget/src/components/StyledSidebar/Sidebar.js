import { StyledContainer, StyledSidebarBtn, StyledUl, StyledInput } from './StyledSidebar';
import useSavedBudget from '../../custom-hooks/useSavedBudgets';

const Sidebar = ({ array, handleArray }) => {
  // Custom Hook for handling and sorting saved Budgets
  const [ handleSortBtns, budgetsNotFound, handleSearch ] = useSavedBudget(array, handleArray)

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
      <p>o Buscar:</p>
      <StyledInput 
        placeholder= '🔍'
        onChange={ handleSearch }
        type='text'
      />
      <h1>Tus Presupuestos</h1>
      <StyledUl>
        { budgetsNotFound }
      </StyledUl>
    </StyledContainer>
  )
}

export default Sidebar