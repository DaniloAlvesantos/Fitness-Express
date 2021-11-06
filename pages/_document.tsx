import Document,{ Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)

        return initialProps
      }

  render() {
    return (
      <Html lang="pt">
        <Head>
            <meta charSet="utf-8" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com"  />
            <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300&family=Inter&family=Roboto:ital,wght@1,100&display=swap"
            rel="stylesheet"
            />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap" rel="stylesheet"/>
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
