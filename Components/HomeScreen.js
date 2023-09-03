import Header from "./Header";
import TrendingNews from "./TrendingNews";
import AllNews from "./AllNews";
import NewsByCategory from "./NewsByCategory";
import { useState } from "react";

const HomeScreen = ({ navigation }) => {
  // const [newsByCategory, setNewsByCategory] = useState(null);
  return (
    <>
      <Header props={navigation} />
      <TrendingNews props={navigation} />
      <AllNews props={navigation} />
    </>
  );
};

export default HomeScreen;
