import { Stack } from 'expo-router';
import { Platform } from 'react-native';

export default function QuotesLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#f9fafb' },
        animation: Platform.OS === 'ios' ? 'default' : 'fade',
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen 
        name="[id]" 
        options={{
          presentation: 'modal',
          animation: Platform.OS === 'ios' ? 'slide_from_bottom' : 'none',
          gestureEnabled: Platform.OS === 'ios',
          gestureResponseDistance: 200,
        }}
      />
    </Stack>
  );
}