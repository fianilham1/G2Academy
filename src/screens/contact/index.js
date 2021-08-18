import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    StyleSheet,
    Dimensions} from 'react-native';
  import {ListItem} from 'react-native-elements';
  import { SwipeListView } from 'react-native-swipe-list-view';
  import Icon from 'react-native-vector-icons/FontAwesome5';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import { Header } from 'react-native-elements'; 
  import { COLOR } from '../../constant/color';
  import {connect} from "react-redux";
  import {storeContactList} from '../../actions/contact';

  const WIDTH= Dimensions.get('window').width;

class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            users: [],
            refresh: false,
            limit: 15,
            page: 1,
            idMax:500
         }
    }

    generateRandomPhone = ( length = 10 ) => {
      return '+628'+Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));
      // return '+62895877652423'
    }

    getName = str => {
      const arr = str.split("@")
      return arr[0]
    }

    componentDidMount(){
      this.getData(1)
    }

    getRandomImage = id => {
      const imgArr = ['','https://images.bisnis-cdn.com/thumb/posts/2021/03/23/1371168/rose-blackpink-100-hot.jpg?w=744&h=465','https://cdns.klimg.com/merdeka.com/i/w/news/2020/07/21/1200732/content_images/670x335/20200721210320-1-rose-blackpink-004-tantri-setyorini.jpg','https://www.kordanews.com/wp-content/uploads/2021/04/Blackpink-Rose-5.jpg']
      return imgArr[id % 3]
    }

    getData = (page = 1) => {
      console.log("page:", page);
      this.setState({
          refresh: true
      })
      const { limit } = this.state
      fetch(`https://jsonplaceholder.typicode.com/comments?_limit=${limit}&_page=${page}`)
          .then(response => response.json())
          .then(users => {
              const userList = users.map((user,index) => {
                return{
                  id:user.id,
                  image:this.getRandomImage(user.id),
                  name:this.getName(user.email),
                  email:[{id:1, data:user.email}],
                  phone:[{id:1, data:`${this.generateRandomPhone()}`},{id:2,data:'+6288889999'}],
                  address:'Surabaya',
                  nickname:'',
                  company:''
                }
              })

              let newData = []
              if (page === 1)
                  newData = this.props.contactList.length > 0 ? this.props.contactList : userList
              else
                  newData = [...this.props.contactList, ...userList]

              this.setState({
                  page,
                  refresh: false
              })
              this.props.storeContactList(newData)
          })
          .catch(error => console.log(error))
  }

    closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    addRow = newData => {
      const {users} = this.state
      const dataList = [...users];
      // const id = users.length===0 ? 1 : Math.max(...users.map(item => item.id)) + 1
      const id = this.state.idMax + 1 //hardcode id max from fake api jsonholder
      dataList.push({
          id,
          ...newData
        })
        this.setState({
          users:dataList,
          idMax:id
        })
    }

    editRow = (newData) => {
      const {users} = this.state
      const dataList = [...users];
      const index = users.findIndex(item => item.id === newData.id);
      console.log('cek if change params')
      dataList.splice(index, 1, newData);
      this.setState({
        users:dataList
      })
    }

    deleteRow = (rowMap, rowKey) => {
        const {users} = this.state
        this.closeRow(rowMap, rowKey);
        const dataList = [...users];
        const index = users.findIndex(item => item.id === rowKey);
        dataList.splice(index, 1);
        this.setState({
          users:dataList
        })
    }

    onRowDidOpen = rowKey => {
        console.log('This row opened', rowKey);
    };

    renderImage = item => {
        if (item.image && item.image!=='') return <Image source={{ uri: item.image }} style={styles.pic} />

        const index = Math.floor(Math.random()*(colorArray.length-1)+1)
        return <View style={{
            backgroundColor: colorArray[30],
            // flex:1,
            justifyContent:'center',
            alignItems:'center',
            ...styles.pic
            }}>
            <Text style={{
                fontSize:30,
                color:"#fff"
            }}>{item.name.charAt(0)}</Text>
            </View>
    }

    renderItem = ({item}) => {
        return (
          <ListItem 
          bottomDivider={true} 
          onPress={() => this.props.navigation.navigate('ContactDetail',{itemData:item})}>
            {this.renderImage(item)}
            <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Subtitle>{item.email[0].data}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      }

      renderHiddenItem = (data, rowMap) => (
        <View style={styles.rowBack}>
            <Text>Left</Text>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnLeft]}
                onPress={() => this.closeRow(rowMap, data.item.id)}
            >
            <Icon
              name='window-close'
              size={20}
              color='white'
            />
            <Text style={{color:'white'}}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={() => this.deleteRow(rowMap, data.item.id)}
            >
            <Icon
              name='trash'
              size={20}
              color='white'
            />
             <Text style={{color:'white'}}>Delete</Text>
            </TouchableOpacity>
        </View>
      );

    render() { 
        return ( 
            <View style={{ flex: 1 }} >
              <Header
                statusBarProps={{ barStyle: 'light-content',backgroundColor:"transparent"  }}
                barStyle="light-content" // or directly
                centerComponent={{ text: 'Contact List', style: { fontSize:17, fontWeight:'bold',color: '#fff' } }}
                containerStyle={{
                    backgroundColor: COLOR.main,
                    justifyContent: 'space-around',
                }}
                />
            <SwipeListView 
             disableRightSwipe
                data={this.props.contactList.sort((a, b) => a.name.localeCompare(b.name))}
                keyExtractor = {(item) => {
                    return item.id;
                }}
                renderItem={this.renderItem}
                renderHiddenItem={this.renderHiddenItem}
                leftOpenValue={75}
                rightOpenValue={-150}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                onRowDidOpen={this.onRowDidOpen}
                onRefresh={() => this.getData(1)}
                refreshing={this.state.refresh}
                onEndReached={() => this.getData(this.state.page + 1)}
                onEndReachedThreshold={.1}
                />
                <TouchableOpacity
                onPress={() => this.props.navigation.navigate('AddContact')}
                style={styles.buttonAdd}>
                  <AntDesign 
                    name='plus'
                    size={26}
                    color='white'
                  />
                </TouchableOpacity>
            </View>
         );
    }
}
 
const mapStateToProps = state => ({
    contactList: state.contact.contactList,
})

const mapDispatchToProps = dispatch => ({
    storeContactList: data => dispatch(storeContactList(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

const styles = StyleSheet.create({
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnLeft: {
        backgroundColor: '#0038CF',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
    },
    pic: {
      borderRadius: 30,
      width: 60,
      height: 60,
    },
    buttonAdd:{
      alignItems:'center',
      justifyContent:'center',
      top:-90,
      left:WIDTH*0.75,
      height:75,
      width:75,
      borderRadius:40,
      backgroundColor:COLOR.main
    },

   
  });

  const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
                    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
                    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
                    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
                    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
                    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
                    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
                    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
                    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
                    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
