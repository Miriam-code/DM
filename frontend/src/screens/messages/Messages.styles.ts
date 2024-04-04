import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

interface Styles {
  screenContainer: ViewStyle;
  mainContainer: ViewStyle;

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

});
export default styles;
