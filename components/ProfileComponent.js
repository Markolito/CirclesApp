import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { USERS } from '../shared/users';

function RenderUserList({users}) {

    const renderUsers = ({ item }) => (
        <ListItem bottomDivider >
          <Avatar source={require('./images/catpic.jpg')}/>
          <ListItem.Content>
            <ListItem.Title>{`${item.nameFirst} ${item.nameLast} `}</ListItem.Title>
            <ListItem.Subtitle>{item.age}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      );
      return (
          <FlatList
            keyExtractor={item => item.id.toString()}
            data={users}
            renderItem={renderUsers}
          />
        );
}

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

    render(){
        return(
            <View>
                <Text>Users</Text>
                <RenderUserList users={this.state.users}/>
            </View>
        );
    }
}

export default Profile;