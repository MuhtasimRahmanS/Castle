import { Helmet } from "react-helmet";
import pic from "../../public/slide3.jpg";
const About = () => {
  return (
    <div>
      <div className="text-center">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About-Castle</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <h2 className="inline-block text-primary text-2xl font-bold sm:text-3xl">
          About Us
        </h2>
      </div>
      <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
        <div className="flex flex-col container mx-auto overflow-hidden rounded">
          <img
            src={pic}
            alt=""
            className="w-full h-60 sm:h-96 dark:bg-gray-500 round"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-purple-200 ">
            <div className="space-y-2">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block text-2xl font-semibold sm:text-3xl"
              >
                Let&apos;s Embark On This Architectural Journey
              </a>
              <p className=" dark:text-gray-600">
                We are passionate about transforming your dream home into a
                living reality. With years of experience in residential
                architecture, we blend creativity and expertise to design spaces
                that not only reflect your unique style but also enhance your
                everyday living.
              </p>
            </div>
            <div className="space-y-2">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block text-2xl font-semibold sm:text-3xl"
              >
                Our Vision
              </a>
              <p className=" dark:text-gray-600">
                We envision a world where every home is a masterpiece of design
                and functionality, where architecture harmonizes seamlessly with
                the lives of its inhabitants
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
