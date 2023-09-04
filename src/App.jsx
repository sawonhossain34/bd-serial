
import './App.css'
import GenMovieList from './Components/GenMovieList'
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
      <GenMovieList />
     </div>
    </>
  )
}

export default App
