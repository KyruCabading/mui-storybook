import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

let theme = createMuiTheme({});

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
));

configure(require.context("../src/stories", true, /\.stories\.js?$/), module);
