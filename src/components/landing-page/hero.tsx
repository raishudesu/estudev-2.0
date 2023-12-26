import HeroBtns from "./hero-btns";

export const headingGradient =
  "text-transparent bg-clip-text bg-gradient-to-b from-[#242424] via-gray-600 to-gray-700 dark:from-gray-100 dark:to-gray-400 pb-2";

const Hero = () => {
  return (
    <div className="relative pt-10 md:py-24 w-full max-w-screen-xl grid justify-items-center gap-6">
      <div className="grid gap-6 text-center px-6">
        <h1
          className={`scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl ${headingGradient}`}
        >
          Uniting Student Developers through a Community Platform
        </h1>
        <p className="leading-7">
          Discover a collaborative network of student developers to elevate your
          development skills and tech career aspirations.
        </p>
        <div className="w-full grid grid-cols-2 gap-3">
          <HeroBtns />
        </div>
      </div>
    </div>
  );
};

export default Hero;
