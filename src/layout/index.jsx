import React from 'react'
import {Outlet} from "react-router-dom"

export default function Layout() {
  return (
    <div>
      <div>布局组件</div>
      <Outlet></Outlet>
    </div>
  )
}
