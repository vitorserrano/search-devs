import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";

import api from "../../services/api";

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const { devs } = route.params;

  function navigatieBack() {
    navigation.goBack();
  }

  const submitRepositories = async () => {
    try {
      const response = await api.get(`/users/${devs.login}/repos`);
      navigation.navigate("Repositorie", { repositories: response.data });
    } catch (error) {
      alert("Não foi possível encontrar os repositórios");
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

  const submitFollowers = async () => {
    try {
      const response = await api.get(`/users/${devs.login}/followers`);
      navigation.navigate("Follower", { followers: response.data });
    } catch (error) {
      alert("Não foi possível encontrar os seguidores");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backTouchableOpacity}
          onPress={navigatieBack}
        >
          <Feather name="arrow-left" size={28} color="#0061ff" />
        </TouchableOpacity>
        <Text style={styles.descriptionHeader}>{devs.login}</Text>
      </View>

      <View style={styles.main}>
        <View style={styles.user}>
          <Image
            style={{
              width: 80,
              height: 80,
              borderRadius: 100,
              borderWidth: 5,
              borderColor: "#f0f0f5",
              marginRight: 20,
            }}
            source={{ uri: devs.avatar_url }}
          ></Image>

          <View>
            <Text style={styles.devsName}>{devs.name}</Text>
            <Text style={styles.devsUser}>{devs.login}</Text>
          </View>
        </View>

        <Text style={styles.devsBio}>{devs.bio}</Text>

        <View style={styles.devsIconContent}>
          {devs.company && <Feather name="users" size={18} color="#0061ff" />}
          <Text style={styles.devsIconText}>{devs.company}</Text>
        </View>

        <View style={styles.devsIconContent}>
          {devs.location && (
            <Feather name="map-pin" size={18} color="#0061ff" />
          )}
          <Text style={styles.devsIconText}>{devs.location}</Text>
        </View>

        <View style={styles.devsIconContent}>
          {devs.blog && <Feather name="link" size={18} color="#0061ff" />}
          <Text style={styles.devsIconText}>{devs.blog}</Text>
        </View>

        <View style={styles.devsIconContent}>
          {devs.followers && <Feather name="user" size={18} color="#0061ff" />}
          <Text
            style={styles.devsIconText}
          >{`${devs.followers} seguidores`}</Text>

          {devs.following && (
            <Feather name="user-check" size={18} color="#0061ff" />
          )}
          <Text
            style={styles.devsIconText}
          >{`${devs.following} seguindo`}</Text>
        </View>
      </View>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            submitRepositories();
          }}
        >
          <Feather name="folder" size={20} color="#0061ff" />
          <Text style={styles.buttonText}>Repositórios</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            submitStars();
          }}
        >
          <Feather name="star" size={20} color="#0061ff" />
          <Text style={styles.buttonText}>Estrelas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            submitFollowers();
          }}
        >
          <Feather name="user" size={20} color="#0061ff" />
          <Text style={styles.buttonText}>Seguidores</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
