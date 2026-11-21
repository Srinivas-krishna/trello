import { BrowserRouter, Routes, Route } from 'react-router'
import { Signup } from './components/signup.tsx'
import { Dashboard } from './components/dashboard.tsx'
import { Board } from './components/board.tsx'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

function App() {
  

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <BrowserRouter>
          <Routes>
            <Route path = "/signin" element = {<Signup/>}/>
            <Route path = "/dashboard" element = {<Dashboard/>}/>
            <Route path = "/board/:boardid" element = {<Board/>}/>
          </Routes>
        </BrowserRouter>
      </DndProvider>
    </>
  )
}

export default App
