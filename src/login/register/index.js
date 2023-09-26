import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { register } from "./styles";
export default function Register({ navigation }) {
  return (
    <View style={register.container}>
      <Image
        source={require("../../../assets/tabnine-logo.png")}
        style={register.logo}
      />
      <TextInput placeholder="Nome" style={register.input} />
      <TextInput placeholder="Email" style={register.input} />
      <TextInput placeholder="PAssword" style={register.input} />
      <TextInput placeholder="Confirme Password" style={register.input} />
      <TouchableOpacity style={register.bttun}>
        <Text style={register.btn}>Registar</Text>
      </TouchableOpacity>
      <View style={register.LineCol}>
        <Text style={register.lineLeft}></Text>
        <Text style={register.LineText}>Or</Text>
        <Text style={register.lineRight}></Text>
      </View>
      <Text>Registar com redes socias</Text>
      <TouchableOpacity style={register.redes}>
        <Image source={require("../../../assets/google.png")} />
        <Image
          style={register.apple}
          source={require("../../../assets/apple.png")}
        />
        <Image source={require("../../../assets/facebook.png")} />
      </TouchableOpacity>
      <View style={register.jatesb}>
        <Text>Ja Tens uma conta.?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={register.textLogin}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
