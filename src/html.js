import React from "react";
import { TypographyStyle } from "react-typography";
import Helmet from "react-helmet";

import Rollbar from "./components/Rollbar";
import typography from "./utils/typography";
import favicon from "./pages/favicon.ico";

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`);
  } catch (e) {
    console.log(e);
  }
}

export default class Html extends React.Component {
  render() {
    const head = Helmet.rewind();
    let css;

    if (process.env.NODE_ENV === `production`) {
      css = <style id="gatsby-inlined-css" dangerouslySetInnerHTML={{ __html: stylesStr }} />;
    }

    // When we include Rollbar error reporting, it goes on top of the error stack. When
    // developing I want to be able to see in the browser console where the error came from.
    const includeRollbarIfProduction = process.env.NODE_ENV === `production` ? Rollbar : null;

    return (
      <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        { includeRollbarIfProduction }
        <link rel="shortcut icon" href={favicon} />
        {this.props.headComponents}
        <TypographyStyle typography={typography} />
        {css}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
      </head>
      <body>
      <div id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
      {this.props.postBodyComponents}
      </body>
      </html>
    );
  }
}
