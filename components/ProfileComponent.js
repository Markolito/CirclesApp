import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { ListItem, Avatar, Card } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

// this should be the search Component with all the different users on it

  const mapStateToProps = state => {
    return {
        users: state.users
    };
  };

  function RenderProfile(props) {
    const user = props;
    console.log(user);
    if (user) {
        return(
          <View>
            <Card
                featuredTitle={`${user.nameFirst} + ${user.nameLast}`}
                image={{uri: baseUrl + user.profilePic}}>
                <Text>{user.age}</Text>
                <Text>{user.birthdate}</Text>
                <Text>{user.phoneNumber}</Text>
                <Text></Text>
            </Card>
          </View>
        );
    } return <View/>;
}

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
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
      const renderUsers = ({ item }) => (
        <View>
            <ListItem bottomDivider onPress={() => RenderProfile({ item })}>
              <Avatar rounded source={{uri: baseUrl + item.profilePic}}/>
              <ListItem.Content>
                <ListItem.Title>{`${item.nameFirst} ${item.nameLast} `}</ListItem.Title>
                <ListItem.Subtitle>{item.age}</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
        </View>
        );

        return(
            <View>
                <Text style={styles.titleText}>Users</Text>
                <FlatList
                  keyExtractor={item => item.id.toString()}
                  data={this.props.users.users}
                  renderItem={renderUsers}
                /> 
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

export default connect(mapStateToProps)(Profile);