import React, { useContext } from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { hostname } from '../../hostname/hostname';
import styles from './MyProfile.styles';


const MyProfile: React.FC = () => {
  const {user} = useContext(AuthContext);
  console.log(user);
  
  
  return (
    <SafeAreaView style={styles.screenContainer} >
      <View style={styles.mainContainer}>
       {user && (
         <>
          <View style={styles.viewImage}>
        <Image source={{ uri:`${hostname}/upload/${user.profileImage}`}} style={{width: '100%', height: '100%',objectFit:'contain'}} />
        </View>
        <View style={styles.viewName}>
          <Text style={styles.textName}> {user.firstName} {user.lastName}</Text>
        </View>
         </>
       )}
      </View>

    </SafeAreaView>
  );
};

export default MyProfile;
