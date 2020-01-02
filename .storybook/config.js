import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00549C"
    },
    secondary: {
      main: "#7DA33F"
    },
    background: {
      paper: "#F5F6F8"
    }
  },
  typography: {
    fontFamily: "DM Sans",
    h1: {
      fontFamily: "DM Serif Display"
    },
    h2: {
      fontFamily: "DM Serif Display"
    },
    h5: {
      fontFamily: "DM Serif Display"
    },
    button: {
      fontWeight: 600,
      textTransform: "capitalize"
    },
    overline: {
      fontSize: "0.7rem",
      fontWeight: 900,
      letterSpacing: 1.2
    }
  },
  shape: {
    borderRadius: 2
  }
});

theme = {
  ...theme,
  props: {
    MuiPaper: {
      elevation: 0,
      square: true
    },
    MuiCard: {
      elevation: 0
    }
  },
  overrides: {
    MuiButton: {
      outlinedPrimary: {
        border: `2px solid ${theme.palette.primary.main}`,
        "&:hover": {
          border: `2px solid ${theme.palette.primary.main}`,
          backgroundColor: fade(
            theme.palette.primary.main,
            theme.palette.action.hoverOpacity
          ),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        }
      }
    },
    MuiTableRow: {
      root: {
        "&:nth-of-type(even)": {
          backgroundColor: "#FFF"
        }
      }
    },
    MuiTableCell: {
      root: {
        borderBottom: "none"
      }
    },
    MuiExpansionPanel: {
      root: {
        "&:before": {
          top: 0,
          height: 2,
          opacity: 0.3,
          backgroundColor: theme.palette.primary.main
        },
        "&$expanded": {
          margin: "0 0",
          "&:before": {
            opacity: 0.3
          }
        },
        "&$expanded + &": {
          "&:before": {
            display: "inline-block"
          }
        }
      }
    },
    MuiExpansionPanelSummary: {
      root: {
        minHeight: 64
      },
      "&$expanded": {
        minHeight: 64
      },
      content: {
        "&$expanded": {
          margin: "12px 0"
        }
      }
    },
    MuiExpansionPanelDetails: {
      root: {
        padding: "0px 0px 24px"
      }
    }
  }
};

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
));

configure(require.context("../src/stories", true, /\.stories\.js?$/), module);
