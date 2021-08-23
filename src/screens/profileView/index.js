import React, { Component } from 'react';

import {
    View,
    Image,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    StyleSheet,
    Dimensions,
    Modal,
    ImageBackground} from 'react-native';
 import Icon from 'react-native-vector-icons/MaterialIcons';
 import { COLOR } from '../../constant/color';
 import { connect } from 'react-redux';
 import { editUser, signIn } from '../../actions/auth';
 import {Input} from 'react-native-elements';

 const WIDTH= Dimensions.get('window').width;
 const HEIGHT= Dimensions.get('window').height;

class ProfileView extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            profile:this.props.userLogin,
            modalVisible: false,
            editProfile:'', //name or email or phone
            inputEditProfile:'' //input change text
        }
    }

    componentDidUpdate(prevState){
        // console.log('cek state prev',prevState.userLogin.image.substr(15))
        // console.log('cek state photo',this.state.profile.image.substr(15))
        // console.log('redux state',this.props.userLogin.image.substr(15))
        if(JSON.stringify(prevState.userLogin) !== JSON.stringify(this.props.userLogin)){
            this.setState({
                profile:this.props.userLogin
            })
        }
    }

    setValue = newData => {
        this.setState({
            inputEditProfile:newData
        })
    }

    clickModalHandler = (visible, params, save) => {
        this.setState({ 
            modalVisible: visible,
            editProfile: params,
            inputEditProfile: this.state.profile[params]
         });
        if (save) {
            const newData = {
                ...this.state.profile,
                [this.state.editProfile]:this.state.inputEditProfile
            }
            this.props.editUser(newData) //update userList 
            this.props.doLogin(newData)  //update userLogin
            this.setState({
                profile:newData
            })
        }
      }

    renderEditBox = () => {
        const { modalVisible } = this.state;
  
        return (
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            backdropOpacity={0.3}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View>
                    <Input
                        placeholder={this.state.editProfile}
                        onChangeText={text => this.setValue(text)}
                        label={'Enter your '+this.state.editProfile}
                        value={this.state.inputEditProfile}
                        containerStyle={{
                        height:45,
                        borderColor:COLOR.gray
                        }}
                        labelStyle={{
                            position:"absolute",
                            bottom:60,
                            left:10,
                            fontSize:18,
                            backgroundColor:"#ffffff",
                            color:'#000'
                        }}
                        inputContainerStyle={{
                            borderBottomWidth:2,
                            borderBottomColor:'#0D9383',
                            height:30
                        }} 
                        style={{
                            paddingHorizontal:0
                        }}
                    />
                </View>
                <View style={{flexDirection:'row'}}>
                    <TouchableHighlight
                    underlayColor={COLOR.gray}
                    style={styles.button}
                    onPress={() => this.clickModalHandler(!modalVisible,this.state.editProfile,true)}
                    >
                    <Text style={styles.textStyle}>Save</Text>              
                    </TouchableHighlight>
                    <TouchableHighlight
                    underlayColor={COLOR.gray}
                    style={styles.button}
                    onPress={() => this.clickModalHandler(!modalVisible)}
                    >
                    <Text style={styles.textStyle}>Cancel</Text>
                    </TouchableHighlight>
                </View>
               
              </View>
            </View>
          </Modal>
        </View>
        )
      }

    render() { 
        const {profile} = this.state
        return ( 
        <View style={{flex:1, backgroundColor:'white'}}>
            <View style={styles.header}>
                <View style={styles.left} >
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Icon
                    name="arrow-back" color="#fff" size={23}
                    style={{ paddingLeft: 10 }}
                    />
                </TouchableOpacity>
                </View>
                <View style={styles.screenHeader}>
                    <Text style={styles.screenTitle}>Profile</Text>
                </View>
            </View>
            <View style={styles.picContainer}>
                <View style={styles.pic}>
                    <Image source={{ uri: profile.image }}  style={styles.picProfile} />
                    <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('Camera')}
                    style={styles.addPhotoButton}>
                        <Icon
                        name='photo-camera' 
                        size={25} 
                        color="white"
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.profileContainer}>
                <TouchableHighlight 
                underlayColor={COLOR.gray}
                onPress={() => this.clickModalHandler(true,'name')}>
                    <View style={styles.profile}>
                    <Icon
                        name='person' 
                        size={22} 
                        color="#0EA391"
                        style={{paddingVertical:10}}
                    />
                    <View style={styles.box}>
                        <View style={styles.textBox}>
                            <Text style={styles.textLabel}>Name</Text>
                            <Text style={styles.text}>{profile.name}</Text>
                        </View>
                        <Icon
                            name='edit' 
                            size={22} 
                            color={COLOR.gray}
                            style={{marginVertical:10}}
                        />
                    </View>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight 
                underlayColor={COLOR.gray}
                onPress={() => this.clickModalHandler(true,'username')}>
                    <View style={styles.profile}>
                    <Icon
                        name='mail' 
                        size={22} 
                        color="#0EA391"
                        style={{paddingVertical:10}}
                    />
                     <View style={styles.box}>
                        <View style={styles.textBox}>
                            <Text style={styles.textLabel}>Email</Text>
                            <Text style={styles.text}>{profile.username}</Text>
                        </View>
                        <Icon
                            name='edit' 
                            size={22} 
                            color={COLOR.gray}
                            style={{marginVertical:10}}
                        />
                    </View>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight 
                underlayColor={COLOR.gray}
                onPress={() => this.clickModalHandler(true,'phone')}>
                    <View style={styles.profile}>
                    <Icon
                        name='call' 
                        size={22} 
                        color="#0EA391"
                        style={{paddingVertical:10}}
                    />
                    <View style={{...styles.box,borderBottomWidth:0}}>
                        <View style={styles.textBox}>
                            <Text style={styles.textLabel}>Phone</Text>
                            <Text style={styles.text}>{profile.phone}</Text>
                        </View>
                        <Icon
                            name='edit' 
                            size={22} 
                            color={COLOR.gray}
                            style={{marginVertical:10}}
                        />
                    </View>
                    </View> 
                </TouchableHighlight>
            </View>
            {this.renderEditBox()}
           
        </View>
         );
    }
}

const mapStateToProps = state => ({
    userLogin: state.auth.userLogin,
})

const mapDispatchToProps = dispatch => ({
    editUser: newData => dispatch(editUser(newData)),
    doLogin: data => dispatch(signIn(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);

const styles = StyleSheet.create({
    header: {
        height: 65,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#075e54',
      },
      left: {
        flexDirection: 'row',
        alignItems: 'center',
      },

      screenHeader:{
        flexDirection:'column',
        marginLeft:40
      },
      screenTitle: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 20,
      },
      picContainer:{
        height:200,
        justifyContent:'center',
        alignItems:'center'
      },
      picProfile: {
        borderRadius: 85,
        width: 170,
        height: 170,
      },
      addPhotoButton:{
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        bottom:0,
        right:0,
        height:50,
        width:50,
        borderRadius:25,
        backgroundColor:'#0D9383',
      },
      profileContainer:{
        marginVertical:15,
      },
      profile:{
        flexDirection:'row',
        marginVertical:10,
        paddingLeft:30
      },
      text:{
          fontSize:17
      },
      box:{
        flexDirection:'row',
        height:60,
        width:WIDTH*0.7,
        borderBottomWidth:0.5,
        borderBottomColor:COLOR.gray,
        marginLeft:20,
        justifyContent:'space-between'
      },
      textBox:{
        flexDirection:'column', 
      },
      textLabel:{
          opacity:0.4,
          fontSize:15
      },
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    modalView: {
        backgroundColor: "white",
        width:WIDTH,
        padding: 20,
        paddingTop:45,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        padding: 10,
        elevation: 2,
        alignItems:'flex-start',
        justifyContent:'flex-start',
    },
    textStyle: {
        fontSize:17,
        fontWeight:'800',
        color:'#0D9383'
    },
    modalText: {
        marginBottom: 15,

    },
    dark: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.25)',
      },
  });