import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from "./Pages/HomePage"



const App = () => {
  return (
<div data-theme="dim">
<Routes>
<Route path="/" element={<HomePage/>}></Route>
</Routes>
</div>
)
}

export default App