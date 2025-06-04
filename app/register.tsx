import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function RegisterScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-white px-6">
      <Text className="text-3xl font-bold mb-8">Register</Text>

      <TextInput placeholder="Email" className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4" />
      <TextInput placeholder="Password" className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4" secureTextEntry />
      <TextInput placeholder="Confirm Password" className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6" secureTextEntry />

      <TouchableOpacity className="bg-green-600 px-6 py-3 rounded-full mb-3 w-full" onPress={() => alert("Register")}>
        <Text className="text-white text-center">Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/login')}>
        <Text className="text-blue-500">Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}
