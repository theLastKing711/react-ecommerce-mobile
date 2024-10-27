import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";

export const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

export default function RootLayout() {
  return (
    <PaperProvider>
      <QueryClientProvider client={queryClient}>
        {/* <CartProvider> */}
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
          <Stack.Screen name="about" />
          {/* <Stack.Screen name="product/[id]" /> */}
          <Stack.Screen name="index" />
          <Stack.Screen name="+not-found" />
        </Stack>
        {/* </CartProvider> */}
      </QueryClientProvider>
    </PaperProvider>
  );
}
