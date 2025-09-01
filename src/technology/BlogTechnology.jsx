import { useParams} from "react-router-dom";
import { Data } from "../data";

const BlogTechnology = () => {
  const { name } = useParams();
   
  const technology = Data.technology.find((tech) => tech.path === name);
  return (
    <article className="text-white grid lg:grid-cols-12  grid-rows-12 lg:col-span-12 grid-cols-1 h-dvh min-h-[870px] ">
      {/*Children */}
      <div className="lg:col-start-2 lg:col-span-4 row-start-3 ml-10 lg:ml-0">
        <h1 className="text-2xl uppercase">03 Space launch 101</h1>
      </div>
      <div className=" lg:row-start-5 lg:col-start-3 lg:col-span-4 lg:row-span-6  -row-end-1 row-start-8 md:row-start-9  lg:mt-0  lg:px-0 text-center lg:text-left mt-3">
        <p className=" uppercase">The terminology...</p>
        <h2 className="text-4xl uppercase lg:mb-8 mb-3">{technology.name}</h2>
        <p className="px-6 lg:px-0">{technology.description}</p>
      </div>
      <div className="lg:col-start-8 lg:-col-end-1 lg:row-start-4 lg:row-end-11 row-start-4 row-span-3 md:row-span-4 bg-slate-400">
        <img
          src={technology.images.portrait}
          alt={technology.name}
          className="h-full w-full hidden lg:block"
        />
        <img
          src={technology.images.landscape}
          alt={technology.name}
          className="h-full w-full lg:hidden  "
        />
      </div>
    </article>
  );
};

export default BlogTechnology;
