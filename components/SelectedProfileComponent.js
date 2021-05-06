import React, { Component } from 'react';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Text, View, ScrollView, FlatList,
    Modal, Button, StyleSheet,
    Alert, PanResponder, Share } from 'react-native';
import { Card, Icon, Rating, Input } from 'react-native-elements';

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

function RenderProfile(props) {
    const {user} = props;
    if (user) {
        return(
            <Card
                featuredTitle={`${user.nameFirst} + ${user.nameLast}`}
                image={{uri: baseUrl + user.profilePic}}>
                <Text>{user.age}</Text>
                <Text>{user.birthdate}</Text>
                <Text>{user.phoneNumber}</Text>
                <Text></Text>
            </Card>
        );
    } return <View/>;
}

class SelectedProfile extends Component{
    constructor(props){
        super(props);
        this.state = {
            showModal: false
        }
    }
    toggleModal(){
        this.setState({showModal: !this.state.showModal});
    }
    render() {
        const userId = this.props.navigation.getParam('userId');
        const user = this.props.users.users.filter(user => user.id === userId)[0];
        return (
            <View>
                <RenderProfile user={user}/>
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedProfile);