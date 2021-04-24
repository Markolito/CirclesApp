import React, { Component, useState } from 'react';
import { Text, View, FlatList, StyleSheet, Pressable } from 'react-native';
import { ListItem, Avatar, Overlay } from 'react-native-elements';
import { Card } from 'react-native-elements/dist/card/Card';
import { ScrollView } from 'react-native-gesture-handler';
import { USERS } from '../shared/users';
// this should be the search Component with all the different users on it
function RenderUserList({users}) {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

    const renderUsers = ({ item }) => (
      <View>
          <ListItem bottomDivider >
            <Avatar source={require('./images/catpic.jpg')}/>
            <ListItem.Content>
              <ListItem.Title>{`${item.nameFirst} ${item.nameLast} `}</ListItem.Title>
              <ListItem.Subtitle>{item.age}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
      </View>
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
            users: USERS,
            showOverlay: false
        };
    }

    static navigationOptions = {
        title: 'Profile'
    }
    toggleOverlay(){
      this.setState({showOverlay: !this.state.showOverlay});
    }

    render(){

        return(
            <View>
                <Text style={styles.titleText}>Users</Text>
                <RenderUserList users={this.state.users}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleText: {
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 25
    }
  });

export default Profile;