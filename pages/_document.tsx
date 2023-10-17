import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <script
        data-goatcounter="https://ftud.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
      ></script>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
