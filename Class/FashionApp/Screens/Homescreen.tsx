import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View,FlatList, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import general from '../Constants/General'
import Colors from '../Constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import jacket from '../Constants/jacket.png'
import { useState } from 'react'
import Clothes from '../Constants/Clothing'
import { StatusBar } from 'react-native'

const Homescreen = ({navigation}) => {
  const [active,setActive] = useState('All')
  const tabs = ['All', 'Men', 'Women', 'Kids',];
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts();
  } ,[]);

  const fetchProducts = () => {
  fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
      // .then(json => console.log(json))
    .then((data) => {
      setProducts(data);
       })
}
  const renderItem = ({ item }) => (
    <View style={general.con}>
      <StatusBar  backgroundColor={"white"} barStyle={'dark-content'}/>
      <TouchableOpacity activeOpacity={0.7} style={general.card} onPress={() => navigation.navigate('Details', {item})} >
      <Image source={{ uri: item.image }} style={general.image} />
      <View style={general.float}> <Ionicons name='heart' color={Colors.primary} size={20}/></View>
      <View style={{paddingHorizontal:5,}}>
          <Text style={[general.name]} numberOfLines={1}>{item.title} </Text>
          <Text style={{ fontWeight: 'bold', color: Colors.primary }}>${item.price}</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}> 
      <Ionicons name='star' color={Colors.primary} size={24}/>
      <View style={{height:30,width:30,borderRadius:30,backgroundColor:Colors.primary,alignItems:'center',justifyContent:'center'}}>  
        <Ionicons name='briefcase-outline' color={'white'} size={20}/></View>
      </View>
      </View>
      </TouchableOpacity>
    </View>
  );
  const Header = () => {
    return (
      <View>
        <View style={general.display}>
          <View style={{ width: '50%' }}>
            <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>
              Shop With Us Get 50% off
            </Text>
          </View>
          <Image
            source={jacket}
            style={{ resizeMode: 'contain', height: 150, width: '50%' }}
          />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          {tabs.map((tab, index) => (
            <TouchableOpacity
              key={tab}
              style={[general.tabButton, active === tab && general.activeTab]}
              onPress={() => setActive(tab)}
            >
              <Text style={[general.tabText, active === tab && general.activeText]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };
  return (
      <><StatusBar backgroundColor={"#f2f2f2"} barStyle={'dark-content'} /><SafeAreaView style={[general.container1, { paddingHorizontal: 15, backgroundColor: "#f2f2f2" }]}>
      <View style={general.row}>
        <View style={{ alignItems: 'flex-start', width: '50%' }}>
          <Text style={{ fontSize: 20, color: Colors.text, fontWeight: 'bold' }}>Welcome Back!</Text>
          <Text style={{ fontSize: 14, fontWeight: 'bold', }}>Ojogo Mercy</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Sheet')}>
          <Ionicons name='notifications' size={20} color={Colors.primary} />
        </TouchableOpacity>

      </View>
      <View style={general.search}>
        <Ionicons name='search' size={20} color={'gray'} />
        <TextInput
          placeholder='Search'
          placeholderTextColor={'gray'}
          style={{ width: '80%' }} />
        <Ionicons name='mic' size={20} color={'gray'} />
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingVertical: 0,
        }}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={Header} />
    </SafeAreaView></>
  )
}

export default Homescreen
