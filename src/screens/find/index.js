import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';
import {
    Text,
    TouchableWithoutFeedback} from 'react-native';

class Find extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    handleViewRef = ref => this.view = ref;
  
  bounce = () => this.view.bounce(800).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));
  
    render() { 
        return (  
            <TouchableWithoutFeedback onPress={this.bounce}>
            <Animatable.View ref={this.handleViewRef}>
              <Text>Bounce me!</Text>
            </Animatable.View>
          </TouchableWithoutFeedback>
        );
    }
}
 
export default Find;