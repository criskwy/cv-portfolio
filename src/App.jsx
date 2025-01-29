import PersonalInfo from "./components/PersonalInfo";
import Profession from "./components/Profession";

import Conocimientos from "./components/Conocimientos";
import Banner from "./components/Banner";
import CardJobs from "./components/CardJobs";

function App() {
  return (
    <>
      <Banner />

      <section className="container mx-auto p-10">
        <h1 className="text-7xl flex items-center justify-center m-2 p-1">
          Portfolio
        </h1>
        <PersonalInfo />
        <Profession />
        <CardJobs></CardJobs>

        <Conocimientos />
      </section>
    </>
  );
}

export default App;
