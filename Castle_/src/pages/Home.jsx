import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import "./Banner.css";
import Estate from "./Estate";
import About from "./About";
import Review from "./Review";
import { Helmet } from "react-helmet";

const Home = () => {
  const estates = useLoaderData();
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home-Castle</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Banner></Banner>
      <div className="container mx-auto  my-10">
        <div className="text-center">
          <h2 className="my-10 text-3xl font-bold text-primary ">Estates</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {estates.map((estate) => (
            <Estate key={estate.id} estate={estate}></Estate>
          ))}
        </div>
      </div>
      <About></About>
      <Review></Review>
    </div>
  );
};

export default Home;
