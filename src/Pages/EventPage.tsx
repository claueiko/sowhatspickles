import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PickleballEvent } from "../services/events-service";

import { useParams } from "react-router-dom";
import { getEvent, lalaGetEvent } from "../services/events-service";

function EventPage() {
  const { id } = useParams();

  const [pickleEvent, setPickleEvent] = useState<PickleballEvent | undefined>();
  let navigate = useNavigate();
  if (!id) navigate("/error");
  console.log(id);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        if (!id) return;
        const event = await lalaGetEvent(id);
        setPickleEvent(event);
      } catch (error) {
        console.error(error);
        navigate("/error");
      }
    };
    fetchEvent();
  }, []);

  return (
    <div>
      <p>{pickleEvent?.name}</p>
      <p>{pickleEvent?.location}</p>
    </div>
  );
}

export default EventPage;
