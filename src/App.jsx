//styles
import "./App.css"

//Components
import Navbar from "./components/Navbar/Navbar"
import HomeSlider from "./components/HomeSlider/HomeSlider"
import StatsBox from "./components/Statsbox/StatsBox"
import Footer from "./components/footer/Footer"

function App() {


  return (
    <main>
    <Navbar/>
    <HomeSlider/>
    <StatsBox/>
    <Footer/>
    </main>
  )
}

export default App
