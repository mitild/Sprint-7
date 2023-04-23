import { useState, Fragment } from 'react'
import services from './data'

function App() {
const [ formData, setFormData ] = useState(services)
const [ total, setTotal ] = useState(0)

const handleCheck = (e) => {
  const { name, checked } = e.target

  const selected = formData.filter(box => {
    if(box.name === name) {
      box.isChecked = checked
    }
    return box
  })

  let prices = []

  formData.filter(box => {
    if(box.isChecked) {
      prices.push(box.price)
    }
  })

  setTotal(prices.reduce((a,b)=> a + b, 0))
  setFormData(selected)

}

const form = services.map(({ name, description, price, id }) => {
  return (
      <Fragment key={ id } >
      <input 
            key={ id }
            type="checkbox"
            name={ name }
            id={ price }
            onChange={ handleCheck }
          />
          <label 
            key={ name }
            htmlFor={ price }>{ description }
          </label>
          <br/>
          
      </Fragment>
  )
})

  return (
    <div className="App">

      <h3>¿Qué quieres hacer?</h3>

      <form>
        {form}
      </form>

      <h3>Precio: {total}€</h3>
    </div>
  );
}

export default App;
