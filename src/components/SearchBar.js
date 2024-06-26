import {TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useState} from 'react';
import styles from './SearchBar.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchBar = ({city}) => {
  const [search, setSearch] = useState('');

  const handleButton = () => {
    city(search);
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={search}
        onChangeText={text => setSearch(text)}
        style={styles.searchBar}
        placeholder="Enter city to search"
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleButton}>
        <Icon name="magnify" size={35} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
