import * as React from 'react';
import { Component } from 'react';
import { View, Platform, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './HomeComponent';
import Profile from './ProfileComponent';
import Search from './SearchComponent';
import Post from './PostComponent';

const Tab = createBottomTabNavigator();

class Main extends Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name='Home' component={Home} />                   
                    <Tab.Screen name='Search' component={Search} />
                    <Tab.Screen name='Post' component={Post} />
                    <Tab.Screen name='Profile' component={Profile} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

export default Main;