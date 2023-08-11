import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useCallback, useEffect, useState} from 'react';
import {TestScreen} from './TestScreen';
import {getLinkingConfig} from './linking';

const {Screen, Navigator} = createNativeStackNavigator();

export const Navigation = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [navigationIsReady, setNavigationIsReady] = useState(false);

  const onNavigationReady = useCallback(() => {
    setNavigationIsReady(true);
  }, []);

  useEffect(() => {
    setIsAuthenticated(true);
  }, []);

  return (
    <NavigationContainer
      onReady={onNavigationReady}
      linking={getLinkingConfig()}>
      <Navigator initialRouteName="Test">
        <Screen name="Test" component={TestScreen} />
      </Navigator>
    </NavigationContainer>
  );
};
