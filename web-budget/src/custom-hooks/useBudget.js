import servicesData from '../data';
import { useLocalStorage } from './useLocalStorage';

function useBudget() {
  // State with quantity of extra pages and languages
  const [ withExtras, setWithExtras ] = useLocalStorage('Services', servicesData)

  const handleWebBudget = (e) => {
    const { id, value } = e.target
    const updatedExtras = withExtras.map(service => {
      if(service.extras) {

        if(id === 'pages'){
          service.extras.pages = value
        }
        else if(id === 'languages'){
          service.extras.languages = value
        }
        else if(id === 'addPage') {
          service.extras.pages = service.extras.pages + 1
        }
        else if(id === 'addLang'){
          service.extras.languages = service.extras.languages + 1
        }
        else if(id === 'removePage' && service.extras.pages > 0) {
          service.extras.pages = service.extras.pages - 1
        }
        else if(id === 'removeLang' && service.extras.languages > 0){
          service.extras.languages = service.extras.languages - 1
        }

      }
      return service
    })
    setWithExtras(updatedExtras)
    localStorage.setItem('Services', JSON.stringify(withExtras))
  }

  return {
    withExtras,
    setWithExtras,
    handleWebBudget,
  }
}

export { useBudget }