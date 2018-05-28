import Document, {
  Head,
  Main,
  NextScript,
} from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />
          <link
            rel="stylesheet"
            href="/_next/static/style.css"
          />
          <link
            rel="stylesheet"
            href="https://sdks.shopifycdn.com/polaris/2.0.0/polaris.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
