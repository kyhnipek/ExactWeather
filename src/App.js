import {
  Image,
  Text,
  View,
  SafeAreaView,
  RefreshControl,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './App.style';
import Geolocation from 'react-native-geolocation-service';
import SearchBar from './components/SearchBar';
import {getWeather, getWeatherByCity, getCity} from './FetchData';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import tr from './assets/tr.json';

const App = () => {
  const [latitude, setLatitude] = useState('40.39126785562374');
  const [longitude, setLongitude] = useState('27.850470906539105');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [state, setState] = useState();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getWeather(latitude, longitude)
      .then(response => {
        setData(response);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });

    const getLoc = () => {
      Geolocation.requestAuthorization('always');
      Geolocation.getCurrentPosition(
        position => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        error => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    };
    getLoc();
    getCity(latitude, longitude).then(response => setState(response));
    // getWeather();
  }, [latitude, longitude]);

  const getRandomLocation = () => {
    const randomInt = Math.floor(Math.random() * 256);
    const result = tr[randomInt];
    setLatitude(result.lat);
    setLongitude(result.lng);
  };

  const handleCity = dt => {
    getWeatherByCity(dt).then(response => {
      setData(response);
    });
  };

  const renderPage = () => {
    return (
      <ScrollView>
        <SearchBar city={handleCity} />
        <RefreshControl refreshing={refreshing} onRefresh={getRandomLocation} />
        <Text style={styles.city}>{data.name}</Text>
        <Text style={styles.state}>{state}</Text>
        <View style={styles.desContainer}>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://openweathermap.org/img/wn/' +
                data.weather[0].icon +
                '@2x.png',
            }}
          />
          <Text style={styles.description}>{data.weather[0].description}</Text>
          <Text style={styles.temp}>
            {data.main.temp.toString().split('.', 1)}˚C
          </Text>
        </View>

        <Text style={styles.feelsLike}>
          {data.main.temp_max}˚ / {data.main.temp_min}˚ Feels like{' '}
          {data.main.feels_like}˚
        </Text>
        <View style={styles.innerContainer}>
          <View style={styles.subContainers}>
            <Text style={styles.subTitle}>Wind</Text>
            <View style={styles.subDetailContainer}>
              <Icon
                name="arrow-up-thick"
                size={50}
                style={{transform: [{rotate: data.wind.deg + 'deg'}]}}
                color="white"
              />
              <Text style={styles.subDetailText}>{data.wind.speed} km/h</Text>
            </View>
          </View>
          <View style={styles.subContainers}>
            <Text style={styles.subTitle}>Humidity</Text>
            <View style={styles.subDetailContainer}>
              <Icon name="water" size={40} color="white" />
              <Text style={styles.subDetailText}> %{data.main.humidity}</Text>
            </View>
          </View>
          <View style={styles.subContainers}>
            <Text style={styles.subTitle}>Pressure</Text>
            <View style={styles.subDetailContainer}>
              <Icon name="arrow-collapse-vertical" size={40} color="white" />

              <Text style={styles.subDetailText}>{data.main.pressure} mb</Text>
            </View>
          </View>
        </View>
        <View style={styles.rainSnowContainer}>
          {data.rain ? (
            <View style={styles.subContainers}>
              <Text style={styles.subTitle}>Rain</Text>
              <View style={styles.subDetailContainer}>
                <Text style={styles.subDetailText}>
                  {data.rain['1h']} mm/1 hour
                </Text>
              </View>
            </View>
          ) : null}
          {data.snow ? (
            <View style={styles.subContainers}>
              <Text style={styles.subTitle}>Snow</Text>
              <View style={styles.subDetailContainer}>
                <Text style={styles.subDetailText}>
                  {data.snow['1h']} mm/1 hour
                </Text>
              </View>
            </View>
          ) : null}
        </View>
      </ScrollView>
    );
  };

  if (loading) {
    return <Text>Loading</Text>;
  } else {
    return <SafeAreaView style={styles.container}>{renderPage()}</SafeAreaView>;
  }
};

export default App;
