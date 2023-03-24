import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className="flex items-center justify-center h-screen w-screen">
        <h1>Hey</h1>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
