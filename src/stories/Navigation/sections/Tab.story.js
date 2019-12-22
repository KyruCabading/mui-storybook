import React from "react";
import AppBar from "@material-ui/core/AppBar";
import MUITabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const Tabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static">
      <MUITabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </MUITabs>
    </AppBar>
  );
};

export default Tabs;
