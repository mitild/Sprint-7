import servicesData from '../data';
import { useLocalStorage } from './useLocalStorage';
import {useSearchParams} from 'react-router-dom';

function useBudget() {
   // State for initialize with shared params
  const [ params ] = useSearchParams()

  const web = params.get('web')
  const seo = params.get('seo')
  const ads = params.get('ads')
  const paginas = params.get('paginas')
  const lenguages = params.get('lenguages')

  const getParams = servicesData.map(service => {
      if(service.id === '1') {
        return {
          ...service,
          isChecked: web,
          extras: {pages: paginas, languages: lenguages}
        }
      }
      else if(service.id === '2') {
        return {
          ...service,
          isChecked: seo
        }
      }
      else if(service.id === '3') {
        return {
          ...service,
          isChecked: ads
        }
      }
      return service
  })
  // State with quantity of extra pages and languages
  const [ withExtras, setWithExtras ] = useLocalStorage('Services', getParams)
 

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
    handleWebBudget
  }
}

export { useBudget }