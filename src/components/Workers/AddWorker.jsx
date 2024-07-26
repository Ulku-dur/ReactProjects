import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
const AddWorker = (props) => {
  const [enteredWorkerName, setEnteredWorkerName] = useState("");
  const [enteredWage, setEnteredWage] = useState("");
  const [error, setError] = useState();
  const minWage=2000;

  const addWorkerHandler = (e) => {
    e.preventDefault();
    // to avoid sending empty form
    if(enteredWorkerName.trim().length===0 ) {
      setError({
        title: "Name field is required!",
        message: "Please enter your name"
      })
      return;
    }
    // for min. wage condition
    // + symbol parse it to number type
    if(+enteredWage <= minWage) {
      setError({
        title: "Wage field is required!",
        message: `Please enter a wage greater than  ${minWage}`
      })
      return;
    }
    
    // to create worker list used array obj.
    props.setWorkers((prevState)=> [ 
      {
        id: Math.floor(Math.random()*1000),
        name: enteredWorkerName,
        wage: enteredWage
      },
      ...prevState,
    ]);
    // for refreshing form as empty
    setEnteredWorkerName("");
    setEnteredWage("");
  };
  const errorHandler = ()=> {
    setError(null);

  };
  return (
    <div>
      {error && <ErrorModal onConfirm={errorHandler} error={error}/>}
      <Card className="mt-10">
      <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
        <label htmlFor="name" className="font-medium">
          Name
        </label>
        <input
          type="text"
          className="max-w-[40rem] w-full mx-auto p-2"
          placeholder="Enter worker name"
          id="name"
          // we get changed value from here
          onChange={(e) => setEnteredWorkerName(e.target.value)}
          value={enteredWorkerName}
        />
        <label htmlFor="wage" className="font-medium">
          Wage
        </label>
        <input
          type="number"
          className="max-w-[40rem] w-full mx-auto p-2"
          placeholder="Enter wage"
          id="wage"
          onChange={(e) => setEnteredWage(e.target.value)}
          value={enteredWage}
        />
        <Button className="mt-2" type="submit">
          Add
        </Button>
      </form>
    </Card>
    </div>
  );
};

export default AddWorker;
