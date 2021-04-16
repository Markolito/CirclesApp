import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { USERS } from '../shared/users';

class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: USERS
        };
    }

    static navigationOptions = {
        title: 'Post'
    }

    render() {
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>
                    This will be where you will be Posting your memories
                </Text>
            </View>
        );
    }
}

export default Post;