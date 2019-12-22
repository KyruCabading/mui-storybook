import React from "react";
import TypographyStory from "./sections/Typography.js";
import ListStory from "./sections/List";
import TableStory from "./sections/Table";
import ChipStory from "./sections/Chip";

export default {
  title: "Data Display"
};

export const Typography = () => <TypographyStory />;
export const List = () => <ListStory />;
export const Table = () => <TableStory />;
export const Chip = () => <ChipStory />;
