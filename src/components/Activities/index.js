import React from 'react';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';

import avatar from '~/assets/08.png';

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  Text,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
} from './styles';

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title selected>Todos</Title>
        <Title>Minhas</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>@fulano</Bold> pagou a <Bold>você</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <Text>Tá ai mano, apesar de usado está TOP!</Text>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 375,75</Value>
            <Divider />

            <IconFeather name="users" size={14} color="rgba(0, 0, 0, 0.4)" />
            <Date>2 horas atrás</Date>
          </Details>

          <Actions>
            <Option>
              <MaterialIcon
                name="comment-outline"
                size={18}
                color="rgba(0, 0, 0, 0.4)"
              />
              <OptionLabel>0</OptionLabel>
            </Option>

            <Option>
              <MaterialIcon
                name="heart-outline"
                size={18}
                color="rgba(0, 0, 0, 0.4)"
              />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@fulano</Bold>
          </Description>
        </CardHeader>

        <CardBody />

        <CardFooter>
          <Details>
            <Value payment>R$ 30,00</Value>
            <Divider />

            <IconFeather name="users" size={14} color="rgba(0, 0, 0, 0.4)" />
            <Date>2 horas atrás</Date>
          </Details>

          <Actions>
            <Option>
              <MaterialIcon
                name="comment-outline"
                size={18}
                color="rgba(0, 0, 0, 0.4)"
              />
              <OptionLabel>0</OptionLabel>
            </Option>

            <Option>
              <MaterialIcon name="heart" size={18} color="#0fcf72" />
              <OptionLabel>3</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>@fulano</Bold> pagou a <Bold>você</Bold>
          </Description>
        </CardHeader>

        <CardBody />

        <CardFooter>
          <Details>
            <Value>R$ 120,00</Value>
            <Divider />

            <IconFeather name="users" size={14} color="rgba(0, 0, 0, 0.4)" />
            <Date>2 horas atrás</Date>
          </Details>

          <Actions>
            <Option>
              <MaterialIcon
                name="comment-outline"
                size={18}
                color="rgba(0, 0, 0, 0.4)"
              />
              <OptionLabel>0</OptionLabel>
            </Option>

            <Option>
              <MaterialIcon
                name="heart-outline"
                size={18}
                color="rgba(0, 0, 0, 0.4)"
              />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
}
