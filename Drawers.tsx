import * as React from 'react';
import { Button, View } from 'react-native';
import { Drawer } from 'react-native-drawer-layout';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'

const RightDrawerContext = React.createContext();

function HomeScreen({ navigation }) {
  const { openRightDrawer } = React.useContext(RightDrawerContext);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.openDrawer()}
        title="Open left drawer"
      />
      <Button onPress={() => openRightDrawer()} title="Open right drawer" />
    </View>
  );
}

const LeftDrawer = createDrawerNavigator();

const LeftDrawerScreen = () => {
  return (
    <LeftDrawer.Navigator screenOptions={{ drawerPosition: 'left' }}>
      <LeftDrawer.Screen name="Home" component={HomeScreen} />
    </LeftDrawer.Navigator>
  );
};

function RightDrawerScreen() {
  const [rightDrawerOpen, setRightDrawerOpen] = React.useState(false);

  const value = React.useMemo(
    () => ({
      openRightDrawer: () => setRightDrawerOpen(true),
      closeRightDrawer: () => setRightDrawerOpen(false),
    }),
    []
  );

  return (
    <Drawer
      open={rightDrawerOpen}
      onOpen={() => setRightDrawerOpen(true)}
      onClose={() => setRightDrawerOpen(false)}
      drawerPosition="right"
      renderDrawerContent={() => <>{/* Right drawer content */}</>}
    >
      <RightDrawerContext.Provider value={value}>
        <LeftDrawerScreen />
      </RightDrawerContext.Provider>
    </Drawer>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RightDrawerScreen />
    </NavigationContainer>
  );
}