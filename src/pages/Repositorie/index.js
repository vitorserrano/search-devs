import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";

export default function Follower() {
  const navigation = useNavigation();
  const route = useRoute();

  const { repositories } = route.params;

  function navigatieBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backTouchableOpacity}
          onPress={navigatieBack}
        >
          <Feather name="arrow-left" size={28} color="#0061ff" />
        </TouchableOpacity>
        <Text style={styles.descriptionHeader}>Repositórios</Text>
      </View>

      <Text style={styles.total}>{`Total de repositórios: ${repositories.length}`}</Text>

      <FlatList
        data={repositories}
        keyExtractor={(repositories) => String(repositories.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: repositorie }) => (
          <View style={styles.list}>
            <View>
              <View style={styles.author}>
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    borderRadius: 15,
                  }}
                  source={{ uri: repositorie.owner.avatar_url }}
                />
                <Text style={styles.authorText}>{repositorie.owner.login}</Text>
              </View>
              <Text style={styles.name}>{repositorie.name}</Text>
            </View>

            <Text style={styles.description}>{repositorie.description}</Text>
            <View style={styles.items}>
              <View style={styles.itemsContent}>
                {repositorie.language && ( <Feather name="circle" size={14} /> )}

                {repositorie.language && (
                  <Text style={styles.itemsText}>{repositorie.language}</Text>
                )}
              </View>

              <View style={styles.itemsContent}>
                <Feather name="star" size={14} />

                <Text style={styles.itemsText}>{repositorie.stargazers_count}</Text>
              </View>

              <View style={styles.itemsContent}>
                <AntDesign name="fork" size={16} />
                <Text style={styles.itemsText}>{repositorie.forks}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}
