import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 16px;
  background: #f0f0f0;
`;

export const Header = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${(props) => (props.selected ? '#0fcf72' : '#3c4451')};
  border-bottom-color: ${(props) => (props.selected ? '#0fcf72' : '#f0f0f0')};
  border-bottom-width: 2px;
  font-size: 16px;
  font-weight: bold;
  margin-left: 30px;
`;

export const Card = styled.View`
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  margin-right: 10px;
  height: 50px;
  width: 50px;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #3c4451;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const CardBody = styled.View`
  padding: 10px 0;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: #3c4451;
`;

export const CardFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Details = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  font-weight: bold;
  color: ${(props) => (props.payment ? '#0fcf72' : '#ff0000')};
`;

export const Divider = styled.View`
  width: 2px;
  height: 12px;
  background: rgba(0, 0, 0, 0.2);
  margin: 0 8px;
`;

export const Date = styled.Text`
  color: rgba(0, 0, 0, 0.4);
  margin-left: 5px;
  font-size: 10px;
`;

export const Actions = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Option = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const OptionLabel = styled.Text`
  color: rgba(0, 0, 0, 0.4);
  font-size: 12px;
  margin: 0 3px;
`;
