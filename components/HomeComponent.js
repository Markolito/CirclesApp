import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        posts: state.posts
    };
};

class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    }

    render(){
        const renderPost = ({item}) => {
            return (
                <Card>
                    <Card.Title>{item.userName}</Card.Title>
                    <Card.Image source={{uri: baseUrl + item.image}}/> 
                    <Text>{item.text}</Text>
                    <Text>{item.date}</Text>
                </Card>
                );
            };
        return(
            <View>
                <FlatList
                data={this.props.posts.posts}
                renderItem={renderPost}
                keyExtractor={item => item.id.toString()}/>
            </View>
        );
    }
}

export default connect(mapStateToProps)(Home);