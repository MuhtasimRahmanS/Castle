import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const estate = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const item = estate.find((item) => item.id === idInt);
  const {
    estate_title,
    image,
    segment_name,
    price,
    status,
    area,
    location,
    description,
    facilities,
  } = item;
  return (
    <div data-aos="zoom-in" data-aos-duration="1000">
      <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
        <div className="flex flex-col container  mx-auto overflow-hidden rounded">
          <img
            src={image}
            alt=""
            className="w-full h-70 sm:h-96 dark:bg-gray-500"
          />
          <div className="p-6 pb-12 m-4 mx-auto  space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50 text-primary">
            <div className="space-y-2">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block text-2xl font-semibold sm:text-3xl"
              >
                {estate_title}
              </a>
              <p className="text-xs dark:text-gray-600">{segment_name}</p>
            </div>
            <div className="flex gap-5">
              <p>
                <span className="font-medium">Status:</span> {status}
              </p>
              <p>
                <span className="font-medium">Area:</span> {area}
              </p>
            </div>
            <div>
              <span className="font-medium">Facilities: </span>
              {facilities.map((item) => (
                <span className="mr-1" key={item.idk}>
                  {item},
                </span>
              ))}
            </div>
            <div className="lg:flex gap-5">
              <p>
                <span className="font-medium">Location:</span> {location}
              </p>
              <p>
                <span className="font-medium">Price:</span> {price}
              </p>
            </div>
            <div>
              <p className="font-semibold text-xl">Description</p>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
