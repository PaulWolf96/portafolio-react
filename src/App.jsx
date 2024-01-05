import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'


function App() {
  return (
    <div className='container-fluid p-0' style={{overflowX: 'hidden'}}>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
