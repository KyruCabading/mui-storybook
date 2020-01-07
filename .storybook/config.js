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
      fontFamily: "DM Serif Text"
    },
    h2: {
      fontFamily: "DM Serif Text"
    },
    h5: {
      fontFamily: "DM Serif Text",
      fontSize: "1.5625rem",
      letterSpacing: "0.2px",
      lineHeight: "34px"
    },
    button: {
      fontWeight: "bold",
      textTransform: "capitalize",
      fontSize: "0.875rem"
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: "bold",
      letterSpacing: "1.11px"
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
      root: {},
      outlinedPrimary: {
        padding: "3px 15px",
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
      }
    },
    MuiExpansionPanelDetails: {
      root: {
        padding: "0px 0px 24px"
      }
    },
    MuiCardHeader: {
      action: {
        alignSelf: "center"
      }
    }
  }
};

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
));

configure(require.context("../src/stories", true, /\.stories\.js?$/), module);
