import React from 'react';
import { Image, ScrollView, StyleSheet, Text } from 'react-native';

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Universitas Muhammadiyah Makassar</Text>
      <Text style={styles.location}>Lokasi: Makassar, Sulawesi Selatan, Indonesia</Text>
      <Text style={styles.description}>
        Universitas Muhammadiyah Makassar (Unismuh Makassar) adalah salah satu perguruan tinggi swasta terkemuka di
        Makassar yang bergerak dalam bidang pendidikan, pengajaran, penelitian dan pengabdian masyarakat.
      </Text>
      <Image
        source={require('../../assets/images/foto2.jpg')}
        style={styles.image}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel="Gambar gedung Universitas Muhammadiyah Makassar"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  location: {
    fontSize: 16,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    marginBottom: 16,
    lineHeight: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
});
