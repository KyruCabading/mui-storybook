import React from "react";
import PaperStory from "./sections/Paper.story";
import ExpansionPanelStory from "./sections/ExpansionPanel.story";
import AppbarStory from "./sections/Appbar.story";

export default {
  title: "Surfaces"
};

export const Paper = () => <PaperStory />;
export const ExpansionPanel = () => <ExpansionPanelStory />;
export const Appbar = () => <AppbarStory />;
