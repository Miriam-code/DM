import React, { useEffect, useState, useContext } from 'react';
import { View, Text, SafeAreaView, TouchableWithoutFeedback , ScrollView , TouchableOpacity} from 'react-native';
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from './Messages.styles';
import { ToastAndroid } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { getPrivateChannels } from '../../api/channel';
import { useNavigation } from "@react-navigation/native";

const Messages: React.FC = () => {

  const navigation = useNavigation();
  const [isListVisible, setListVisible] = useState<boolean>(false);
  const [channels , setChannels] = useState([]);
  const { user } = useContext(AuthContext);
  const [friend, setFriend] = useState({});
  const userId = user._id;
  const [friendId , setFriendId] = useState('');

  const toggleListVisibility = () => {
    setListVisible(!isListVisible);
  };

  const handleOutsidePress = () => {
    if (isListVisible) {
      setListVisible(false);
    }
  };

  useEffect(() => {
    const fetchPrivateChannel = async () => {
      try {
        const { data } = await getPrivateChannels(userId);
        console.log('front channels',data)
        setChannels(data);

      } catch (error) {
        console.error(error);
        ToastAndroid.show("Error fetching messages db ", ToastAndroid.SHORT)
      }
    };
    fetchPrivateChannel()
  },[])

  return (
    <SafeAreaView style={styles.screenContainer}>
      <TouchableWithoutFeedback onPress={handleOutsidePress}>
        <View style={styles.mainContainer}>
          <SearchBar showList={isListVisible} toggleListVisibility={toggleListVisibility} />
          <ScrollView style={styles.flatListContainer}>
        {channels.length > 0 ? (
          channels.map((channel, i) => (
            <View key={i} >
          
              <TouchableOpacity onPress={() => navigation.navigate('Channel', {id: channel._id})}>
              <Text style={styles.textStyleChannelName}>{channel.channelName}</Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
            <View >
              <Text style={{color: 'white', fontSize:16}}>No messages</Text>
            </View>
          )}
        
      </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Messages;
