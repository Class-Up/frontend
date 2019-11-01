import Document, { Html, Head, Main, NextScript } from 'next/document'
// import '../styles.scss'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps
    }
  }

  render () {
    return (
      <Html>
        <Head>
          <meta charSet='UTF-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
          <meta name='theme-color' content='#1091f3' />
          <link rel='icon' type='image/png' href='http://cdn.classup.space/brand/favicon.png' />
          <link href='https://fonts.googleapis.com/css?family=Comfortaa|Open+Sans&display=swap' rel='stylesheet' />
          <script src='https://kit.fontawesome.com/92bacecfcc.js' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
