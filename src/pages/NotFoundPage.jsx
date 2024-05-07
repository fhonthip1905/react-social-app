// import React from 'react'
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
    <h1>Error 404 : Not Found Page</h1>
    <Link to='/'>Back to HomePage</Link>
  </div>
  )
}

export default NotFoundPage
