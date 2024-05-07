// import React from 'react'
import { Link } from "react-router-dom";

function ProfilePage() {
  return (
    <div>
    <h1>Profile Page</h1>
    <Link to='/'>HomePage</Link>
    <Link to='/login'>LoginPage</Link>
    <Link to='/profile'>ProfilePage</Link>
  </div>
  )
}

export default ProfilePage
