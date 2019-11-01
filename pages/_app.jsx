import React from 'react'
import App from 'next/app'

import '../styles.scss'
import Navbar from '../components/Navbar'

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <div className='columns is-multiline'>
        <div className='column is-mobile is-full'>
          <Navbar />
        </div>
        <div className='column is-mobile is-full'>
          <div className='container'>
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    )
  }
}

export default MyApp
