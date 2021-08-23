import React, { Component } from 'react';

import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Dimensions} from 'react-native';
    import { COLOR } from '../../constant/color';
    import {InputEdit} from '../../components';
    import FeatherIcon from 'react-native-vector-icons/Feather';
    import { Header } from 'react-native-elements'; 
    import Icon from 'react-native-vector-icons/FontAwesome5';
    import * as Animatable from 'react-native-animatable';

class addContact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:'',
            isFocusName:false,
            nickname:'',
            isFocusNickname:false,
            company:'',
            isFocusCompany:false,
            relatedPerson:'',
            birthday:'',
            web:'',
            phoneList:[],
            emailList:[],
            relatedPersonList:[],
            isLoading:true,
            isValidData:false
         }
    }

    saveAdd = () => {
        const newData = {
            name:this.state.name,
            nickname:this.state.nickname,
            company:this.state.company,
            phone:this.state.phoneList,
            email:['pioran1@gmail.com',...this.state.emailList]
        }
        this.props.navigation.navigate('Contact')
    }

    setValue = (inputName, value, id) => {
        if(inputName==='phone' || inputName==='email'){
            const currentList = this.state[`${inputName}List`]
            const index = currentList.findIndex(item => item.id === id);
            currentList[index].data = value
            this.setState({
                [`${inputName}List`]:currentList
            })
        }else{
            this.setState({
                [inputName]:value
            })
        }

        if(this.state.name!=='' && this.state.phoneList.length!==0){
            let checkInvalidPhone = 0
            this.state.phoneList.map((str) => {
                if(str.data.length<8){
                    checkInvalidPhone+=1
                }
            })
            if(checkInvalidPhone===0){
                this.setState({
                    isValidData:true
                })
            }else{
                if(this.state.isValidData){
                    this.setState({
                        isValidData:false
                    })
                }
            }
        }
    }

    setFocus = name => {
        const nameFocus = `isFocus${name}`
        this.setState({
            [nameFocus]:!this.state[nameFocus]
        })
    }

    clearValue = (inputName,id) => {
        if(inputName==='phone' || inputName==='email'){
            const currentList = this.state[`${inputName}List`]
            const index = currentList.findIndex(item => item.id === id);
            currentList[index].data = ''
            this.setState({
                [`${inputName}List`]:currentList
            })
        }else{
            this.setState({
                [inputName]:''
            })
        }
    }

    addInfo = inputName => {
        const list = this.state[`${inputName}List`]
        const id = list.length===0 ? 1 : Math.max(...list.map(item => item.id)) + 1
        list.push({
            id,
            data:''
        })
        this.setState({
            [`${inputName}List`]:list
        })
    }

    deleteInfo = (inputName,id) => {
        const list = this.state[`${inputName}List`]
        const index = list.findIndex(item => item.id === id)
        list.splice(index, 1)
        this.setState({
            [`${inputName}List`]:list
        })
    }

    renderList = inputName => {
        if(this.state[`${inputName.toLowerCase()}List`].length===0) return null

        return this.state[`${inputName.toLowerCase()}List`].map((item,index) => {
                return <InputEdit
                key={index}
                id={item.id}
                label={inputName}
                value={item.data}
                setValue={this.setValue}
                setFocus={this.setFocus}
                clearValue={this.clearValue}
                deleteInfo={this.deleteInfo}/>
        })
    }

    render() { 
        return (
            <ScrollView>
            <Animatable.View
            animation="fadeInUp"
            duration={800}>
                <Header
                statusBarProps={{ barStyle: 'light-content',backgroundColor:"transparent"  }}
                barStyle="light-content" // or directly
                leftComponent={
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Text style={{color:'red', fontSize:17}}>Cancel</Text>
                    </TouchableOpacity>
                }
                rightComponent={
                    this.state.isValidData ? 
                    <TouchableOpacity onPress={this.saveAdd}>
                    <Text style={{color:'blue', fontSize:17}}>Save</Text>
                    </TouchableOpacity>
                    :
                    <Text style={{color:'gray', fontSize:17}}>Save</Text>
                }
                centerComponent={{ text: 'Add New Contact', style: { fontSize:17, fontWeight:'bold',color: COLOR.main } }}
                containerStyle={{
                    borderBottomColor:'#CBCBCB',
                    borderBottomWidth:3,
                    backgroundColor: '#fff',
                    justifyContent: 'space-around',
                }}
                />
           
            <View style={styles.container}>
                <View  style={styles.photoContainer}>
                    <TouchableOpacity
                    style={styles.photo}>
                         <Icon
                            name='camera'
                            size={25}
                            color='white'
                        />
                    
                    </TouchableOpacity>
                </View>
                <View  style={styles.nameContainer}>
                <InputEdit
                label='Name'
                value={this.state.name}
                focus={this.state.isFocusName}
                setFocus={this.setFocus}
                setValue={this.setValue}
                clearValue={this.clearValue}/>

                <InputEdit
                label='Nickname'
                value={this.state.nickname}
                focus={this.state.isFocusNickname}
                setFocus={this.setFocus}
                setValue={this.setValue}
                clearValue={this.clearValue}/>

                <InputEdit
                label='Company'
                value={this.state.company}
                focus={this.state.isFocusCompany}
                setFocus={this.setFocus}
                setValue={this.setValue}
                clearValue={this.clearValue}/>
                
                </View>
            </View>
             <View style={styles.phoneContainer}>
                    {this.renderList('Phone')}
                    <View style={{flexDirection:'row',marginTop:12}}>
                        <TouchableOpacity
                        style={{ paddingHorizontal:10}}
                        onPress={() => this.addInfo('phone')}>
                            <FeatherIcon 
                            name='plus-circle'
                            size={20}
                            color='green'
                            />
                        </TouchableOpacity>
                        <Text style={{fontSize:17}}>Phone Number</Text>
                    </View>
                 </View>
                 <View style={styles.phoneContainer}>
                    {this.renderList('Email')}
                    <View style={{flexDirection:'row',marginTop:12}}>
                        <TouchableOpacity
                        style={{ paddingHorizontal:10}}
                        onPress={() => this.addInfo('email')}>
                            <FeatherIcon 
                            name='plus-circle'
                            size={20}
                            color='green'
                            />
                        </TouchableOpacity>
                        <Text style={{fontSize:17}}>Email Address</Text>
                    </View>
                 </View>
             </Animatable.View>
             </ScrollView>
        );
    }
}
 
export default addContact;

const styles = StyleSheet.create({
    container:{
       height:200,
        flexDirection:'row'
    },
    photoContainer:{
        flex:1,
        opacity:0.8,
        marginTop:20,
        alignItems:'center'
    },
    photo:{
        width:80,
        height:80,
        backgroundColor:COLOR.main,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20
    },
    nameContainer:{
        flex:2.5
    },
    phoneContainer:{
        marginBottom:30,
    }
})