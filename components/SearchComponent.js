import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { USERS } from '../shared/users';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: USERS
        };
    }

    static navigationOptions = {
        title: 'Search'
    }

    render() {
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>
                    This will be where you do the searching
                </Text>
            </View>
        );
    }
}

export default Search;