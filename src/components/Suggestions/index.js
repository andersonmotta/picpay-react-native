import React from 'react';
import { Image } from 'react-native';

import img2 from '~/assets/02.png';
import img4 from '~/assets/04.png';
import img5 from '~/assets/05.png';
import img6 from '~/assets/06.png';
import img7 from '~/assets/08.png';

import { Container, Scroll, Option, Img, Label, LabelTitle } from './styles';

export default function Suggestions() {
  const items = [
    {
      key: String(Math.random()),
      img: img2,
      label: 'Uber',
    },
    {
      key: String(Math.random()),
      img: img4,
      label: 'Sky',
    },
    {
      key: String(Math.random()),
      img: img5,
      label: 'Doações',
    },
    {
      key: String(Math.random()),
      img: img6,
      label: 'Boletos',
    },
    {
      key: String(Math.random()),
      img: img7,
      label: 'Fulano',
    },
  ];

  return (
    <Container>
      <LabelTitle>Sugestões para você</LabelTitle>
      <Scroll>
        {items.map((item) => (
          <Option key={item.key}>
            <Img>
              <Image source={item.img} />
            </Img>
            <Label>{item.label}</Label>
          </Option>
        ))}
      </Scroll>
    </Container>
  );
}
