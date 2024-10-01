import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listEvents, PickleballEvent } from "../services/events-service";
import ErrorPage from "../Pages/ErrorPage";
import { MainLayout } from "../templates/HomeTemplate";

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
      <MainLayout>
        <h2 className="text-5xl font-extrabold text-gray-100 text-center mt-20 mb-10">
          Upcoming Events
        </h2>
        <ul>
          <div className="flex justify-center mt-8 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {pickleballEvents.map((event: PickleballEvent) => (
                <>
                  {/* <li key={event.id}>
              <h3>{event.name}</h3>
              <p>{event.location}</p>
            </li> */}
                  <div
                    className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-50 cursor-pointer hover:shadow-xl hover:bg-gray-100 transition-shadow duration-300 ease-in-out"
                    onClick={() => navigate(`events/${event.id}`)}
                  >
                    <img
                      className="w-full"
                      src={event.mainImageSrc}
                      alt="sports"
                    />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2 text-gray-900">
                        {event.name}
                      </div>
                      <p className="text-gray-700 text-base">
                        {event.aboutEvent}
                      </p>
                    </div>
                    <div className="px-6 pt-4 pb-2 flex justify-between">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {event.city}
                      </span>
                      {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                  </span> */}
                      <span className="inline-block bg-pink-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {event.date}
                      </span>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </ul>
      </MainLayout>
    </div>
  );
}

export default ListOfEvents;
