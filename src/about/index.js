import { Alert, Image, ScrollView, Text, View } from "react-native";
import { AboutStyle } from "./styles";
import axios, { Axios } from "axios";
import { useState, useEffect } from "react";
export default function About({ route }) {
  const [posts, setPosts] = useState([]);

  const { nome } = route.params;

  useEffect(() => {
    axios
      .get(`http://192.168.237.54:8000/api/busca/${nome}`)
      .then(function (response) {
        setPosts(response.data.allFrases);
        console.log(response.data.allFrases);
      })

      .catch(function (error) {
        console.error(error);
      });
  }, []);

  if (posts.length === 0) {
    return (
      <View style={AboutStyle.error}>
        <Image
          source={require("../../assets/not.jpg")}
          style={AboutStyle.img}
        />
      </View>
    );
  } else {
    return (
      <ScrollView>
        {posts.map((item, index) => (
          <View key={index} style={AboutStyle.container}>
            <Text style={AboutStyle.texto}>{item.nome}</Text>
          </View>
        ))}
      </ScrollView>
    );
  }
}
