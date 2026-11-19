import { BrowserRouter, Routes, Route } from 'react-router'
import { Signup } from './components/signup.tsx'
import { Dashboard } from './components/dashboard.tsx'
import { Board } from './components/board.tsx'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/signin" element = {<Signup/>}/>
          <Route path = "/dashboard" element = {<Dashboard/>}/>
          <Route path = "/board/:boardid"element = {<Board/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
