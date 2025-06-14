import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import AllRooms from './Pages/AllRooms'
import RoomDetailes from './Pages/RoomDetailes'
import MyBookings from './Pages/MyBookings'
import HotelReg from './Components/HotelReg'
import LayOut from './Pages/hotelOwner/LayOut'
import Dashboard from './Pages/hotelOwner/Dashboard'
import AddRoom from './Pages/hotelOwner/AddRoom'
import ListRoom from './Pages/hotelOwner/ListRoom'

const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner")

  return (

    <div>
    {!isOwnerPath && <Navbar/>}
    {false && <HotelReg/>}

    <div className='min-h-[70vh]'>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/rooms' element={<AllRooms/>}/>
        <Route path='/rooms/:id' element={<RoomDetailes/>}/>
        <Route path='/my-bookings' element={<MyBookings/>}/>
        <Route path='/owner' element={<LayOut/>}>

        <Route index element={<Dashboard/>}/>
        <Route path='add-room' element={<AddRoom/>}/>
        <Route path='list-room' element={<ListRoom/>}/>
        
        </Route>


       </Routes>

    </div>
    <Footer/>
    </div>
  )
}

export default App
