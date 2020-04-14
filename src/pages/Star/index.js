import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";

import logoImg from "../../assets/logo.png";

export default function Follower() {
  const navigation = useNavigation();
  const route = useRoute();

  const { stars } = route.params;

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

        <Text style={styles.routeText}>/Estrelas</Text>
      </View>

      <Text style={styles.total}>{`Total de estrelas: ${stars.length}`}</Text>

      <FlatList
        data={stars}
        keyExtractor={(stars) => String(stars.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: star }) => (
          <View style={styles.list}>
            <View style={styles.title}>
                <Text style={styles.titleText}>{star.owner.login}</Text>
                <Text style={styles.titleTextBold}>{` / ${star.name}`}</Text>
            </View>

            <Text style={styles.description}>{star.description}</Text>
            <View style={styles.items}>

                <View style={styles.itemsContent}>
                    <Feather name="circle" size={14}/>
                    
                    <Text style={styles.itemsText}>
                        {star.language}
                    </Text>
                </View>

                <View style={styles.itemsContent}>
                    <Feather name="star" size={14}/>
                    
                    <Text style={styles.itemsText}>
                        {star.stargazers_count}
                    </Text>
                </View>

                <View style={styles.itemsContent}>
                    <AntDesign name="fork" size={16}/>
                    
                    <Text style={styles.itemsText}>
                        {star.forks}
                    </Text>
                </View>
            </View>
          </View>
        )}
      />

    </View>
  );
}
