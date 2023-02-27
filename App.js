import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
      <OlaScreen />
      <NomeScreen />
      <FraseScreen />
    </View>
    
  );
}

function HomeScreen() {
  return (
    <View>
      <Text>Sou a HomeScreen.</Text>
      <Image
        source={{
          uri: 'https://artincontext.org/wp-content/uploads/2021/02/How-to-Draw-a-Dragon.jpg'
        }
      }
      style={
        {
          height: '300px',
          width: '300px'
        }
      }
      />
    </View>
  );
}

function OlaScreen() {
  return (
    <View>
      <Text>Olá</Text>
    </View>
  );
}
function NomeScreen() {
  return (
    <View>
      <Text>Meu nome é João Bosco</Text>
    </View>
  );
}
function FraseScreen() {
  return (
    <View>
      <Text>O sonho que ispira, mas a ação que realiza</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
