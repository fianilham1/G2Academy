import React from 'react';
import {
   View,
   Image,
   Text,
   TouchableOpacity,
   StyleSheet,
   FlatList
 } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Row = props => (
  <TouchableOpacity
    onPress={() => {
      props.navigator.push({
        id: 'ChatView',
        name: props.name,
        image: props.image,
      });
    }}
  >
    <View style={styles.row}>
      <Image source={{ uri: props.image }} style={styles.pic} />
      <View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>{props.name}</Text>
          <Text style={styles.time}>{props.time}</Text>
        </View>
        <View style={styles.msgContainer}>
          <Icon
            name={props.icon} size={15} color="#b3b3b3"
            style={{ marginLeft: 15, marginRight: 5 }}
          />
          <Text style={styles.msgTxt}>{props.message}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

renderItem = ({item}) => {
    return (
        <TouchableOpacity
        // onPress={() => {
        //   props.navigator.push({
        //     id: 'ChatView',
        //     name: props.name,
        //     image: props.image,
        //   });
        // }}
      >
        <View style={styles.row}>
          <Image source={{ uri: item.image }} style={styles.pic} />
          <View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt}>{item.name}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
            <View style={styles.msgContainer}>
              <Icon
                name={item.icon} size={15} color="#b3b3b3"
                style={{ marginLeft: 15, marginRight: 5 }}
              />
              <Text style={styles.msgTxt}>{item.message}</Text>
            </View>
          </View>
        </View>
    </TouchableOpacity>
    );
  }

class ChatsTab extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <FlatList
            data={this.props.ChatsData}
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

export default ChatsTab;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#f7f7f7',
    borderBottomWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 15,

  },
  time: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgTxt: {
    fontWeight: '400',
    color: '#666',
    fontSize: 12,
  },
});