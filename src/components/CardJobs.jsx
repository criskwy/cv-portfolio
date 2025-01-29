import { trabajos } from "../data";

const CardJobs = () => {
  return (
    <section className="bg-blue-200 rounded-xl p-2 mt-4 shadow-md">
      <section className="grid grid-cols-2 grid-rows-1 text-2xl text-center font-semibold pt-2">
        <h2>TRABAJOS</h2>
        <h2>CARGO</h2>
      </section>
      {trabajos.map((job) => {
        return (
          <section key={job.id} className="grid grid-cols-2 p-2 m-2">
            <div className="bg-slate-200 rounded-s-xl mx-2 p-4 flex justify-center ">
              {job.trabajo}
            </div>
            <div className="bg-slate-200 rounded-e-xl mx-2 p-4 flex justify-start items-center">
              {job.cargo}
            </div>
          </section>
        );
      })}
    </section>
  );
};

export default CardJobs;
