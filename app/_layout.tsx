// Root layout file
import { Slot, Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Slot/>
      {/* Bottom navigation tabs */}
      <Stack.Screen name="(tabs)" /> 
      <Stack.Screen name = "(auth)"/> 
      {/* Detail screen */}
      <Stack.Screen name="(resource)" />
      {/* User Detail Screen */}
      {/* File name is [id] imstead of smth like Detail screen - bc [] tells router that - this part of the url id dynamic - resource/4 or resource/mobile, etc - [id] can be 4 or mobile */}
      <Stack.Screen name="users/[userId]" />
      {/*Modal -  Pop-up/Dialog/Bottom Sheet/ Drawer */}
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
    </Stack>
  );
}
