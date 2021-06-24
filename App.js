import 'react-native-gesture-handler';
import * as React from 'react';
import {View, TextInput} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './Routes/BottomTab';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();
const CustomTitle = () => {
  return <View style={{backgroundColor: 'dodgerblue', flex: 1}}></View>;
};
const BackGround = props => {
  return (
    <View style={{backgroundColor: 'dodgerblue'}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon name="magnify" color="white" size={20} />
        <TextInput
          style={{marginStart: 5}}
          placeholder="Search (show, movie, article)"
        />
      </View>
    </View>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{
            headerBackground: props => <CustomTitle {...props} />,
            headerTitle: props => <BackGround {...props} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
