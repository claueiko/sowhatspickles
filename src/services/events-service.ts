export type PickleballEvent = {
  id: string;
  name: string;
  location: string;
};

const mockEvents: PickleballEvent[] = [
  { id: "1", name: "1 event", location: "at home" },
  { id: "2", name: "2 event", location: "at home" },
  { id: "3", name: "3 event", location: "at home" },
];

export const listEvents = async (): Promise<PickleballEvent[]> => {
  const response = await fetch("http://localhost:3001/events");
  // response.
  return response.json();
};

export const getEvent = (id: string): PickleballEvent | undefined => {
  return mockEvents.find((event) => event.id === id);
};
export const lalaGetEvent = async (id: string): Promise<PickleballEvent> => {
  const response = await fetch(`http://localhost:3001/events/${id}`);
  return response.json();
};
