import TicketArea from "./TicketArea";
import type { Ticket } from "./types";
import type { Zone } from "./types";
import { useState } from "react";
import Button from "./Button";
import { useDroppable } from "@dnd-kit/core";

interface Props {
  zone: Zone;
  tickets: Ticket[];
  value1: string;
  value2: string;
  onChange1: (value: string) => void;
  onChange2: (value: string) => void;
  submitHandler: () => void;
  submitId: string;
  clickHandler: (event: React.MouseEvent<HTMLElement>) => void;
}

function Column({
  zone,
  tickets,
  value1,
  value2,
  onChange1,
  onChange2,
  submitHandler,
  submitId,
  clickHandler,
}: Props) {
  const { setNodeRef } = useDroppable({
    id: zone.id,
  });
  const [showAddTicketArea, setShowAddTicketArea] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitHandler();
  };
  return (
    <>
      <div className="col">
        <div className="title">
          <h3>{zone.title}</h3>
        </div>
        <div ref={setNodeRef} className="ticketsArea">
          {tickets.map((ticket) => {
            return <TicketArea key={ticket.id} ticket={ticket} />;
          })}
        </div>

        <div className="add">
          <Button
            children={"Add Ticket"}
            onClick={() => setShowAddTicketArea(true)}
          ></Button>
        </div>
        {showAddTicketArea && (
          <div className="popup">
            Title:{" "}
            <form onSubmit={handleSubmit}>
              <input
                name="title"
                placeholder="Write title of a task here"
                type="text"
                value={value1}
                onChange={(e) => onChange1(e.target.value)}
              ></input>
              <br></br>
              Description:{" "}
              <input
                name="description"
                placeholder="write description of a task here"
                type="text"
                value={value2}
                onChange={(e) => onChange2(e.target.value)}
              ></input>
              <br></br>
              <button
                type="submit"
                name="submit"
                id={submitId}
                onClick={clickHandler}
              >
                Submit
              </button>
            </form>
            <br></br>
            <Button
              children={"Close"}
              onClick={() => setShowAddTicketArea(false)}
            ></Button>
          </div>
        )}
      </div>
    </>
  );
}

export default Column;
