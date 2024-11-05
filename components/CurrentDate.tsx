import React from 'react';
import { Text } from 'react-native';

export function CurrentDate() {
  const today = new Date();
  const dateString = today.toLocaleDateString('pt-BR');

  return <Text>{dateString}</Text>;
}