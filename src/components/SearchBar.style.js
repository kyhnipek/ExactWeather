import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fdfdfdd8',
  },
  searchBar: {
    flex: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
    borderColor: 'white',
    width: '75%',
    height: '80%',
  },
  searchIcon: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
});

export default styles;
