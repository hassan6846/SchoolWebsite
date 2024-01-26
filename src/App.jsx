//styles
import styles from "./App.module.css"

//Components
import Navbar from "./components/Navbar/Navbar"
import HomeSlider from "./components/HomeSlider/HomeSlider"
import StatsBox from "./components/Statsbox/StatsBox"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <main className={styles.Pagecontainer}>
      <Navbar />
      <HomeSlider />
      <StatsBox />
      <Footer />
    </main>
  )
}

export default App
