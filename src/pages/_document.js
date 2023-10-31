import Document, { Html, Head, Main, NextScript } from "next/document";

const gtag = `https://www.googletagmanager.com/gtag/js?id=G-M868LEW3RE`;
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* meta begin */}
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

          {/* meta end */}

          {/* public assets begin */}
          <link rel="stylesheet" href="/css/plugins/bootstrap-grid.css" />
          <link rel="stylesheet" href="/css/plugins/font-awesome.min.css" />
          <link rel="stylesheet" href="/css/plugins/swiper.min.css" />
          {/* public assets end */}

          {/* Inject the GA tracking code with the Measurement ID  */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname
                });

                gtag('config', 'AW-11390370827');
              `,
            }}
          />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-11390370827"
          ></script>

          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || []; 
                function gtag(){dataLayer.push(arguments);} 
                gtag('js', new Date()); 
                gtag('config', 'AW-11390370827');
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
