<<<<<<< HEAD
import {AntDesign, Entypo, EvilIcons, Feather, FontAwesome, Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons} from '@expo/vector-icons';
=======
import { useFonts } from 'expo-font';
>>>>>>> c533b0b (Menambahkan font dan update tampilan index)
import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

const stambukList = Array.from({ length: 165 }, (_, i) =>
  `1058411${String(i + 1).padStart(3, '0')}22`
);

const names = [
  "Andi Amalia", "Mariani", "Alia", "Rahmadana", "Reski Aditya",
  "Angga Saputra", "Dian Sarah", "Syifa Rahma", "Jessika", "Noni Jia"
];

export default function App() {
  const [fontsLoaded] = useFonts({
    // Font statis
    LatoItalic: require('../assets/fonts/Lato-Italic.ttf'),
    MontserratLight: require('../assets/fonts/Montserrat-Light.ttf'),
    OpenSansBold: require('../assets/fonts/OpenSans-Bold.ttf'),
    PoppinsSemiBold: require('../assets/fonts/Poppins-SemiBold.ttf'),
    RobotoRegular: require('../assets/fonts/Roboto-Regular.ttf'),
    // Font variabel
    InterVariable: require('../assets/fonts/Inter-VariableFont_opsz,wght.ttf'),
    MontserratVariable: require('../assets/fonts/Montserrat-VariableFont_wght.ttf'),
    NotoSansVariable: require('../assets/fonts/NotoSans-VariableFont_wdth,wght.ttf'),
    OpenSansVariable: require('../assets/fonts/OpenSans-VariableFont_wdth,wght.ttf'),
    RobotoVariable: require('../assets/fonts/Roboto-VariableFont_wdth,wght.ttf'),
  });

  if (!fontsLoaded) return null;

  const currentIndex = 173;
  const total = stambukList.length;

  const before = Array.from({ length: 5 }, (_, i) => {
    const idx = (currentIndex - i - 1 + total) % total;
    return {
      stambuk: stambukList[idx],
      name: names[idx % names.length],
    };
  }).reverse();

  const after = Array.from({ length: 5 }, (_, i) => {
    const idx = (currentIndex + i + 1) % total;
    return {
      stambuk: stambukList[idx],
      name: names[(idx + 5) % names.length],
    };
  });

  const combined = [...before, ...after];

  const fontFamilies = [
    'LatoItalic',
    'MontserratLight',
    'OpenSansBold',
    'PoppinsSemiBold',
    'RobotoRegular',
    'InterVariable',
    'MontserratVariable',
    'NotoSansVariable',
    'OpenSansVariable',
    'RobotoVariable',
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {combined.map((item, index) => (
        <Text
          key={item.stambuk}
          style={{
            fontFamily: fontFamilies[index % fontFamilies.length],
            fontSize: 20,
            marginBottom: 10,
          }}
        >
          {item.name} - {item.stambuk}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
