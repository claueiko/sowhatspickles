import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listEvents, PickleballEvent } from "../services/events-service";
import ErrorPage from "../Pages/ErrorPage";

function ListOfEvents() {
  const [pickleballEvents, setPickleballEvents] = useState<PickleballEvent[]>(
    []
  );
  // const [error, setError] = useState(false);
  let navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const list = await listEvents();
        setPickleballEvents(list);
        // const list = await listEvents();
        // setPickleballEvents(list);
      } catch (error) {
        console.error(error);
        navigate("/error");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Events</h2>
      <ul>
        {pickleballEvents.map((event: PickleballEvent) => (
          <li key={event.id}>
            <h3>{event.name}</h3>
            <p>{event.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListOfEvents;
