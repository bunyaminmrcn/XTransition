import * as React from 'react';
import { View, Button, StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Animated from 'react-native-reanimated';
const { width, height } = Dimensions.get('window');

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Animated.Image
        source={{ uri: 'https://picsum.photos/id/39/200' }}
        style={{ width: 200, height: 200 }}
        sharedTransitionTag="tag"
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Animated.Image
        source={{ uri: 'https://picsum.photos/id/39/500' }}
        style={{ width, height: height / 2 }}
        sharedTransitionTag="tag"
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});