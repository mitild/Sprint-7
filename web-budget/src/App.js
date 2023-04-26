import { useState, Fragment, useEffect } from 'react';
import services from './data'
import Checkbox from './components/Checkboxes/Checkbox'
// import Panel from './components/Styled Form/Panel'
import CustomInput from './components/Styled Form/CustomInput';
import { useBudget } from './custom hooks/useBudget';

function App() {
// State with array of objects containing available services data
const [ formData, setFormData ] = useState(services)
// State with total of selected checkboxes
const [ total, setTotal ] = useState(0)
// Import the Custom Hook for handling the budgets
const { extras, handleWebBudget } = useBudget()

// Total cost of those extras
const totalExtras = [Number(extras.Pqty), Number(extras.Lqty)].reduce(((a,b)=> a + b)) * 30

// Handle the chackboxes selection
const handleCheck = (e) => {
  const { name, checked } = e.target
  let prices = []

  const selected = formData.filter(box => {
    if(box.name === name) {
      box.isChecked = checked
    }
    return box
  })

  formData.filter(box => {
    if(box.isChecked) {
      prices.push(box.price)
    }
  })

  setTotal(prices.reduce((a,b)=> a + b, 0))
  setFormData(selected)
}

// Get the checkboxes. Can add as many as wanted by adding to the data.js array
const form = services.map(({ name, description, price, id, isChecked }) => {

  // Conditional rendering of extra services
  const Option = isChecked && name === 'checkWeb' ? 
    
    <>
    <CustomInput
      onchange={ handleWebBudget}
      pageValue={extras.Pqty > 0 && extras.Pqty}
      langValue={extras.Lqty > 0 && extras.Lqty}
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
    />
    { Option }
    </Fragment> 
  )
})

  return (
    <div className="App">
      <h3>¿Qué quieres hacer?</h3>
      <div>
        { form }
      </div>
      <h3>Precio: { total + totalExtras }€</h3>
    </div>
  );
}

export default App;
