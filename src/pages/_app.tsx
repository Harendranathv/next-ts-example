import App, { Container } from 'next/app'
import React from 'react'

class MyApp extends App {
  props: any

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
          <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp
