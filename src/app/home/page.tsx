import { typography } from "@/styles/typography";
import Nav from "./components/nav";

const Home = () => {
  return (
    <section className="flex">
      <aside className="border-r sticky left-0 top-0 h-screen overflow-y-auto p-6">
        <h3 className={`${typography.h3}`}>Home</h3>
        <Nav />
      </aside>
    </section>
  );
};

export default Home;
