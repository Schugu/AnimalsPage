import './App.css'
import { Header } from './components/Header/Header.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import { CardCreator } from './components/cardGenerator/CardCreator.jsx'

function App() {
  return (
    <>
      <Header/>

      <CardCreator/>
      
      <Footer/>
    </>
  )
}

export default App
