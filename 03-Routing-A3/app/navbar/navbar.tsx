'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

function Navbar() {
    const router = useRouter()
  return (
    <div>
        <ul>
          <li><button onClick={() => { router.push("/") }}><b>HOME</b></button></li>
          <li><button onClick={() => { router.push("/about") }}><b>ABOUT US</b></button></li>
          <li><button onClick={() => { router.push("/contact-us") }}><b>CONTACT US</b></button></li>
        </ul>
    </div>
  )
}

export default Navbar