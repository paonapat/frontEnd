import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Answer, { AnswerItem } from "@/components/Answer";
import React, { useEffect, useState } from "react";
import { shuffleArray } from "@/utils/shuffleArray";

type ItemProps = {
  id: string;
  title: string;
  answer: AnswerItem[];
};

const mockData: ItemProps[] = [
  {
    id: "1",
    title: "1 Item",
    answer: [
      { id: "1", description: "answer 1", value: "1" },
      { id: "2", description: "answer 2", value: "2" },
      { id: "3", description: "answer 3", value: "3" },
      { id: "4", description: "answer 4", value: "4" },
    ],
  },
  {
    id: "2",
    title: "2 Item",
    answer: [
      { id: "1", description: "answer 1", value: "1" },
      { id: "2", description: "answer 2", value: "2" },
      { id: "3", description: "answer 3", value: "3" },
      { id: "4", description: "answer 4", value: "4" },
    ],
  },
  {
    id: "3",
    title: "3 Item",
    answer: [
      { id: "1", description: "answer 1", value: "1" },
      { id: "2", description: "answer 2", value: "2" },
      { id: "3", description: "answer 3", value: "3" },
      { id: "4", description: "answer 4", value: "4" },
    ],
  },
  {
    id: "4",
    title: "4 Item",
    answer: [
      { id: "1", description: "answer 1", value: "1" },
      { id: "2", description: "answer 2", value: "2" },
      { id: "3", description: "answer 3", value: "3" },
      { id: "4", description: "answer 4", value: "4" },
    ],
  },
  {
    id: "5",
    title: "5 Item",
    answer: [
      { id: "1", description: "answer 1", value: "1" },
      { id: "2", description: "answer 2", value: "2" },
      { id: "3", description: "answer 3", value: "3" },
      { id: "4", description: "answer 4", value: "4" },
    ],
  },
  {
    id: "6",
    title: "6 Item",
    answer: [
      { id: "1", description: "answer 1", value: "1" },
      { id: "2", description: "answer 2", value: "2" },
      { id: "3", description: "answer 3", value: "3" },
      { id: "4", description: "answer 4", value: "4" },
    ],
  },
  {
    id: "7",
    title: "7 Item",
    answer: [
      { id: "1", description: "answer 1", value: "1" },
      { id: "2", description: "answer 2", value: "2" },
      { id: "3", description: "answer 3", value: "3" },
      { id: "4", description: "answer 4", value: "4" },
    ],
  },
  {
    id: "8",
    title: "8 Item",
    answer: [
      { id: "1", description: "answer 1", value: "1" },
      { id: "2", description: "answer 2", value: "2" },
      { id: "3", description: "answer 3", value: "3" },
      { id: "4", description: "answer 4", value: "4" },
    ],
  },
  {
    id: "9",
    title: "9 Item",
    answer: [
      { id: "1", description: "answer 1", value: "1" },
      { id: "2", description: "answer 2", value: "2" },
      { id: "3", description: "answer 3", value: "3" },
      { id: "4", description: "answer 4", value: "4" },
    ],
  },
  {
    id: "10",
    title: "10 Item",
    answer: [
      { id: "1", description: "answer 1", value: "1" },
      { id: "2", description: "answer 2", value: "2" },
      { id: "3", description: "answer 3", value: "3" },
      { id: "4", description: "answer 4", value: "4" },
    ],
  },
  {
    id: "11",
    title: "11 Item",
    answer: [
      { id: "1", description: "answer 1", value: "1" },
      { id: "2", description: "answer 2", value: "2" },
      { id: "3", description: "answer 3", value: "3" },
      { id: "4", description: "answer 4", value: "4" },
    ],
  },
  {
    id: "12",
    title: "12 Item",
    answer: [
      { id: "1", description: "answer 1", value: "1" },
      { id: "2", description: "answer 2", value: "2" },
      { id: "3", description: "answer 3", value: "3" },
      { id: "4", description: "answer 4", value: "4" },
    ],
  },
  {
    id: "13",
    title: "13 Item",
    answer: [
      { id: "1", description: "answer 1", value: "1" },
      { id: "2", description: "answer 2", value: "2" },
      { id: "3", description: "answer 3", value: "3" },
      { id: "4", description: "answer 4", value: "4" },
    ],
  },
  {
    id: "14",
    title: "14 Item",
    answer: [
      { id: "1", description: "answer 1", value: "1" },
      { id: "2", description: "answer 2", value: "2" },
      { id: "3", description: "answer 3", value: "3" },
      { id: "4", description: "answer 4", value: "4" },
    ],
  },
  {
    id: "15",
    title: "15 Item",
    answer: [
      { id: "1", description: "answer 1", value: "1" },
      { id: "2", description: "answer 2", value: "2" },
      { id: "3", description: "answer 3", value: "3" },
      { id: "4", description: "answer 4", value: "4" },
    ],
  },
  {
    id: "16",
    title: "16 Item",
    answer: [
      { id: "1", description: "answer 1", value: "1" },
      { id: "2", description: "answer 2", value: "2" },
      { id: "3", description: "answer 3", value: "3" },
      { id: "4", description: "answer 4", value: "4" },
    ],
  },
  {
    id: "17",
    title: "17 Item",
    answer: [
      { id: "1", description: "answer 1", value: "1" },
      { id: "2", description: "answer 2", value: "2" },
      { id: "3", description: "answer 3", value: "3" },
      { id: "4", description: "answer 4", value: "4" },
    ],
  },
  {
    id: "18",
    title: "18 Item",
    answer: [
      { id: "1", description: "answer 1", value: "1" },
      { id: "2", description: "answer 2", value: "2" },
      { id: "3", description: "answer 3", value: "3" },
      { id: "4", description: "answer 4", value: "4" },
    ],
  },
  {
    id: "19",
    title: "19 Item",
    answer: [
      { id: "1", description: "answer 1", value: "1" },
      { id: "2", description: "answer 2", value: "2" },
      { id: "3", description: "answer 3", value: "3" },
      { id: "4", description: "answer 4", value: "4" },
    ],
  },
  {
    id: "20",
    title: "20 Item",
    answer: [
      { id: "1", description: "answer 1", value: "1" },
      { id: "2", description: "answer 2", value: "2" },
      { id: "3", description: "answer 3", value: "3" },
      { id: "4", description: "answer 4", value: "4" },
    ],
  },
];

const Question = () => {
  const [data, setData] = useState<ItemProps[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    shufflingData();
  }, []);

  const shufflingData = () => {
    setTimeout(() => {
      const shuffledData = shuffleArray(mockData);
      setData(shuffledData);
      setRefreshing(false);
    }, 1000);
  };

  const onRefresh = () => {
    setRefreshing(true);
    shufflingData();
  };

  const Item = ({ item }: { item?: ItemProps }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item?.title}</Text>
      <Answer answerItem={item?.answer} />
    </View>
  );
  if (!data) return;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        extraData={data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            title="Loading..."
            progressBackgroundColor="#ffff00"
          />
        }
      />
    </SafeAreaView>
  );
};
export default Question;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
