import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from './Messages.styles';

const Messages: React.FC = () => {
  
  const [isListVisible, setListVisible] = useState<boolean>(false);

  const toggleListVisibility = () => {
    setListVisible(!isListVisible);
  };

  const handleOutsidePress = () => {
    if (isListVisible) {
      setListVisible(false);
    }
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <TouchableWithoutFeedback onPress={handleOutsidePress}>
        <View style={styles.mainContainer}>
          <SearchBar showList={isListVisible} toggleListVisibility={toggleListVisibility} />
          <Text>messages</Text>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Messages;
