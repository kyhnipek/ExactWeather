import {Dimensions, StyleSheet} from 'react-native';

const dim = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c2c93',
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 5,
  },
  desContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  subContainers: {
    marginTop: 30,
    margin: 5,
    borderWidth: 1,
    borderColor: '#fdfdfdd8',
    borderRadius: 20,
    width: dim.width / 3 - 10,
    height: dim.width / 3 - 10,
  },

  subDetailContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subTitle: {
    padding: 5,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },

  city: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 25,
    alignSelf: 'center',
    color: 'white',
  },
  state: {
    fontWeight: '400',
    fontSize: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: '',
    borderRadius: 100,
  },

  temp: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 80,
    color: 'white',
  },
  description: {
    fontWeight: '500',
    fontSize: 15,
    color: 'white',
  },
  feelsLike: {
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: 15,
    color: 'white',
  },

  subDetailText: {
    fontWeight: '500',
    fontSize: 15,
    color: 'white',
  },
});

export default styles;
