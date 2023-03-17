import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './routes/index'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <MainRoutes/>
    </BrowserRouter>
  )
}

export default App
