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

const AccountList = () => {
  return (
    <div style={{ maxWidth: 400 }}>
      <Card>
        <CardHeader
          title={
            <Typography variant="h5" color="primary">
              Accounts
            </Typography>
          }
          action={
            <Box p={2}>
              <Button size="small" variant="outlined" color="primary">
                Add New
              </Button>
            </Box>
          }
        />
        <CardContent>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography color="primary" variant="overline">
                Bank
              </Typography>
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
              <Typography color="primary" variant="overline">
                Credit
              </Typography>
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
      </Card>
    </div>
  );
};

export default AccountList;
