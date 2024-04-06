import React, { useState, useEffect, useContext } from 'react';
import { View, TextInput, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import styles from './SearchBar.styles';
import { getAllUsers } from '../../api/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { hostname } from '../../hostname/hostname';
import send from '../../assets/icons/send.png';
import { AuthContext } from "../../context/AuthContext";
import { ToastAndroid } from "react-native";
import { createPrivate } from '../../api/channel';

interface SearchBarProps {
  showList: boolean;
  toggleListVisibility: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ showList, toggleListVisibility }) => {
  const [users, setUsers] = useState<any[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userToken = await AsyncStorage.getItem('userToken');
        if (userToken) {
          const fetchedUsers = await getAllUsers(userToken);
          setUsers(fetchedUsers);
          setFilteredUsers(fetchedUsers);
        } else {
          console.error('Pas de token utilisateur trouvé.');
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des utilisateurs :", error);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = users.filter(user => user.pseudo.toLowerCase().includes(query.toLowerCase()));
    setFilteredUsers(filtered);
  };

  const createPrivateChannel = async (friendId: string) => {
    const user1Id = user._id;
    const user2Id = friendId;
  
    try {
      const newChannel = await createPrivate(user1Id, user2Id);
  
      if (newChannel.ok === true) {
        ToastAndroid.show(`${newChannel.message}`, ToastAndroid.SHORT);
        console.log('Création réussie ! ', newChannel.channel._id);
        navigation.navigate('Channel', { id: newChannel.channel._id });
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        const errorMessage = "Un canal privé existe déjà entre ces utilisateurs";
        setError(errorMessage);
        ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
      } else {
        const errorMessage = "Erreur lors de la création du canal privé";
        setError(errorMessage);
        ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
        console.error("Erreur lors de la création du canal privé:", error);
      }
    }
  }
  
  

  return (
    <View style={styles.textInputContainer}>
      <TextInput
        placeholder="Rechercher par pseudo"
        placeholderTextColor="#6C6D72"
        style={styles.textInputStyle}
        value={searchQuery}
        onChangeText={handleSearch}
        onFocus={toggleListVisibility}
      />
      {showList && (
        <ScrollView style={styles.scrollViewContainer}>
          {filteredUsers.map((item, index) => (
            <TouchableOpacity key={index} onPress={toggleListVisibility}>
              <View style={styles.flatListItemContainer}>
                <Image style={styles.flatListImageStyle} source={{ uri: `${hostname}/upload/${item.profileImage}` }} />
                <Text style={styles.flatListTextStyle}>{item.pseudo}</Text>
                <TouchableOpacity onPress={() => createPrivateChannel(item._id)}>
                  <Image source={send} style={{ width: 25, height: 25 }} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default SearchBar;
