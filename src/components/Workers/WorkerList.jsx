import Card from "../UI/Card";
const WorkerList = (props) => {
  const { workers, setWorkers } = props;
  {/* namely if list is empty then don't show us empyt list field */}
  if(workers.length < 1){
    return;
  }
  const deleteWorker = (id) => {
    setWorkers(workers.filter((item) => item.id !== id));
  };
  return (
    <Card className="mt-10">
      <ul>
        {/* this li for head of worker list */}
        <li className="flex justify-between p-2">
          <span className="font-bold">Name</span>
          <span className="font-bold">Wage</span>
        </li>
        {/* this li tag for list of worker */}
        {/* used arrow func. to get worker id */}
        {workers.map((worker) => (
          <li
            className="flex justify-between cursor-pointer hover:shadow-xl p-2 transition-shadow"
            key={worker.id}
            onClick={() => deleteWorker(worker.id)}
          >
            <span>{worker.name}</span>
            <span className="text-teal-700 font-medium">{worker.wage}$</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default WorkerList;
