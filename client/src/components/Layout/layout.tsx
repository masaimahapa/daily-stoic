import React from 'react'
import Header from '../header/header'
import { Outlet } from 'react-router-dom'

type Props = {}

export default function Layout({}: Props) {
  return (
    <div>
        <Header />
        <div className='container mx-auto px-4 py-8'>
        <Outlet />
        </div>
    </div>
  )
}