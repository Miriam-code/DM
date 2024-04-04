import React, { useState, useEffect, useContext } from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { View, StyleSheet, Text, Image } from 'react-native';
import Home from '../screens/home/Home';
import MyProfile from '../screens/myProfile/MyProfile';
import LogoutButton from './LogoutButton/LogoutButton';
import { hostname } from '../hostname/hostname';
import { AuthContext } from '../context/AuthContext';


const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
  const {user} = useContext(AuthContext);
  console.log(user);
  const imageUrl = `http://localhost:3001/upload/${user.profileImage}`;
  console.log(imageUrl);
  
  

  return (
    <Drawer.Navigator
      drawerContent={props => {
        return (
          <DrawerContentScrollView {...props}>
            <View style={styles.drawerHeader}>
              {user && (
                <>
                  <Image source={{ uri:imageUrl}} style={styles.profileImage} />
                  <Text>{user.pseudo}</Text>
                </>
              )}
            </View>
            <DrawerItemList {...props} />
            <DrawerItem label="Déconnexion" onPress={() => {}} style={{ display: 'none' }} />
            <LogoutButton {...props} />
          </DrawerContentScrollView>
        );
      }}>
      <Drawer.Screen name="Accueil" component={Home} />
      <Drawer.Screen name="Mon profil" component={MyProfile} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    padding: 20,
    backgroundColor: '#eee',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
});

export default DrawerNavigator;
