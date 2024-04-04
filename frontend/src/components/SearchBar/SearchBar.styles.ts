import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';

interface Styles {
  textInputContainer: ViewStyle;
  textInputStyle: TextStyle;
  flatListContainer: ViewStyle;
  flatListItemContainer: ViewStyle;
  flatListTextStyle: TextStyle;
  flatListImageStyle: ImageStyle;
  scrollViewContainer: ViewStyle;

}

const styles: Styles = StyleSheet.create<Styles>({
  textInputContainer: {
    marginTop: '3%',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  textInputStyle: {
    width: '90%',
    height: 60,
    marginBottom: 8,
    fontSize: 16,
    paddingLeft: 32,
    backgroundColor: '#262A34',
    color: '#fff',
    borderRadius: 20,
  },
  flatListContainer: {
    marginTop:'-1%',
    backgroundColor: '#262A34',
    width: '80%',
  },
  flatListItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 2,
  },
  flatListTextStyle: {
    fontSize: 16,
    color: '#fff',
    padding: 10,
  },
  flatListImageStyle: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  scrollViewContainer: {
    marginTop: '-1%',
    width: '80%',
    height:200,
    backgroundColor: '#262A34',
  }


});
export default styles;
