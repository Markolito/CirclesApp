import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, Pressable } from 'react-native';
import { ListItem, Avatar, Overlay } from 'react-native-elements';
import { Card } from 'react-native-elements/dist/card/Card';
import { ScrollView } from 'react-native-gesture-handler';
import { USERS } from '../shared/users';

function RenderUserList({users}) {

    const renderUsers = ({ item }) => (
      <Pressable onPress={() => this.state.onToggleOverlay()}>
        <ListItem bottomDivider >
          <Avatar source={require('./images/catpic.jpg')}/>
          <ListItem.Content>
            <ListItem.Title>{`${item.nameFirst} ${item.nameLast} `}</ListItem.Title>
            <ListItem.Subtitle>{item.age}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </Pressable>
      );
      return (
          <FlatList
            keyExtractor={item => item.id.toString()}
            data={users}
            renderItem={renderUsers}
          />
        );
}

// function RenderProfile({users}){
//   const {user} = this.state.users.filter(user => user.id === userId)[0];
//   const renderUserProfile = ({user}) => {
//       <ScrollView>
//         <Card>
//           <Card.Title>{`${user.nameFirst} ${user.nameLast}`}</Card.Title>
//           <Card.Divider />
//           <Card.Image source={require('./images/carpic.jpg')}/>
//         </Card>
//       </ScrollView>
//   }
//   return(
//     <Overlay>
//     {renderUserProfile}
//     </Overlay>
//   );
// }

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
                {/* <RenderProfile user={user}
                               onToggleOverlay={() => this.toggleOverlay()} /> */}
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