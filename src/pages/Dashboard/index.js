import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import { Container, Title, List } from './styles';
import Appointment from '~/components/Appointment';
const data = [1, 2, 3, 4, 5, 7, 8, 9, 10];

export default function Dashboard() {
  return (
    <Background>
      <Container>
        <Title> Agendamentos</Title>
        <List
          data={data}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => <Appointment data={item} />}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
