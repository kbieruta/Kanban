import { useState } from "react";
import Button from "./Button";

interface SubmitData {
  title: string;
  description: string;
}

function AddTicketArea(handleSubmit: () => void, submitData: SubmitData) {
  const [showAddTicketArea, setShowAddTicketArea] = useState(false);
  return (
    <>
      <div>
        <Button
          children={"Add Ticket"}
          onClick={() => setShowAddTicketArea(true)}
          id={-1}
        ></Button>
      </div>
      {showAddTicketArea && (
        <div>
          Title:{" "}
          <input
            name="title"
            placeholder="Write title of a task here"
            value={submitData.title}
          ></input>
          <br></br>
          Description:{" "}
          <input
            name="description"
            placeholder="write description of a task here"
            value={submitData.description}
          ></input>
          <br></br>
          <Button children={"Confirm"} onClick={handleSubmit} id={-1}></Button>
          <br></br>
          <Button
            children={"Close"}
            onClick={() => setShowAddTicketArea(false)}
            id={-1}
          ></Button>
        </div>
      )}
    </>
  );
}

export default AddTicketArea;
