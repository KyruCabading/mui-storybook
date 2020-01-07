import React from "react";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Button,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Grid
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import SchoolIcon from "@material-ui/icons/School";
import EcoIcon from "@material-ui/icons/Eco";

const AccountList = () => {
  return (
    <div style={{ maxWidth: 400 }}>
      <Card>
        <Box p={2}>
          <CardHeader
            title={
              <Typography variant="h5" color="primary">
                Accounts
              </Typography>
            }
            action={
              <Button variant="outlined" color="primary">
                Add New
              </Button>
            }
          />
          <CardContent>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <AccountBalanceIcon color="secondary" />

                <Box px={1}>
                  <Typography color="primary" variant="overline">
                    Bank
                  </Typography>
                </Box>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Typography variant="body2">Bank of Hawaii</Typography>
                    <Typography variant="caption" color="textSecondary">
                      Checking 12904
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography align="right" variant="body2">
                      $435.20
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">Bank of Hawaii</Typography>
                    <Typography variant="caption" color="textSecondary">
                      Checking 12904
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography align="right" variant="body2">
                      $435.20
                    </Typography>
                  </Grid>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <CreditCardIcon color="secondary" />
                <Box px={1}>
                  <Typography color="primary" variant="overline">
                    Credit
                  </Typography>
                </Box>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Typography variant="body2">Bank of Hawaii</Typography>
                    <Typography variant="caption" color="textSecondary">
                      Checking 12904
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography align="right" variant="body2">
                      $435.20
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">Bank of Hawaii</Typography>
                    <Typography variant="caption" color="textSecondary">
                      Checking 12904
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography align="right" variant="body2">
                      $435.20
                    </Typography>
                  </Grid>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <SchoolIcon color="secondary" />
                <Box mx={1}>
                  <Typography color="primary" variant="overline">
                    Loans
                  </Typography>
                </Box>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Typography variant="body2">Bank of Hawaii</Typography>
                    <Typography variant="caption" color="textSecondary">
                      Checking 12904
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography align="right" variant="body2">
                      $435.20
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">Bank of Hawaii</Typography>
                    <Typography variant="caption" color="textSecondary">
                      Checking 12904
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography align="right" variant="body2">
                      $435.20
                    </Typography>
                  </Grid>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <EcoIcon color="secondary" />
                <Box px={1}>
                  <Typography color="primary" variant="overline">
                    Investments
                  </Typography>
                </Box>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
};

export default AccountList;
