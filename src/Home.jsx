import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home z-0 text-white grid grid-rows-12 lg:grid-cols-12 overflow-hidden grid-cols-1 ">
      <article className="lg:row-start-6  lg:col-start-2 lg:col-span-5 lg:row-span-5 flex flex-col lg:gap-6 text-center lg:text-left row-start-3 row-span-3">
        <h1 className="text-2xl uppercase ">So, you want to travel to</h1>
        <p className="uppercase font-medium text-p md:text-8xl text-7xl ">
          Space
        </p>
        <p className="lg:max-w-[425px] mt-2 px-5 lg:px-0 ">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </article>
      <article className="lg:row-start-7 row-span-4 lg:col-start-9 col-span-3 h-52 bg-white w-52 rounded-full row-start-8 mx-auto lg:mx-0 ">
        <h2 className=" text-black text-3xl uppercase text-center leading-[13rem] ">
          Explore
        </h2>
      </article>
      <article className="lg:col-start-2 lg:col-end-12 row-start-12 flex justify-between items-center lg:px-0 px-6">
        <Link
          to="https://www.frontendmentor.io?ref=challenge"
          className="animate__animated animate__rollIn uppercase"
        >
          Frontend Mentor
        </Link>
        <Link
          to="https://github.com/kenyer0112/space-tourism-website-main"
          className="inline-block font-roboto text-white clip w-12 h-12 text-center leading-[48px] animate__animated animate__zoomIn animate__infinite animate__slower animate__delay-3s"
        >
          KS
        </Link>
      </article>
    </section>
  );
};

export default Home;
