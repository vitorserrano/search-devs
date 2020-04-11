import React, { useState } from "react";
import { 
  View, 
  Text, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  ActivityIndicator, 
  KeyboardAvoidingView 
} from "react-native";

import styles from "./styles";
import logoImg from "../../assets/logo.png";
import searchImg from "../../assets/search.png";

import api from '../services/api';

export default function Home({ navigation }) {
  const [devs, setDevs] = useState("");
  const [loading, setLoading] = useState(false);

  const submitDevs = async () => {
    setLoading(true);

    try {
      const response = await api.get(`/users/${devs}`);
      navigation.navigate('Detail', { devs: response.data });
    } catch (error) { 
      alert("Usuário não encontrado");
    }
    
    setLoading(false);
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>

      <View style={styles.header}>
        <View style={styles.logoContent}>
          <Image style={styles.logoImg} source={logoImg} />
          <Text style={styles.logoText}>Search</Text>
          <Text style={styles.logoTextBold}>Devs</Text>
        </View>
        <View>
          <Text style={styles.route}>Home</Text>
        </View>
      </View>

      <View style={styles.description}>
        <Text styles={styles.title}></Text>
      </View>

      <View style={styles.main}>
        <Image style={styles.searchImg} source={searchImg} />

        <TextInput 
          style={styles.input} 
          value={devs}
          onChangeText={setDevs}
          placeholder="Nome de usuário" 
        />

        <TouchableOpacity
          style={styles.touchableOpacity}
          disabled={loading}
          onPress={() => {
            submitDevs();
          }}
        >
          {!loading && <Text style={styles.touchableOpacityText}>Pesquisar</Text>}
          {loading && <ActivityIndicator color="#fff" />}
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  );
}
