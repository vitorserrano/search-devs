import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";

import logoImg from "../../assets/logo.png";

export default function Follower() {
  const navigation = useNavigation();
  const route = useRoute();

  const { followers } = route.params;

  function navigatieBack() {
    navigation.goBack();
  }

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

        <Text style={styles.routeText}>/Seguidores</Text>
      </View>

      <Text style={styles.total}>{`Total de seguidores: ${followers.length}`}</Text>

      <FlatList
        data={followers}
        keyExtractor={(followers) => String(followers.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: follower }) => (
          <View style={styles.list}>
            <Image 
                style={{
                    width: 50,
                    height: 50, 
                    borderRadius: 25
                }}
                source={{ uri: follower.avatar_url }}
            />
            <Text style={styles.listUser}>{follower.login}</Text>
          </View>
        )}
      />

    </View>
  );
}
