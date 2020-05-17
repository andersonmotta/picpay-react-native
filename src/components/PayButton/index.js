import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Button, Label } from './styles';

export default function PayButton({ focused }) {
  return (
    <Button
      colors={focused ? ['#fff', '#ccc'] : ['#00fc6c', '#00ac4a']}
      startPoint={[1, 0.2]}>
      <Icon name="attach-money" size={30} color={focused ? '#000' : '#fff'} />
      <Label focused={focused}>Pagar</Label>
    </Button>
  );
}
