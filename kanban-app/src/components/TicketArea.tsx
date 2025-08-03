import { useDraggable } from "@dnd-kit/core";
import type { Ticket } from "./types";

interface Props {
  ticket: Ticket;
}

function TicketArea({ ticket }: Props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: ticket.id,
  });

  const position = transform
    ? {
        transform: "translate(${transform.x}px, ${transform.y}px)",
      }
    : undefined;
  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={position}
      className="ticketArea"
    >
      <h5 className="ticketTitle">{ticket.title}</h5>
      <p className="ticketDescription">{ticket.description}</p>
    </div>
  );
}

export default TicketArea;
