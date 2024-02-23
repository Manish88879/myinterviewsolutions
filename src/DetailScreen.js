// DetailsScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { item } = route.params;
  console.log("Item" , item.Link);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , padding: 10 }}>
      <Text style ={styles.titleStyle}>{item.API}</Text>
      <Text style ={styles.descStyle}>{item.Description}</Text>
      <View style={styles.rowStyle}>
      <Text style={styles.otherTextStyle}>Link : </Text>
      <Text style={styles.otherTextStyle}>{item.Link}</Text>
      </View>
      <View style={styles.rowStyle}>
      <Text style={styles.otherTextStyle}>Category : </Text>
      <Text style={styles.otherTextStyle}>{item.Category}</Text>
      </View>
      <View style={styles.rowStyle}>
      <Text style={styles.otherTextStyle}>Cors : </Text>
      <Text style={styles.otherTextStyle}>{item.Cors}</Text>
      </View>
      <View style={styles.rowStyle}>
      <Text style={styles.otherTextStyle}>Http : </Text>
      <Text style={styles.otherTextStyle}>{item.HTTPS}</Text>
      </View>
      {/* Add more details here */}
    </View>
  );
};

const styles =  StyleSheet.create({
    titleStyle:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 23
    },
    descStyle:{
        color: 'grey',
        fontWeight: '500',
        fontSize: 18,
        textAlign: 'center'
    },
    otherTextStyle:{
        color: 'grey',
        fontWeight: '500',
        fontSize: 13,
        textAlign: 'center'
    },
    rowStyle:{
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default DetailsScreen;
