import React from "react";
import ButtonStory from "./sections/Button.story";
import SplitButtonStory from "./sections/SplitButton.story";
import GroupedButtonStory from "./sections/GroupedButton.story";
import FabButtonStory from "./sections/FabButton.story";
import IconButtonStory from "./sections/IconButton.story";
import RadioButtonStory from "./sections/RadioButton.story";
import RadioGroupButtonStory from "./sections/RadioGroupButton.story";
import CheckboxStory from "./sections/Checkbox.story";
import CheckboxWithLabelStory from "./sections/CheckboxWithLabel.story";
import CheckboxWithFormGroupStory from "./sections/CheckboxWithFormGroup.story";
import DatePickerMUIStory from "./sections/DatePickerMUI.story";
import DatePickerNativeStory from "./sections/DatePickerNative.story";
import SelectMUIStory from "./sections/SelectMUI.story";
import SelectNativeStory from "./sections/SelectNative.story";
import SwitchStory from "./sections/Switch.story";
import SwitchWithLabelStory from "./sections/SwitchWithLabel.story";
import TextfieldStory from "./sections/Textfield.story";
import TextfieldValidationStory from "./sections/TextfieldValidation.story";

export default {
  title: "Inputs"
};

export const Buttons = () => <ButtonStory />;
export const SplitButtons = () => <SplitButtonStory />;
export const GroupedButtons = () => <GroupedButtonStory />;
export const FabButtons = () => <FabButtonStory />;
export const IconButtons = () => <IconButtonStory />;
export const RadioButtons = () => <RadioButtonStory />;
export const RadioGroupButton = () => <RadioGroupButtonStory />;

export const Checkbox = () => <CheckboxStory />;
export const CheckboxWithLabel = () => <CheckboxWithLabelStory />;
export const CheckboxWithFormGroup = () => <CheckboxWithFormGroupStory />;
export const DatePickerMUI = () => <DatePickerMUIStory />;
export const DatePickerNative = () => <DatePickerNativeStory />;
export const SelectMUI = () => <SelectMUIStory />;
export const SelectNative = () => <SelectNativeStory />;

export const Switch = () => <SwitchStory />;
export const SwitchWithLabel = () => <SwitchWithLabelStory />;

export const Textfield = () => <TextfieldStory />;
export const TextfieldValidation = () => <TextfieldValidationStory />;
