import React, { Component } from 'react'
import App from 'next/app'

import '../styles.scss'
import Navbar from '../components/Navbar'

class Layout extends Component {
  render () {
    return (
      <div className='layout columns is-multiline'>
        <Navbar />
        <div className='column is-12'>
          <div className='container'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

export default MyApp
