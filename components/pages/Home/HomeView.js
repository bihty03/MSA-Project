import { SafeAreaView } from "react-native-safe-area-context";
import HomePart1 from "./HomePart1";
import HomePart2 from "./HomePart2";
import HomePart3 from "./HomePart3";
import { ScrollView } from "react-native-gesture-handler";
import ExercisePreview from "./WorkoutsHome/ExercisePreview";

const HomeView = ({ person, sampleData, navigation }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#111214" }}
      edges={["right", "top", "left"]}
    >
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#111214",
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <HomePart1 person={person} />
        <HomePart2 person={person} sampleData={sampleData} />
        <HomePart3
          person={person}
          sampleData={sampleData}
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeView;
