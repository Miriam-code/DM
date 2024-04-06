import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Styles {
  screenContainer: ViewStyle;
  mainContainer: ViewStyle;
  headerContainer: ViewStyle;
  titleTextStyle: TextStyle;
  textInputContainer: ViewStyle;
  textInputStyle: TextStyle;
  bottomContainer: ViewStyle;
  buttonStyle: ViewStyle;
  centeredView: ViewStyle;
  modalView: ViewStyle;
  buttonOpen: ViewStyle;
  buttonClose: ViewStyle;
  textStyle: TextStyle;
  modalText: TextStyle;
  signInButtonStyle: ViewStyle;
  signInButtonTextStyle: TextStyle;
  button: TextStyle;
  buttonPressed: ViewStyle;
  buttonText: TextStyle;
  buttonTextPressed: TextStyle;
  modalOverlay: ViewStyle;
  flatListContainer: ViewStyle;
  textStyleChannelName: TextStyle;
  joinButtonStyle: ViewStyle;
}

const styles: Styles = StyleSheet.create<Styles>({
  signInButtonStyle: {
    marginTop: 24,
    backgroundColor: '#4c5dec',
    width: '100%',
    height: 60,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInButtonTextStyle: {
    color: 'white',
    fontWeight: '600',
  },
  screenContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#181A1F',
  },
  mainContainer: {
    width: '100%',
    alignItems: 'center',
    flex: 3,
    marginTop: '15%',
    justifyContent: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleTextStyle: {
    fontSize: 23,
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'Noto Sans',
  },
  textInputContainer: {
    flexDirection: 'row',
    marginTop: '5%',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 10,
    alignItems: 'center',
    
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
  bottomContainer: {
    flex: 0.3,
    padding: 10,
  },
  buttonStyle: {
    backgroundColor: "#703efe",
    padding: 12,
    width: "100%",
    elevation: 1,
    borderRadius: 50,
  },
  
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  centeredView: {
  },
  modalView: {
    margin: 40,
    backgroundColor: '#31363F',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    
  },
  buttonOpen: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color:'white',
  },
  button: {
    backgroundColor: '#4c5dec',
    color: 'white',
    borderRadius: 8,
    width: 100,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'background-color .3s',
  },
  buttonPressed: {
    backgroundColor: '#3b82f6', 
    shadowColor: '#3b82f65f',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#3b82f6',
    fontWeight: 'bold',
  },
  buttonTextPressed: {
    color: '#fff', 
  },
  modalOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0,0, 0.80)',
  },
  flatListContainer: {
    width: '90%',
    height: '50%',
    alignSelf: 'center',
  },
  textStyleChannelName: {
    color: '#fff',
    padding:2,
    marginHorizontal: 5,
    fontSize: 16,
  },
  joinButtonStyle: {
    backgroundColor: '#4c5dec',
    padding:10,
    width:80
  }

});

export default styles;

