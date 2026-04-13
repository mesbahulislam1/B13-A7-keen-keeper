
import FriendList from "../../components/Hero/FriendList";
import HeroText from "../../components/Hero/HeroText";

const Home = () => {
  return (
    <div className="container mt-[50px] sm:mt-[60px] md:mt-[80px] mb-[50px] sm:mb-[60px] md:mb-[80px] mx-auto px-5">
      <HeroText></HeroText>
      <FriendList></FriendList>
    </div>
  );
};

export default Home;
