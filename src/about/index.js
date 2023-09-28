import {
  Alert,
  Image,
  ScrollView,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { AboutStyle } from "./styles";
import axios, { Axios } from "axios";
import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons";
export default function About({ route }) {
  const [posts, setPosts] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const { nome } = route.params;

  useEffect(() => {
    axios
      .get(`https://pensador.bytebraine.com/api/busca/${nome}`)
      .then(function (response) {
        setPosts(response.data.allFrases);
      })

      .catch(function (error) {
        console.error(error);
      })
      .finally(() => {
        setCarregando(false);
      });
  }, []);

  return (
    <View>
      {carregando ? (
        <ActivityIndicator />
      ) : (
        <ScrollView>
          {posts.map((item, index) => (
            <View key={index} style={AboutStyle.container}>
              <Text style={AboutStyle.texto}>{item.nome}</Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}
