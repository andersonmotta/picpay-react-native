import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';

import Suggestions from '~/components/Suggestions';
import Activities from '~/components/Activities';

import {
  Wrapper,
  Container,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
} from './styles';

export default function Home({ navigation }) {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Icon name="qrcode-scan" size={30} color="#10c86e" />

          <BalanceContainer>
            <BalanceTitle>Meu saldo</BalanceTitle>
            <Balance>R$ 80,80</Balance>
          </BalanceContainer>

          <IconFeather name="user-plus" size={30} color="#10c86e" />
        </Header>

        <Suggestions />
        <Activities />
      </Container>
    </Wrapper>
  );
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
