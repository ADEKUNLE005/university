import React from 'react'
import Nav from '../components/Homepage/Nav page/nav'
import Body from '../components/Homepage/body/body'
import Program from '../components/Homepage/program/Program'
import Campus from '../components/Homepage/campus/campus'
import Footer from '../components/Homepage/footer/Footer'

function Home() {
  return (
    <div>
      <Nav />
      <Body />
      <Program />
      <Campus />
      <Footer />
    </div>
  )
}

export default Home
