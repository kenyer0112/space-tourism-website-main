import { Data } from "../data";
const Commander = () => {
  const crewCommander = Data.crew.find(
    (crew) => crew.path === "douglas_hurley"
  );
  return (
    <article className="grid col-span-12 lg:grid-cols-12 grid-cols-1 grid-rows-12 h-dvh min-h-[870px]">
      <div className="lg:row-start-3 lg:col-start-2 lg:col-span-4 row-start-2">
        <h1 className="text-2xl uppercase mb-16 text-left px-5">
          02 Meet your crew{" "}
        </h1>
      </div>
      <div className="lg:row-start-5 lg:col-start-2 lg:col-span-4 md:row-span-3 flex flex-col gap-3 md:row-start-3 md:px-20  text-center lg:px-0 lg:text-start row-start-8">
        <p className="text-2xl uppercase">{crewCommander.role}</p>
        <h2 className="text-4xl uppercase mb-4">{crewCommander.name}</h2>
        <p className="px-3 lg:px-0">{crewCommander.bio}</p>
      </div>
      <div className="lg:row-start-4 lg:col-start-7 lg:col-span-5 md:-row-end-1 md:row-start-7  text-center row-start-3 row-span-4">
        <img src={crewCommander.images.png} alt={crewCommander.name} className="h-full inline-block" />
      </div>
    </article>
  );
};

export default Commander;
