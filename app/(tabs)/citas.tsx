import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CitasScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Citas</Text>
      <Text style={styles.text}>Bienvenido. Aquí irán las citas del consultorio.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:'#fff', padding:16 },
  title:{ fontSize:22, fontWeight:'700', marginBottom:8 },
  text:{ fontSize:16 },
});
