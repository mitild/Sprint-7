import CustomButton from "../StyledButton/CustomButton"
import { Link } from "react-router-dom"
const Home = () => {
  return (
    <div className="container-home">
      <h1>e-Budget</h1>
      <h3>Generador de Presupuestos inteligente</h3>
      <p>Bienvenidos a E-Budget un generador de presupuestos para tu sitio web o e-Commerce. Elige entre crear tu página web - y agrega la cantidad de páginas y/o idiomas deseados - y/o entre nuestros servicios de posicionamiento SEO y/o entre una campaña de Google Ads</p>
      <Link to={'/budget'}>
      <CustomButton
        text={ 'Comenzar' }
      />
      </Link>
    </div>
  )
}

export default Home