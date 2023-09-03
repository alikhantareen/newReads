import Header from "./Header";
import TrendingNews from "./TrendingNews";
import AllNews from "./AllNews";
import Footer from "./Footer";

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <Header />
      <TrendingNews props={navigation} />
      <AllNews props={navigation} />
    </>
  );
};

export default HomeScreen;
