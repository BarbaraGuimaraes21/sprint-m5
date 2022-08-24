import { useState} from 'react'
import './App.css'
import InputCompartilhe from './component/Compartilhe/InputCompartilhe'
import Footer from './component/Footer/Footer'
import Form from './component/Form/form'
import Header from './component/Header/Header'
import Section from './component/Section/Section'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Form/>
      <Section/>
      <InputCompartilhe/>
      <Footer/>
    </div>
  )
}

export default App
