import { css, Global } from "@emotion/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          body {
            background-color: #1f2028;
            margin: 0;
            padding: 0;
          }
        `}
      />
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
