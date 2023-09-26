import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { tailwinds } from "./styles";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScrem({ navigation }) {
  return (
    <View style={tailwinds.container}>
      <StatusBar />
      <Image
        source={require("../../assets/tabnine-logo.png")}
        style={tailwinds.logo}
      />
      <TextInput
        placeholder="Phone number, username or email"
        style={tailwinds.password}
      />
      <TextInput placeholder="Password" style={tailwinds.password} />

      <View style={tailwinds.forget}>
        <TouchableOpacity onPress={() => navigation.push("ForgetPassword")}>
          <Text style={tailwinds.forgetTexte}>Esqueceu a senha.?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        style={tailwinds.button}
      >
        <Text style={tailwinds.TextInput}>Acessar</Text>
      </TouchableOpacity>

      <View style={tailwinds.orlog}>
        <Text style={tailwinds.lineLeft}></Text>
        <Text style={tailwinds.textOu}>Or</Text>
        <Text style={tailwinds.lineRight}></Text>
      </View>
      <Text style={tailwinds.entrar}>Entrar com redes socias</Text>
      <View style={tailwinds.btn}>
        <Image source={require("../../assets/google.png")} />
        <Image
          source={require("../../assets/apple.png")}
          style={tailwinds.apple}
        />
        <Image source={require("../../assets/facebook.png")} />
      </View>

      <View style={tailwinds.donthave}>
        <Text>Nao tens conta ainda?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={tailwinds.register}>Registar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
