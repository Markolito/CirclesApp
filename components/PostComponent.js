import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { postFeed } from '../redux/ActionCreators';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { baseUrl } from '../shared/baseUrl';


const mapStateToProps = state => {
    return {
        users: state.users,
        posts: state.posts
    }
}

const mapDispatchToProps = {
    postFeed: (username, text, image) => (postFeed(username, text, image))
};

class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            username : '',
            text : '',
            image: baseUrl + './images/catpic.jpg'
        }
    }

    static navigationOptions = {
        title: 'Post'
    }

    getImageFromCamera = async () => {
        const cameraPermission = await Permissions.askAsync(Permissions.CAMERA);
        const cameraRollPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);

        if (cameraPermission.status === 'granted' && cameraRollPermission.status === 'granted') {
            const capturedImage = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                aspect: [1, 1]
            });
            if (!capturedImage.cancelled) {
                console.log(capturedImage);
                this.setState({image: capturedImage.uri});
            }
        }
    }

    handlePost(){
        this.props.postFeed(this.state.username, this.state.text, this.state.image);
        this.resetForm();
    }

    resetForm(){
        this.setState({
            username: '',
            text: '',
            image: baseUrl + './images/catpic.jpg'
        });
    }

    render() {
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>
                    This will be where you will be Posting your memories
                </Text>
                <Input
                    placeholder='Username'
                    leftIcon={{type: 'font-awesome', name: 'user-o'}}
                    onChangeText={username => this.setState({username})}
                    value={this.state.username}
                />
                <Image
                    source={{uri: this.state.image}}
                    style={styles.image}
                />
                <Input
                    placeholder='Whats Up?'
                    onChangeText={text => this.setState({text})}
                    value={this.state.text}
                    style={styles.postArea}
                    multiline={true}

                />
                <Button
                    title='Camera'
                    onPress={this.getImageFromCamera}
                />
                <Button
                    title='Post'
                    onPress={() => {
                        this.handlePost(this.state.username, this.state.text, this.state.image);
                        this.resetForm();
                    }
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 480,
        height: 240
    },
    postArea: {
        height: 150,
        padding: 5
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
