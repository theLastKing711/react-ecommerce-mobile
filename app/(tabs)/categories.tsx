import CategoryItem from "@/components/categories/CategoryItem";
import { useGetParentCategories } from "@/hooks/api/categoreis/Queries/useGetParentCategories";
import { ParentCategoryItem } from "@/types/categories";
import React from "react";
import { FlatList, ListRenderItem, StyleSheet, View } from "react-native";

const CategoriesList = () => {
  //   const queryClient = useQueryClient();

  const { data, isLoading } = useGetParentCategories();

  //   console.log("data in component", data);

  const categoriesList = data?.data.data || [];

  if (isLoading) {
    return;
  }

  console.log(categoriesList);

  const renderCategory = (category: ParentCategoryItem) => (
    <CategoryItem key={category.id} item={category} />
  );

  const renderItem: ListRenderItem<ParentCategoryItem> | null | undefined = ({
    item,
  }) => (
    <CategoryItem key={item.id} item={item} containerStyles={{ flex: 1 }} />
  );

  return (
    <View>
      {/* <CategoryList categories={categoriesList} renderItem={renderCategory} /> */}
      <FlatList
        data={[...categoriesList, ...categoriesList, ...categoriesList]}
        renderItem={renderItem}
        style={{}}
        columnWrapperStyle={{
          //   justifyContent: "space-between",
          gap: 10,
          paddingHorizontal: 20,
          marginBottom: 15,
        }}
        numColumns={2}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: "bold",
  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
    zIndex: 1,
  },
  emptyHeader: {
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: "bold",
    opacity: 0.2,
  },
  emptyHeaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: -1,
  },
  addBtn: {
    position: "absolute",
    right: 15,
    bottom: 50,
    zIndex: 1,
  },
});

export default CategoriesList;
