import styled from "styled-components/native";
import { Card } from "../../components/molecules/card/card";

export const AppStyles = {
  Wrapper: styled.View`
    flex: 1;
    background-color: #888DBD;
  `,
  CardsWrapper: styled.ScrollView`
    flex: 1;
    margin: 20px 20px 40px;
    background-color: #888DBD;
  `,
  Card: styled(Card)``,
  Add: styled.TouchableOpacity`
    position: absolute;
    justify-content: center;
    align-items: center;
    border-radius: 999px;
    height: 60px;
    width: 60px;
    background-color: #2d3584;
    bottom: 30px;
    right: 30px;
  `,
  Text: styled.Text`
    font-size: 25px;
    color: white;
    font-weight: bold;
  `,
}