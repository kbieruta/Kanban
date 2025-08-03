import type { Zone } from "./components/types";
import Column from "./components/Column";
import type { Ticket } from "./components/types";
import React, { useState } from "react";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";

// Kolumny i klucze
const ZONES: Zone[] = [
  { id: 0, title: "Backlog" },
  { id: 1, title: "Work in progress" },
  { id: 2, title: "Waiting for validation" },
  { id: 3, title: "Complete" },
];

// Tabela ticketów
let Tickets: Ticket[] = [];

function App() {
  const [tickets, setTickets] = useState<Ticket[]>(Tickets);
  const [elementId, setElementId] = useState<number>();
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const element = event.target as HTMLElement;
    setElementId(parseInt(element.id));
    console.log(element.id);
  };
  const handleSubmit = () => {
    Tickets.push({
      id: Tickets.length,
      title: inputValue1,
      description: inputValue2,
      zoneId: elementId,
    });
    setInputValue1("");
    setInputValue2("");
  };
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    const currentZoneId = active.id as number;
    const newZoneId = over.id as Ticket["zoneId"];

    setTickets(() =>
      tickets.map((ticket) =>
        ticket.id === currentZoneId
          ? {
              ...ticket,
              zoneId: newZoneId,
            }
          : ticket
      )
    );
  }

  return (
    <div className="container text-center">
      <div className="row">
        <DndContext onDragEnd={handleDragEnd}>
          {ZONES.map((zone, index) => {
            return (
              <Column
                key={zone.id}
                zone={zone}
                tickets={tickets.filter((ticket) => ticket.zoneId === zone.id)}
                value1={inputValue1}
                value2={inputValue2}
                onChange1={setInputValue1}
                onChange2={setInputValue2}
                submitHandler={handleSubmit}
                submitId={index.toString()}
                clickHandler={handleClick}
              ></Column>
            );
          })}
        </DndContext>
      </div>
    </div>
  );
}

export default App;
