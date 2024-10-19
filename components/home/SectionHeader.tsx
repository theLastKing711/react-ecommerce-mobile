import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";

export type SectionHeaderProps = {
  //   onAllPress?: () => void;
  text: string;
  to?: string;
};

const SectionHeader = ({ text }: SectionHeaderProps) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.surface,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 15,
      paddingVertical: 10,
    },
    header: {
      color: theme.colors.onSurface,
    },
    headerSecondary: {
      color: theme.colors.primary,
    },
    categoryListConatiner: {
      alignItems: "flex-start",
      paddingStart: 15,
      gap: 10,
    },
  });

  return (
    <View style={styles.container}>
      <Text variant="headlineSmall" style={styles.header}>
        {text}
      </Text>
      <Text variant="titleMedium" style={styles.headerSecondary}>
        الكل
      </Text>
    </View>
  );
};

export default SectionHeader;
