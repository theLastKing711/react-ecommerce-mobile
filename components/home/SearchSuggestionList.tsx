import {
  SearchSuggestionResultItem,
  SearchSuggestionResultList,
} from "@/types/home";
import React from "react";
import { FlatList, ListRenderItem, View } from "react-native";
import { ActivityIndicator, List } from "react-native-paper";

export type SearchSuggestionListProps = {
  items: SearchSuggestionResultList;
  isVisible: boolean;
  hasNextPage: boolean;
  fetchNextPage: () => void;
  isLoading: boolean;
};

const SearchSuggestionList = ({
  items,
  isVisible,
  hasNextPage,
  fetchNextPage,
  isLoading,
}: SearchSuggestionListProps) => {
  const renderItem:
    | ListRenderItem<SearchSuggestionResultItem>
    | null
    | undefined = ({ item: { id, name, image_url } }) => (
    <View key={id} style={{ gap: 15 }}>
      {/* <Image
        source={{ uri: image_url }}
        style={{
          borderRadius: 100,
        }}
      ></Image>
      <View>
        <Text variant="labelMedium">{name}</Text>
      </View> */}
      <List.Item
        onPress={() => alert("hello world")}
        title={name}
        description="Item description"
        left={(props) => <List.Icon {...props} icon="folder" />}
      />
    </View>
  );

  const loadingComponent = isLoading ? ActivityIndicator : undefined;

  console.log("items", items);

  return (
    <View
      style={{
        position: "absolute",
        height: "100%",
        width: "100%",
        // top: 0,
        // left: 0,
        // right: 0,
        // bottom: 0,
        // top: 71,
        // flex: 1,
        display: "flex",
        paddingTop: 71,
        zIndex: 3,
      }}
    >
      <FlatList
        data={items}
        renderItem={renderItem}
        onEndReached={fetchNextPage}
        ListFooterComponent={loadingComponent}
      ></FlatList>
    </View>
  );
};

export default SearchSuggestionList;
