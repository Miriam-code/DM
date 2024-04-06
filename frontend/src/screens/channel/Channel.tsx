import React, { useEffect, useState, useContext } from "react";
import { Text, View, TextInput, ScrollView, TouchableOpacity, Image, Button, PermissionsAndroid, Linking } from "react-native";
import { useRoute } from "@react-navigation/native";
import io from "socket.io-client";
import styles from "./Channel.styles";
import fleche from '../../assets/icons/sendFleche.png';
import camera from '../../assets/icons/camera.png';
import { getAllMessages } from "../../api/message";
import { getOneChannel } from "../../api/channel";
import ImagePicker, { MediaType, CameraOptions, launchCamera } from 'react-native-image-picker';
import { AuthContext } from "../../context/AuthContext";
import { ToastAndroid } from "react-native";
import { hostname } from "../../hostname/hostname";

function Channel() {
  const route = useRoute()
  const { id } = route.params;
  const { user } = useContext(AuthContext);
  const userId = user._id;

  const fetchMessages = async () => {

    try {
      const { msg } = await getAllMessages(id);
      setMessages(msg);

    } catch (error) {
      console.error(error);
      ToastAndroid.show("Error fetching messages db ", ToastAndroid.SHORT)
    }
  };

  const [messages, setMessages] = useState([]);
  const [chatroom, setChatroom] = useState([])
  const [chatroomName, setChatroomName] = useState("")

  const [socket, setSocket] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const [cameraPhoto, setCameraPhoto] = useState();
  const openCamera = async () => {

    let options: CameraOptions = {
      saveToPhotos: true,
      mediaType: 'photo',

    };

    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {

        launchCamera(options, (result) => {
          if (!result.didCancel) {
            setCameraPhoto(result.assets[0].uri);
          }
        })
      } else {
        console.log('Permission denied', granted);
        Linking.openSettings();
      }
    } catch (error) {
      console.error('Error requesting camera permission:', error);
    }

  };
  const sendMessage = () => {
    if (socket) {
      socket.emit("chatroomMessage", {
        channelId: id,
        userId: userId,
        message: messageInput,
      });
      fetchMessages()
    }
    setMessageInput("");
    fetchMessages()
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { msg } = await getAllMessages(id);
        setMessages(msg);

      } catch (error) {
        console.error(error);
        ToastAndroid.show("Error fetching messages db ", ToastAndroid.SHORT)
      }
    };
    
  })

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { msg } = await getAllMessages(id);
        setMessages(msg);

      } catch (error) {
        console.error(error);
        ToastAndroid.show("Error fetching messages db ", ToastAndroid.SHORT)
      }
    };
    
    fetchMessages();
    
  }, [messages])

  useEffect(() => {

    const fectChannel = async () => {
      try {
        const { data } = await getOneChannel(id);
        setChatroom(data);
       
        if (data.channelName.startsWith("Channel ")) {
          setChatroomName("Private Channel");
        }else {
          setChatroomName(data.channelName)
        }
      } catch (error) {
        console.error(error);
        ToastAndroid.show("Error fetching channel info", ToastAndroid.SHORT);
      }
    };
    fectChannel()
  }, []);

  useEffect(() => {
    const setupSocket = () => {
      if (user) {
        const newSocket = io.connect(`${hostname}`, {
          query: {
            userId: userId,
          },
        });

        newSocket.on("disconnect", () => {
          setSocket(null);
          setTimeout(setupSocket, 3000);
          ToastAndroid.show("Error,Socket Disconnected!", ToastAndroid.SHORT)
          console.log("decooooo");
        });

        newSocket.on("connect", () => {
          ToastAndroid.show("Socket Connected!", ToastAndroid.SHORT)
        });

        setSocket(newSocket);

      }
    };
    setupSocket();

  }, []);

  useEffect(() => {

    if (socket) {

      socket.on("newMessage", (message) => {
        const newMessages = [...messages, message];
        setMessages(newMessages);
      });

      socket.emit("joinRoom", {
        channelId: id,
      });
      console.log("join room");

      return () => {
        if (socket) {
          socket.emit("leaveRoom", {
            channelId: id,
          });
          console.log("leave room");
        }
      };
    }

  }, [socket, id]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>{chatroomName}</Text>
      </View>
      <ScrollView style={styles.Container}>
        {messages.length > 0 ? (
          messages.map((message, i) => (
            <View key={i} style={userId === message.userId ? styles.ownMessage : styles.otherMessage}>
              <Text style={userId === message.userId ? styles.messageUserName : styles.otherUserName}>{message.userName}:</Text>
              <Text style={styles.messageText}>{message.content}</Text>
            </View>
          ))
        ) : (
            <View style={styles.messageContainer}>
              <Text style={styles.noMessagesText}>No messages</Text>
            </View>
          )}
        <View>
          {cameraPhoto && <Image source={{ uri: cameraPhoto }} />}
        </View>
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={`Say something ${user.pseudo}!`}
          onChangeText={(text) => setMessageInput(text)}
          value={messageInput}
        />
        <TouchableOpacity onPress={sendMessage} style={styles.button}>
          <Image source={fleche} alt="fleche" style={{ width: 25, height: 25, marginRight: 10 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={openCamera} style={styles.button}>
          <Image source={camera} alt="fleche" style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Channel;
