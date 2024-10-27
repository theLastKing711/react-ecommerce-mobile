import ProductCardItem from "@/components/shared/ProductCardItem";
import { IHomeProductItem, IHomeProductList } from "@/types/home";
import { Text, View, StyleSheet, FlatList, ListRenderItem } from "react-native";

const list: IHomeProductList = [
  {
    id: 1,
    name: "كرار تواليت ديلما",
    is_favourite: true,
    price: 25,
  },
  {
    id: 2,
    name: "محارم كرزة",
    is_favourite: false,
    price: 15,
  },
  {
    id: 3,
    name: "عملاق",
    is_favourite: false,
    price: 50,
  },
];

export default function AboutScreen() {
  const renderProductItem:
    | ListRenderItem<IHomeProductItem>
    | null
    | undefined = ({ item }) => (
    <ProductCardItem item={item} onFavourite={() => {}}></ProductCardItem>
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={{ paddingHorizontal: 20 }}
        data={list}
        renderItem={renderProductItem}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // position: "relative",
    backgroundColor: "#25292e",
    // justifyContent: "center",
    // alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});

// <Portal.Host>
// {/* <Text>salkdj</Text> */}
// <Portal>
//   <Modal
//     visible={true}
//     style={{
//       backgroundColor: "yellow",
//       // top: 85,
//       // flex: 1,
//       // top: 71,
//       // top: 0,
//       // left: 0,
//       // right: 0,
//       // bottom: 0,
//       width: "100%",
//       height: "100%",
//       justifyContent: "flex-start",
//       margin: 0,
//       // top: 200,
//       flex: 1,
//     }}
//     contentContainerStyle={{
//       // margin: 0,
//       // flex: 1,
//       width: "100%",
//       height: "100%",
//       margin: 0,
//     }}
//     // style={{ top: 0, left: 0, bottom: 0, right: 20 }}
//   >
//     <ScrollView>
//       <Text style={{ color: "red" }}>
//         Example Modal. Click outside this area to dismiss.
//       </Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//       <Text>Example Modal. Click outside this area to dismiss.</Text>
//     </ScrollView>
//   </Modal>
// </Portal>
// </Portal.Host>
