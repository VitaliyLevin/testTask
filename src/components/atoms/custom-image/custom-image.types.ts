import { ImageStyle } from "react-native/types";
import { StyledProps } from "styled-components";

export interface ICustomImage {
  url: string;
  width: number;
  height: number;
  style?: StyledProps<ImageStyle>;
}