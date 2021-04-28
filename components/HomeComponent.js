import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { POSTS } from '../shared/posts';

function RenderFeed({posts}) {

    const renderPost = ({item}) => {
        return (
            <Card>
                <Card.Title>{item.userName}</Card.Title>
                <Card.Image source={require("./images/catpic.jpg")}/> 
                <Text>{item.text}</Text>
                <Text>{item.date}</Text>
            </Card>
        );
    };
    return (
        <View>
            <FlatList
                data={posts}
                renderItem={renderPost}
                keyExtractor={item => item.id.toString()}/>
        </View>
    );
}

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: POSTS
        };
    }

    static navigationOptions = {
        title: 'Home'
    }

    render(){
        return(
            <View>
                <RenderFeed posts={this.state.posts}/>
            </View>
        );
    }
}

export default Home;