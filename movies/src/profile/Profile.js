import React, { useEffect } from 'react'
import { getUserBookings } from '../api-helpers/api-helper'
import { useState } from 'react'

const UserProfile = () => {
    const [bookings,setBookings]= useState();
    useEffect(()=>{
        getUserBookings().then((res) => setBookings(res.myBookings)).catch(err=>console.log(err,'errorrr'))
    },[])
    console.log(bookings)
    return (
    <div>Profile</div>
  )
}

export default UserProfile