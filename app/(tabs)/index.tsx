import {AntDesign, Entypo, EvilIcons, Feather, FontAwesome, Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons} from '@expo/vector-icons';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function IconScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Ikon Transportasi</Text>
      <View style={styles.iconGrid}>
        <Ionicons name="bus" size={40} color="#1abc9c" />
        <FontAwesome name="car" size={40} color="#e84393" />
        <MaterialIcons name="flight" size={40} color="#00cec9" />
        <Feather name="truck" size={40} color="#fdcb6e" />
        <Entypo name="aircraft" size={40} color="#e17055" />
        <AntDesign name="car" size={40} color="#6c5ce7" />
        <MaterialCommunityIcons name="train" size={40} color="#2d3436" />
        <Octicons name="rocket" size={40} color="#fab1a0" />
        <EvilIcons name="navicon" size={50} color="#d63031" />
        <Foundation name="safety-cone" size={40} color="#0984e3" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#ADD8E6', // biru muda
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  iconGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
    rowGap: 30,
  },
});
