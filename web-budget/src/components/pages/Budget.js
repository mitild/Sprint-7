import { Fragment, useState } from 'react';
import Checkbox from '../Checkboxes/Checkbox'
import CustomInput from '../StyledForm/CustomInput'
import { useBudget } from "../../custom-hooks/useBudget"
import { useLocalStorage } from "../../custom-hooks/useLocalStorage"
import Sidebar from '../StyledSidebar/Sidebar';
import CustomButton from '../StyledButton/CustomButton';
import SaveBudgetForm from '../SaveBudgetForm/SaveBudgetForm';

const Budget = ({ modalState, handleModal }) => {
// Import the Custom Hook for handling the budgets
const { withExtras, setWithExtras, handleWebBudget } = useBudget()
// State with total of selected checkboxes
const [ total, setTotal ] = useLocalStorage('Total', 0)
// State for handling sidebar
const [sidebar, setSidebar] = useState(false)

// Total cost of the extras
const pagesQty = withExtras[0].extras.pages
const languagesQty = withExtras[0].extras.languages
const totalWithExtras = ((pagesQty + languagesQty) * 30) + total

// Budget States
const [ savedBudgets, setSavedBudgets ] = useState({budget: '', client: ''})
const [ budgetsArr, setBudgetsArr ] = useState([])
// Get the inputs data for the budget object
const handleBudget = (e) => {
  const { value, name } = e.target
    setSavedBudgets(prev => ({...prev, [name]: value}))
}

// Create Budget Object with the needed data
const handleSidebar = () => {

  if(savedBudgets.budget !== '' || savedBudgets.client !== '' ) {
    setSidebar(true)
    const newBudget = {
      budget: savedBudgets.budget,
      client: savedBudgets.client,
      services: withExtras.filter(service => service.isChecked),
      totalPrice: `${totalWithExtras}€`,
      date: new Date().toLocaleString(),
    }
    setBudgetsArr(prev => ([...prev, newBudget]))
    setSavedBudgets({budget: '', client: ''})
  } 
  else {
    window.alert('Por favor, controla que los campos: "Nombre de Presupuesto" y "Nombre del Cliente", no estén vacios o sean iguales a los ya guardados. Cambiando o agregando un número a cualquiera de los campos ya es suficiente.')
  }
  
}

// Handle the checkboxes selection
const handleCheck = (e) => {
  const { name, checked } = e.target
  let prices = []

  withExtras.filter(box => {
    if(box.name === name) {
      box.isChecked = checked
    }
    return box
  })

  withExtras.filter(box => {
    if(box.isChecked) {
      prices.push(box.price)
    }
  })
  
   // Reset extras to 0 when Web Page service is no longer checked
   const resetExtras = withExtras.map(service => {
    return service.name === 'checkWeb' && !service.isChecked ? {...service, extras: {pages: 0, languages: 0}} : service
   })

  setWithExtras(resetExtras)
  setTotal(prices.reduce((a,b)=> a + b, 0))
}

// Get the checkboxes. Can add as many as wanted by adding to the data.js array
const form = withExtras.map(({ name, description, price, id, isChecked, extras }) => {

  // Conditional rendering of extra services
  const Option = isChecked && name === 'checkWeb' ?
    <>
      <CustomInput
        onchange={ handleWebBudget }
        pageValue={extras.pages}
        langValue={extras.languages}
        modalState={ modalState }
        handleModal={ handleModal }
      />
    </>
    :
    undefined

  return (
    <Fragment key={ id } >
    <Checkbox
      key={ id }
      name={ name }
      id={ price }
      handleCheck={ handleCheck }
      description={ description }
      ischecked={ isChecked }
    />
    { Option }
    </Fragment>
  )
})

  return (
      <div className="container">
        <div className='budget-form'>
          <h2>¿Qué quieres hacer?</h2>
          <div>
            { form }
          </div>
          <h3>Precio: { totalWithExtras }€</h3>
          <SaveBudgetForm
            handleBudget={ handleBudget }
          />
          <CustomButton 
            text={ 'Guardar presupuesto' }
            handleClick={ handleSidebar }
          />
        </div>
        {
          sidebar 
          && 
          <Sidebar 
            array={ budgetsArr }
            handleArray={ setBudgetsArr }
          />
        }
      </div>
  );
}

export default Budget