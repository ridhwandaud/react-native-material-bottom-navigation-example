import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native';
import { TabNavigator } from "react-navigation";
import BottomNavigation, { Tab, NavigationComponent } from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

class MoviesAndTV extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Movies & TV',
    tabBarIcon: () => (<Icon size={24} color="white" name="tv" />)
  }

  render() { 
    return(
      <View>
        <Text>
          MoviesAndTV
        </Text>
      </View>    
    )
  }
}

class Music extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Music',
    tabBarIcon: () => (<Icon size={24} color="white" name="music-note" />)
  }

  render() {
    return(
      <View>
        <Text>
          Music
        </Text>
      </View>    
    )
  }
}

class Newsstand extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Newsstand',
    tabBarIcon: () => (<Icon size={24} color="white" name="Newsstand" />)
  }

  render() {
    return(
      <View>
        <Text>
          Newsstand
        </Text>
      </View>    
    )
  }
}

const SimpleApp = TabNavigator({
  MoviesAndTV: { screen: MoviesAndTV },
  Music: { screen: Music },
  Newsstand: { screen: Newsstand }
}, {
  tabBarComponent: NavigationComponent,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    bottomNavigationOptions: {
      labelColor: 'white',
      rippleColor: 'white',
      tabs: {
        MoviesAndTV: {
          barBackgroundColor: '#37474F'
        },
        Music: {
          barBackgroundColor: '#00796B'
        },
        Newsstand: {
          barBackgroundColor: '#E91E63'
        }
      }
    }
  }
})

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);