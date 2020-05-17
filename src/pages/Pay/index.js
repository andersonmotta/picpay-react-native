import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Button } from 'react-native';

import Background from '~/components/Background';

export default function Pay({ navigation }) {
  return (
    <Background>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Pay</Text>
        <Button title="Back" onPress={() => navigation.navigate('Home')} />
      </View>
    </Background>
  );
}

Pay.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
