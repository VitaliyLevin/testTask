import { ViewStyle } from "react-native/types";
import { StyledProps } from "styled-components";

export interface ICustomButton {
  onPress: () => void;
  width: number;
  height: number;
  title: string;
  textColor: string;
  color?: string;
  style?: StyledProps<ViewStyle>;
}