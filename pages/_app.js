import { css, Global } from "@emotion/react";
import "react-flexbox-grid/dist/react-flexbox-grid.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          body {
            background-color: #1f2028;
            margin: 0;
            padding: 0;
            font-family: "Rubik", sans-serif;
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
