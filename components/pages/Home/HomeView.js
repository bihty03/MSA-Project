import HomePart1 from "./HomePart1";
import HomePart2 from "./HomePart2";
import HomePart3 from "./HomePart3";
import { ScrollView } from "react-native-gesture-handler";
import ExercisePreview from "./WorkoutsHome/ExercisePreview";
import ConditionalSafeAreaView from "../../utils/SafeViewCustom";

const HomeView = ({ person, sampleData, navigation }) => {
  return (
    <ConditionalSafeAreaView>
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
    </ConditionalSafeAreaView>
  );
};

export default HomeView;
