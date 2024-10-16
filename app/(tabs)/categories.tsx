import { useGetParentCategories } from "@/hooks/api/categoreis/useGetParentCategories";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

const CategoriesList = () => {
  //   const queryClient = useQueryClient();

  const { data, isLoading } = useGetParentCategories();

  //   console.log("data in component", data);

  return (
    <View>
      <Text
        style={{
          color: "red",
        }}
      >
        aslkdj
      </Text>
    </View>
  );
};

export default CategoriesList;
