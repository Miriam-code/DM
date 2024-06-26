import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

interface Styles {
  screenContainer: ViewStyle;
  mainContainer: ViewStyle;
  flatListContainer: ViewStyle;
  textStyleChannelName: TextStyle;
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
});
export default styles;
