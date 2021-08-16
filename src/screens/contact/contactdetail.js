import React, { Component } from 'react';
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { MAIN_COLOR } from '../../constant/main-color';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    StatusBar,
    Image} from 'react-native';

import { Header } from 'react-native-elements'; 

class ContactDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            itemData:this.props.route.params.itemData
         }
    }

    renderPhoneList = phone => {
        return phone.map((item,index) => {
            return <View key={index}
            style={{flexDirection: "row"}}>
            <View style={styles.left}>
                <Text style={styles.number}>
                {item.data}
                </Text>
                <Text style={styles.nat}>
                Mobile | Indonesia
                </Text>
            </View >
            <TouchableOpacity style={styles.phone}>
                <Icon
                name='phone'
                size={22}
                color='#ffffff'
                />
            </TouchableOpacity>
            <TouchableOpacity style={{...styles.phone,...styles.sms}}>
                <Icon
                name='comment-alt'
                size={22}
                color='#ffffff'
                />
            </TouchableOpacity>
            </View>
        })
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps.route.params?.itemData) !== JSON.stringify(this.props.route.params?.itemData)) {
          const newData = this.props.route.params?.itemData;
          this.setState({
            itemData:newData
        })
        }
      }

    editDataDetail = () => {
        const {itemData} = this.props.route.params
        this.setState({
            itemData
        })
    }

    render() { 
        const {itemData} = this.state
        return ( 
        <View style={{ flex: 1 }}>
            <Header
                statusBarProps={{ barStyle: 'light-content',backgroundColor:"transparent"  }}
                barStyle="light-content" // or directly
                leftComponent={
                    <TouchableOpacity style={{marginHorizontal:10,marginVertical:5}} onPress={() => this.props.navigation.navigate('ContactList',{itemData})}>
                    <Icon
                    name='arrow-left'
                    size={22}
                    color='#ffffff'
                    />
                    </TouchableOpacity>
                   
                }
                rightComponent={
                    <TouchableOpacity style={{marginHorizontal:10,marginVertical:5}} onPress={() => this.props.navigation.navigate('EditContact',{itemData})}>
                    <Icon
                        name='pencil-alt'
                        size={22}
                        color='#ffffff'
                        />
                    </TouchableOpacity>
                }
                centerComponent={{ text: itemData.name, style: { fontSize:17, fontWeight:'bold',color: '#fff' } }}
                containerStyle={{
                    backgroundColor: MAIN_COLOR,
                    justifyContent: 'space-around',
                }}
                />
        <ImageHeaderScrollView
            maxHeight={250}
            minHeight={90}
            headerImage={{uri:itemData.image ? itemData.image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}}
           
            renderForeground={() => (
                <View style={{ height: 75, marginLeft:'80%', justifyContent: "center", alignItems: "center" }} >
                {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('EditContact',{itemData,editData,editDataDetail:newData => this.editDataDetail(newData)})} style={styles.phone}>
                    <Icon
                        name='pencil-alt'
                        size={22}
                        color='#ffffff'
                        />
                </TouchableOpacity> */}
                </View>
            )}
            >

            <View style={styles.container}>
                {this.renderPhoneList(itemData.phone)}

                <View style={styles.detail}>
                    <Text style={styles.profileHeader}>
                    Name
                    </Text>
                    <Text style={styles.profile}>
                    {itemData.name}
                    </Text>
                    <Text style={styles.profileHeader}>
                    Email
                    </Text>
                    <Text style={styles.profile}>
                    {itemData.email[0].data}
                    </Text>
                    <Text style={styles.profileHeader}>
                    Address
                    </Text>
                    <Text style={{...styles.profile,marginBottom:15}}>
                    {itemData.address}
                    </Text>
                </View>

                <View style={styles.detail}>
                    <TouchableOpacity>
                    <Text style={styles.contact}>Share Contact</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style={styles.contact}>Add To Favoritelist</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style={styles.contact}>Add To Blacklist</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style={{...styles.contact, color:"#EE0303"}}>Delete Contact</Text>
                    </TouchableOpacity>
                </View>
               
            </View>

        </ImageHeaderScrollView>
        </View>
        );
    }
}
 
export default ContactDetail;

const styles = StyleSheet.create({
    textImg:{ 
        backgroundColor: "transparent",
        color:"#00716F",
        fontSize:20,
        fontWeight:'bold',
 
     },
    container:{
        height: 700,
        marginLeft:20,
        marginRight:20,
        marginTop:20
    },
    left:{
        flex:1
    },
    right:{
        flex:.5
    },
    detail:{
        flex:1
    },
    name:{
        flex:1
    },
    image: {
        height: 200,
        width: Dimensions.get('window').width,
        alignSelf: 'stretch',
        resizeMode: 'cover',
      },
    number:{
        fontSize:20,
    },
    contact:{
        fontSize:18,
        marginVertical:12
    },
    nat:{
        opacity:0.4,
        marginBottom:30,
    },
    phone:{
        alignItems:'center',
        justifyContent:'center',
        height:40,
        width:40,
        borderRadius:40,
        backgroundColor:'#00716F',
        marginHorizontal:10
    },
    sms:{
        marginRight:3
    },
    detail:{
        borderTopWidth:2,
        borderTopColor:"#DCDCDC"
    },
    profileHeader:{
        fontSize:20,
        color:"#00716F",
        marginTop:10
    },
    profile:{
        fontSize:17,
        marginTop:0
    },
    navTitleView: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 16,
        opacity: 0,
      },
      navTitle: {
        color: 'white',
        fontSize: 18,
        backgroundColor: 'transparent',
      },
})