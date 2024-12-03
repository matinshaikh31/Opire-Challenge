import './App.css'
import DevCard from './components/DevCard'
import { sampleProfile } from './data'

function App() {

  return (
    <>
      <DevCard
        {...sampleProfile}
      />
    </>
  )
}

export default App
