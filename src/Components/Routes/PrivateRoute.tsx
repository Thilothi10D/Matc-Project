import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

interface Props {
  islogin: boolean
}

export default function PrivateRoute(props: Props) {
  const islogin = props.islogin
  return islogin ? <Outlet /> : <Navigate to='/ ' />
}
