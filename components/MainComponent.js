import * as React from 'react';
import { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import Home from './HomeComponent';
import Profile from './ProfileComponent';
import Search from './SearchComponent';
import Post from './PostComponent';

import SafeAreaView from 'react-native-safe-area-view';
import { connect } from 'react-redux';

const Tab = createBottomTabNavigator();

class Main extends Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator
                activeColor="#B4F8C8"
                barStyle={{ backgroundColor: '#FFAEBC' }}>
                    <Tab.Screen name="Home"
                    component={Home}
                    options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    )
                    }}/>                   
                    <Tab.Screen name='Search' component={Search} />
                    <Tab.Screen name='Post' component={Post} />
                    <Tab.Screen name="Profile"
                    component={Profile}
                    options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />)
                    }} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#5637DD',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});

export default connect(null, mapDispatchToProps)(Main);