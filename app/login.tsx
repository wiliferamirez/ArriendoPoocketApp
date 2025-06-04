import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function LoginScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-white px-6">
      <Text className="text-3xl font-bold mb-8">Login</Text>

      <TextInput
        placeholder="Email"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6"
        secureTextEntry
      />

      <TouchableOpacity className="bg-blue-600 px-6 py-3 rounded-full mb-3 w-full" onPress={() => alert("Login")}>
        <Text className="text-white text-center">Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text className="text-blue-500">Don t have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
}
