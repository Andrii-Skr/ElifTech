import Content from "./Content";
import ShopList from "./ShopsList";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <aside>
        <ShopList />
      </aside>
      <main>
        <Content />
      </main>
    </div>
  );
};

export default Home;
