import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const navigation = useNavigation(); 

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.publicapis.org/entries');
      const { entries } = await response.json();
      // Transform data to create pairs of entries
      const pairedData = [];
      for (let i = 0; i < entries.length; i += 2) {
        if (i + 1 < entries.length) {
          pairedData.push([entries[i], entries[i + 1]]);
        } else {
          pairedData.push([entries[i]]);
        }
      }
      setData(pairedData);
      setLoading(false); 
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); 
    }
  };

  const renderItem = ({ item }) => (
    
    <View style={styles.rowContainer}>
      {item[0] && (
        <TouchableOpacity style={styles.columnItem} onPress={() => navigateToDetails(item[0])}>
        <View>
          <Text style={styles.title}>{item[0].API}</Text>
          <Text>{item[0].Description}</Text>
        </View>
        </TouchableOpacity>
      )}
      {item[1] && (
        <TouchableOpacity style={styles.columnItem} onPress={() => navigateToDetails(item[1])}>
        <View>
          <Text style={styles.title}>{item[1].API}</Text>
          <Text>{item[1].Description}</Text>
        </View>
        </TouchableOpacity>
      )}
    </View>
   
    
  );

  const navigateToDetails = (item) => {
    navigation.navigate('Details' , {item});
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" /> // Display loading indicator while fetching data
      ) : (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
      />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  list: {
    width: '100%',
  },
  columnItem: {
    flex: 1,
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default Home;
