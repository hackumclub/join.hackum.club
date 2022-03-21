import { css, Global } from "@emotion/react";

function MyApp({ Component, pageProps }) {
  return (
    // <Global
    //   styles={css`
    //     body {
    //       background-color: #1f2028;
    //     }
    //   `}
    // >
    <div>
      <Component {...pageProps} />
    </div>
    // </Global>
  );
}

export default MyApp;
