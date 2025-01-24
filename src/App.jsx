import PersonalInfo from "./components/PersonalInfo";
import Profession from "./components/Profession";
import InfoJobs from "./components/InfoJobs";
import Conocimientos from "./components/Conocimientos";
import Banner from "./components/Banner";
import CardJobs from "./UI/CardJobs";

function App() {
  return (
    <>
      <Banner />

      <section className="container mx-auto p-10">
        <h1 className="text-7xl flex items-center justify-center m-2 p-1">Portfolio</h1>
        <PersonalInfo />
        <Profession />
        <CardJobs/>
        <InfoJobs />
        <Conocimientos />
      </section>
    </>
  );
}

export default App;
