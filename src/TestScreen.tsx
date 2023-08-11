import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const TestScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TestScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: 'white',
  },
});
