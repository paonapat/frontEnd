import { shuffleArray } from "@/utils/shuffleArray";
import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { RadioButton } from "react-native-paper";

export type AnswerItem = {
  id: string;
  description: string;
  value: string;
};

const Answer = ({ answerItem }: { answerItem?: AnswerItem[] }) => {
  const [data, setData] = useState<AnswerItem[]>([]);
  const [checked, setChecked] = useState("");

  useEffect(() => {
    if (answerItem) shufflingData(answerItem);
  }, [answerItem]);

  const shufflingData = (answerItem: AnswerItem[]) => {
    const shuffledData = shuffleArray(answerItem);
    setData(shuffledData);
  };

  const Item = ({ item }: { item?: AnswerItem }) => (
    <View>
      <RadioButton.Group
        onValueChange={(newValue) => setChecked(newValue)}
        value={checked}
      >
        <View>
          <RadioButton.Item
            label={item?.description ?? ""}
            value={item?.value ?? ""}
          />
        </View>
      </RadioButton.Group>
    </View>
  );
  if (!data) return;
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Answer;
