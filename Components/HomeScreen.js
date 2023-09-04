import Header from "./Header";
import TrendingNews from "./TrendingNews";
import AllNews from "./AllNews";

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <Header props={navigation} />
      <TrendingNews props={navigation} />
      <AllNews props={navigation} />
    </>
  );
};

export default HomeScreen;
