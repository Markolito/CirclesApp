import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { USERS } from '../shared/users';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: USERS
        };
    }

    static navigationOptions = {
        title: 'Profile'
    }

    render() {
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>
                    Hello You
                </Text>
            </View>
        );
    }
}

export default Profile;