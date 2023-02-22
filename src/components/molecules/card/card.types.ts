import { ViewStyle } from "react-native/types";
import { StyledProps } from "styled-components";
import { IDataEntryInput } from "../../../services/model/types";

export interface ICard {
  onEdit: (id: number, input: Partial<IDataEntryInput>) => void;
  deleteCard: (id: number) => void;
  id: number;
  image: string;
  title: string;
  url: string;
  text: string;
  imageWidth: number;
  imageHeight: number;
  style?: StyledProps<ViewStyle>;
};
