import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";

import { Feather } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import logoImg from "../../assets/logo.png";
import searchImg from "../../assets/search.png";

import api from "../../services/api";

export default function Home() {
  const navigation = useNavigation();

  const [devs, setDevs] = useState("");
  const [loading, setLoading] = useState(false);

  const submitDevs = async () => {
    setLoading(true);

    try {
      const response = await api.get(`/users/${devs}`);
      navigation.navigate("Detail", { devs: response.data });
    } catch (error) {
      alert("Usuário não encontrado");
    }

    setLoading(false);
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backIcon}>
          <TouchableOpacity
            style={styles.backTouchableOpacity}
          >
            <Feather name="terminal" size={28} color="#F50057" />
          </TouchableOpacity>
        </View>

        <View style={styles.logoContent}>
          <Image style={styles.logoImg} source={logoImg} />
          <Text style={styles.logoText}>Search</Text>
          <Text style={styles.logoTextBold}>Devs</Text>
        </View>

        <Text style={styles.routeText}>/Home</Text>
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
          {!loading && (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather name="github" size={16} color="#fff" />
              <Text style={styles.touchableOpacityText}>Pesquisar</Text>
            </View>
          )}
          {loading && <ActivityIndicator color="#fff" />}
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
