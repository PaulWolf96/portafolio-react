import './styles.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'

function App() {
  return (
    <div style={{overflowX: 'hidden'}}>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
