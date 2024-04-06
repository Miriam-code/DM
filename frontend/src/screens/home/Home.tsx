import React, { useEffect, useState, useContext } from "react";
import { View, Text, TextInput, Button, FlatList,SafeAreaView, Pressable, Alert, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import styles from './Home.styles';
import { ToastAndroid } from "react-native";
import { createChannelAPI , getAll} from '../../api/channel.ts'


const Home: React.FC = () => {

  const [channelsList, setChannelsList] = useState(null);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
 
  const createChannel = async (values) => {

    try {

      const channelName = values.name
      const res = await createChannelAPI(channelName)
      if (res.ok){
      ToastAndroid.show(`${res.message}`, ToastAndroid.SHORT)
      navigation.navigate('Channel',{id: res.newChannel._id}); 
      throw res;  
      } 

    } catch (e) {
      console.error(e);
      ToastAndroid.show("Error creating Channel", ToastAndroid.SHORT)
    }
  };

  useEffect(() => {
    const fetchChatrooms = async () => {

      try {
        const {data } = await getAll()
        setChannelsList(data);

      } catch (error) {
        console.error(error);
        ToastAndroid.show("Error fetching channel", ToastAndroid.SHORT)
      }
    };
    fetchChatrooms();
  }, []);

  return (

    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.titleTextStyle}>ALL CHANNELS</Text>
        </View>
        <FlatList
          data={channelsList}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={styles.textInputContainer}>
              <Text>{item.channelName}</Text>
              <Button
                title="JOIN ➔"
                onPress={() =>
                  navigation.navigate("Channel", { id: item._id })
                }
              />
            </View>
          )}
        />
        <View style={styles.bottomContainer}>
      <View style={styles.centeredView}>
      <Pressable
        style={[styles.button]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.signInButtonTextStyle}>+</Text>
      </Pressable>
    </View>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>New Channel</Text>
            <Formik initialValues={{ name: "" }} onSubmit={createChannel}>
              {({ handleChange, handleSubmit, values }) => (
                <View style={styles.textInputContainer}>
                  <TextInput
                    onChangeText={handleChange("name")}
                    value={values.name}
                    placeholder="Enter Channel name"
                    style={styles.textInputStyle}
                  />
                  <Pressable
                    style={ styles.signInButtonStyle}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.textStyle}>Créer la Channel</Text>
                  </Pressable>
                </View>
              )}
            </Formik>
          </View>
        </View>
      </Modal>

        </View>
  
      </View>
    </SafeAreaView>
      
  );
 
};

export default Home;
