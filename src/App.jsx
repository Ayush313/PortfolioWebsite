import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Notfound } from './pages/NotFound'
import { Home } from './pages/Home'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element = {<Home/>}/>
                    <Route path='*' element = {<Notfound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
