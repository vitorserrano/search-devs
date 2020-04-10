import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";

import logoImg from "../../assets/logo.png";

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const { devs } = route.params;

  function navigatieBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.logoContent}>
          <Image style={styles.logoImg} source={logoImg} />
          <Text style={styles.logoText}>Search</Text>
          <Text style={styles.logoTextBold}>Devs</Text>
        </View>

        <View style={styles.routeContent}>
          <TouchableOpacity style={styles.routeTouchableOpacity} onPress={navigatieBack}>
            <Feather name="arrow-left" size={28} color="#F50057" />
            <Text style={styles.routeText}>Detalhes</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.main}>
        <Image style={styles.devImg} source={{uri: devs.avatar_url }}></Image>
        
        <Text style={styles.devsName}>{devs.name}</Text>    
        <Text style={styles.devsUser}>{devs.login}</Text>
        <Text style={styles.devsBio}>{devs.bio}</Text>    

        <View style={styles.devsLocationContent}>
          {devs.location && <Feather name="map-pin" size={20} color="#F50057" />}
          <Text style={styles.devsLocationText}>{devs.location}</Text>
        </View>
      </View>

    </View>
  );
}
