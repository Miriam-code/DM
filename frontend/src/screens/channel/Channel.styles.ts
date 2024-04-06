import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

interface Styles {
  header: ViewStyle;
  title: TextStyle;
  messageContainer: ViewStyle;
  messageUserName: TextStyle;
  messageText: TextStyle;
  noMessagesText: TextStyle;
  inputContainer: ViewStyle;
  input: ViewStyle;
  sendButton: ViewStyle;
  sendButtonText: TextStyle;
  textInputContainer: ViewStyle;
  textInputStyle: TextStyle;
  mainContainer: ViewStyle;
  Container: ViewStyle;
  button: ViewStyle;
  ownMessage: ViewStyle;
  otherMessage: ViewStyle;
  otherUserName: TextStyle;
}

const styles: Styles = StyleSheet.create<Styles>({
  button: {
    marginBottom: 30,
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  Container: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  messageContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  messageUserName: {
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#007bff',
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  noMessagesText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
    marginBottom: 30,
  },
  textInputContainer: {
    marginTop: '5%',
    justifyContent: 'center',
    width: '80%',
    marginBottom: 10,
  },
  textInputStyle: {
    height: 60,
    marginBottom: 8,
    fontSize: 16,
    paddingLeft: 32,
    backgroundColor: '#262A34',
    color: '#4c5dec',
    borderRadius: 20,
  },
  sendButton: {
    backgroundColor: '#4c5dec',
    padding: 10,
    borderRadius: 20,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16,
    margin: 10,
    marginBottom: 0,
  },
  ownMessage: {
    flexDirection: 'row',
  },
  otherMessage: {
    flexDirection: 'row',

    alignSelf: 'flex-end',
  },
  otherUserName: {
    ali: 'flex-end',
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#27ae60',
    alignItems: 'flex-end',
  },
});

export default styles;
