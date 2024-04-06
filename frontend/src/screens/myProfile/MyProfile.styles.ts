import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';

interface Styles {
  screenContainer: ViewStyle;
  mainContainer: ViewStyle;
  viewImage: ViewStyle;
  textName: TextStyle;
  viewName : ViewStyle;

}

const styles: Styles = StyleSheet.create<Styles>({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    backgroundColor: '#181A1F',
    width: '100%',
    alignItems: 'center',
    flex: 1,
  },
  viewImage: {
    width:'100%',
    height: '30%'
  },
  textName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  viewName : {
    width:'100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
export default styles;
