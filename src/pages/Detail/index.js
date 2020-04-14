import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
  
import styles from "./styles";

import logoImg from "../../assets/logo.png";

import api from "../../services/api";

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const { devs } = route.params;

  function navigatieBack() {
    navigation.goBack();
  }

  const submitFollowers = async () => {
    try {
      const response = await api.get(`/users/${devs.login}/followers`);
      navigation.navigate("Follower", { followers: response.data });
    } catch (error) {
      alert("Não foi possível encontrar os seguidores");
    }
  };

  const submitStars = async () => {
    try {
      const response = await api.get(`/users/${devs.login}/starred`);
      navigation.navigate("Star", { stars: response.data });
    } catch (error) {
      alert("Não foi possível encontrar os repositórios com estrelas");
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.backIcon}>
          <TouchableOpacity
            style={styles.backTouchableOpacity}
            onPress={navigatieBack}
          >
            <Feather name="arrow-left" size={28} color="#F50057" />
          </TouchableOpacity>
        </View>

        <View style={styles.logoContent}>
          <Image style={styles.logoImg} source={logoImg} />
          <Text style={styles.logoText}>Search</Text>
          <Text style={styles.logoTextBold}>Devs</Text>
        </View>

        <Text style={styles.routeText}>/Detalhes</Text>
      </View>

      <View style={styles.main}>
        
        <View style={styles.user}>
          <Image 
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              borderWidth: 5,
              borderColor: '#f0f0f5',
              marginRight: 20,
            }} 
          source={{ uri: devs.avatar_url }}></Image>

          <View>
            <Text style={styles.devsName}>{devs.name}</Text>
            <Text style={styles.devsUser}>{devs.login}</Text>

            <View style={styles.devsIconContent}>
              {devs.company && (
                <Feather name="users" size={20} color="#F50057" />
              )}
              <Text style={styles.devsIconText}>{devs.company}</Text>
            </View>

            <View style={styles.devsIconContent}>
              {devs.location && (
                <Feather name="map-pin" size={20} color="#F50057" />
              )}
              <Text style={styles.devsIconText}>{devs.location}</Text>
            </View>
          </View>
        </View>
        
        <Text style={styles.devsBio}>{devs.bio}</Text>
      </View>

      <View style={styles.buttonsGroup}>
        <View style={styles.buttonContent}>
          <TouchableOpacity
              style={styles.buttonCirle}
              onPress={() => {
                submitFollowers();
              }}
            >
              <Text style={styles.touchableOpacityText}>
                <Feather name="folder" size={28} color="#F50057"/>
              </Text>
          </TouchableOpacity>   
          <Text style={styles.buttonInfo}>Repositórios</Text>
        </View>

        <View style={styles.buttonContent}>
          <TouchableOpacity
              style={styles.buttonCirle}
              onPress={() => {
                submitStars();
              }}
            >
              <Text style={styles.touchableOpacityText}>
                <Feather name="star" size={28} color="#F50057"/>
              </Text>
          </TouchableOpacity> 
          <Text style={styles.buttonInfo}>Estrelas</Text>
        </View>

        <View style={styles.buttonContent}>
          <TouchableOpacity
              style={styles.buttonCirle}
              onPress={() => {
                submitFollowers();
              }}
            >
              <Text style={styles.touchableOpacityText}>
                <Feather name="user" size={28} color="#F50057"/>
              </Text>
          </TouchableOpacity>          
          <Text style={styles.buttonInfo}>Seguidores</Text>
        </View>
      </View>

    </View>
  );
}
