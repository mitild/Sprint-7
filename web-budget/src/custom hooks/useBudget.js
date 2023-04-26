import { useState } from 'react'

function useBudget() {
  // State with quantity of extra pages and languages
  const [ extras, setExtras ] = useState({Pqty: 0, Lqty: 0})

  const handleWebBudget = (e) => {
    const { id, value } = e.target

    if(id === 'pages'){
      setExtras(prev => ({...prev, Pqty: value}))
    }
    else if(id === 'languages'){
      setExtras(prev => ({...prev, Lqty: value}))
    }
    else if(id === 'addPage') {
      setExtras(prev => ({...prev, Pqty: Number(prev.Pqty + 1)}))
    }
    else if(id === 'addLang'){
      setExtras(prev => ({...prev, Lqty: Number(prev.Lqty + 1)}))
    }
    else if(id === 'removePage') {
      setExtras(prev => {
        return prev.Pqty > 0 ? {...prev, Pqty: Number(prev.Pqty - 1)} : {...prev, Pqty: 0}
      })
    }
    else if(id === 'removeLang'){
      setExtras(prev => {
        return prev.Lqty > 0 ? {...prev, Lqty: Number(prev.Lqty - 1)} : {...prev, Lqty: 0}
      })
    }
  }

  return {
    extras,
    setExtras,
    handleWebBudget
  }
}

export { useBudget }