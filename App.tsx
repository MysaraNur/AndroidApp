import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Alert,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
        initialRouteName="Details">
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="RegisterInfo" component={RegisterInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Details = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'mysaranur47@gmail.com' && password === '123') {
      navigation.navigate('LogIn');
    } else {
      Alert.alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const LogIn = ({ navigation }) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>Log In Screen</Text>
      <Button title="Home page" onPress={() => navigation.navigate('Home')} />
      <Button title="Chat" onPress={() => navigation.navigate('Chat')} />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
};

const Home = ({ navigation }) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 20 }}>Welcome</Text>
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
      <Button
        title="Register Info"
        onPress={() => navigation.navigate('RegisterInfo', {
            name: 'John Doe',
            age: '25',
            email: 'johndoe@example.com',
        })}
      />
    </View>
  );
};

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = () => {
    navigation.navigate('RegisterInfo', {name, age, email});
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>Registration Form</Text>
      <TextInput
        style={{fontSize: 20, borderWidth: 2}}
        onChangeText={text => setName(text)}
        placeholder="Enter Name"
      />
      <TextInput
        style={{fontSize: 20, borderWidth: 2}}
        onChangeText={text => setAge(text)}
        placeholder="Enter Age"
      />
      <TextInput
        style={{fontSize: 20, borderWidth: 2}}
        onChangeText={text => setEmail(text)}
        placeholder="Enter Email"
      />
      <Button title="Submit" onPress={handleRegister} />
    </View>
  );
};

const RegisterInfo = ({route}) => {
  const {name, age, email} = route.params;

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>Registration Info</Text>
      <Text style={{fontSize: 20}}>Name: {name}</Text>
      <Text style={{fontSize: 20}}>Age: {age}</Text>
      <Text style={{fontSize: 20}}>Email: {email}</Text>
    </View>
  );
};

const Chat = () => {
  const [threads, setThreads] = useState([
    {id: 1, name: 'WWWW', lastMessage: 'Hello there!', time: '10:00 AM'},
    {id: 2, name: 'JJJJ', lastMessage: 'How are you?', time: '11:00 AM'},
    {id: 3, name: 'xyz', lastMessage: 'okay', time: '9:00 AM'},
    {id: 4, name: 'AAAA', lastMessage: 'thank you', time: '10:00 AM'},
    {id: 5, name: 'CCCC', lastMessage: 'Nice', time: '14:00 PM'},
    // Add more thread objects as needed
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={threads}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.threadContainer}>
            <Text style={styles.threadName}>{item.name}</Text>
            <Text style={styles.lastMessage}>{item.lastMessage}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        )}
      />
    </View>
  );
};

const Profile = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>Profile screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  threadContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  threadName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lastMessage: {
    fontSize: 16,
    color: '#666',
  },
  time: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
});

export default App;
