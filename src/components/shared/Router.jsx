import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../../pages/Home"
import Detail from '../../pages/Detail'
import EveryProvider from '../context/EveryContext'

const Router = () => {

  return (
    <>
  <EveryProvider>
    <BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>} />
        <Route path="/detail/:id" element={<Detail/>} />
			</Routes>
    </BrowserRouter>
    </EveryProvider>
    </>
  )
}

export default Router