
import './App.css'
import Header from './Components/Header'
import ProductionHouse from './Components/ProductionHouse'
import Slider from './Components/Slider'

function App() {
 

  return (
    <>
     <div className='bg-black'>
      <Header />
      <Slider></Slider>
      <ProductionHouse />
     </div>
    </>
  )
}

export default App
