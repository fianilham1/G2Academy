import React, { Component } from 'react';
import {
   View,
   Image,
   Text,
   TouchableOpacity,
   FlatList,
   StyleSheet,
 } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

    renderItem = ({item}) => {
        return (
            <TouchableOpacity
            // onPress={() => {
            //   props.navigator.push({
            //     id: 'CallScreen',
            //     name: props.name,
            //     image: props.image,
            //   });
            // }}
          >
            <View style={styles.row}>
        
              <Image source={{ uri: item.image }} style={styles.pic} />
              <View >
                <View style={styles.nameContainer}>
                  <Text style={styles.nameTxt}>
                    {item.name}
                  </Text>
                </View>
                <View style={styles.end}>
                  <Icon
                    name="call-missed" size={15} color="#ed788b"
                    style={{ marginLeft: 15, marginRight: 5 }}
                  />
                  <Text style={styles.time}>
                    {item.date} {item.time}
                  </Text>
                </View>
              </View>
              <Icon name={item.call} size={23} color="#075e54" style={{ marginRight: 50 }} />
            </View>
        
          </TouchableOpacity>
        );
      }

class CallsTab extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <FlatList
            data={this.props.CallsData}
            keyExtractor={(item, idx) => idx}
            renderItem={this.renderData}
            // onRefresh={() => this.getData(1)}
            // refreshing={this.state.refresh}
            // onEndReached={() => this.getData(this.state.page + 1)}
            // onEndReachedThreshold={0.5}
        />
         );
    }
}
 


export default CallsTab;


const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#f7f7f7',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
    justifyContent: 'space-between',

  },
  pic: {
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 270,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 15,

  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  end: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    fontWeight: '400',
    color: '#666',
    fontSize: 12,

  },
});