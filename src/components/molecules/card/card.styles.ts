import styled from "styled-components/native";
import { CustomButton } from "../../atoms/custom-button/custom-button";
import { CustomImage } from "../../atoms/custom-image/custom-image";

export const CardStyles = {
  Wrapper: styled.View`
    flex-direction: row;
    flex: 1;
    margin-bottom: 20px;
  `,
  Image: styled(CustomImage)``,
  InfoWrapper: styled.View`
    flex: 1;
    align-items: center;
    background-color: white;
    justify-content: center;
  `,
  Buttons: styled.View`
    flex-direction: row;
    margin-top: 10px;
  `,
  Button: styled(CustomButton)`
    margin-right: 20px;
  `,
}