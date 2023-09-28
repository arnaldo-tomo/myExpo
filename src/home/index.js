import {
  FlatList,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { HomeStyle } from "./styles";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function HomeScreen({ navigation }) {
  const mandar = (nome) => {
    console.log(nome);
    navigation.navigate("About", { nome });
  };

  const [posts, setPosts] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    axios
      .get("https://pensador.bytebraine.com/api/Categoria")
      .then((response) => {
        setPosts(response.data.categorias);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da API:", error);
      })
      .finally(() => {
        setCarregando(false);
      });
  }, []);

  return (
    <View>
      <StatusBar />
      {carregando ? ( // Verifica se os dados estão carregando
        <View style={HomeStyle.spinner}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={HomeStyle.container}>
              <TouchableOpacity
                style={HomeStyle.Click}
                onPress={() => mandar(item.nome)}
              >
                <View style={HomeStyle.card}>
                  <Text style={HomeStyle.text}>{item.nome}</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}

// async function HomeScreen() {
//   try {
//     const response = await axios.get(
//       "http://192.168.103.54:8000/api/Categoria"
//     );
//     const posts = response.data.categorias;

//     // Agora você pode trabalhar com os dados relacionados.
//     posts.forEach((post) => {
//       // console.log("Título do Post:", post.nome);
//       console.log("Título do Post:", post.frases);
//       // console.log("Tags relacionadas:", post.frases);
//     });
//   } catch (error) {
//     console.error("Erro ao buscar dados da API:", error);
//   }
// }
// HomeScreen();
