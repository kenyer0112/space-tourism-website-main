import { useParams } from "react-router-dom";
import { Data } from "../data";

const BlogDestination = () => {
  const { name } = useParams();

  const destinationBlog = Data.destinations.find((dest) => dest.path === name);

  return (
    <article className="text-white lg:col-span-12 grid lg:grid-cols-12 grid-cols-1 grid-rows-12 h-dvh min-h-[870px]">
      <div className="lg:col-start-2 lg:row-start-3 lg:col-span-5 row-start-2 ">
        <h1 className="uppercase text-2xl mt-4 ml-6 lg:ml-0 lg:mt-0">
          {" "}
          01 Pick your destination
        </h1>
      </div>
      <div className="lg:col-start-2 lg:row-start-5 lg:col-span-4 lg:row-span-5 row-start-3 row-span-3  ">
        <img
          src={destinationBlog.images.png}
          alt={destinationBlog.name}
          className="h-full block object-contain mx-auto lg:mx-0 animation"
        />
      </div>
      <div className="lg:col-start-7 lg:row-start-5 lg:col-span-4 row-span-6 flex flex-col gap-6 lg:pt-4 relative row-start-7 text-center lg:text-left lg:px-0 px-4">
        <h2 className="lg:text-8xl text-6xl uppercase">
          {destinationBlog.name}
        </h2>
        <p className="item-line">{destinationBlog.description}</p>
        <div className="flex lg:gap-20 gap-8 lg:mt-14 justify-center lg:justify-start flex-wrap lg:flex-nowrap">
          <div>
            <p className="text-nowrap">AVG.DISTANCE</p>
            <p className="text-2xl uppercase text-nowrap">
              {destinationBlog.distance}
            </p>
          </div>
          <div>
            <p className="text-nowrap">EST.TRAVEL TIME</p>
            <p className="text-2xl uppercase text-nowrap">
              {destinationBlog.travel}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogDestination;
