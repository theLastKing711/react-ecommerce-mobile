import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { View } from "react-native-reanimated/lib/typescript/Animated";

export const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

export default function RootLayout() {
  return (
    <PaperProvider>
      <QueryClientProvider client={queryClient}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
          <Stack.Screen name="about" options={{ title: "Home" }} />
          <Stack.Screen name="index" />
        </Stack>
      </QueryClientProvider>
    </PaperProvider>
  );
}
