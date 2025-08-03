export interface Ticket {
  id: number;
  title: string;
  description: string;
  zoneId: number | undefined;
}
export interface Zone {
  id: number;
  title: string;
}