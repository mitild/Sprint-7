import { useState, Fragment, useEffect } from 'react';
import services from './data'
import Checkbox from './components/Checkboxes/Checkbox'
import Panel from './components/Styled Form/Panel'

function App() {
// State with array of objects containing available services data
const [ formData, setFormData ] = useState(services)
// State with total of selected checkboxes
const [ total, setTotal ] = useState(0)
// State with quantity of extra pages and languages
const [ extras, setExtras ] = useState({Pqty: 0, Lqty: 0}
)

// Handle the extra pages and languages
function handleWebBudget(e) {
  const { id, value } = e.target
  id === 'pages' ? setExtras(prev => ({...prev, Pqty: value})) : setExtras(prev => ({...prev, Lqty: value}))
}

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
  const Option = isChecked && name === 'checkWeb' ? <Panel 
      onchange={ handleWebBudget }
      pageValue={extras.Pqty > 0 && extras.Pqty}
      langValue={extras.Lqty > 0 && extras.Lqty}
    />
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
      <form>
        { form }
      </form>
      <h3>Precio: { total + totalExtras }€</h3>
    </div>
  );
}

export default App;
