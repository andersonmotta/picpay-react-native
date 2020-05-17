import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background: #0fcf72;
  height: 160px;
`;

export const Scroll = styled.ScrollView.attrs(() => ({
  horizontal: true,
  contentContainerStyle: {
    alignItems: 'center',
    paddingLeft: 16,
  },
  showsHorizontalScrollIndicator: false,
}))`
  background: #0fcf72;
`;

export const Option = styled.TouchableOpacity`
  width: 80px;
  margin-right: 16px;
  align-items: center;
`;

export const Img = styled.View`
  border: 2px solid #fff;
  border-radius: 40px;
`;

export const Label = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-top: 8px;
  font-size: 14px;
`;

export const LabelTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  padding: 12px 20px;
`;
