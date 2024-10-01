import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PickleballEvent } from "../services/events-service";

import { useParams } from "react-router-dom";
import { lalaGetEvent } from "../services/events-service";
import { MainLayout } from "../templates/HomeTemplate";

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
      <MainLayout>
        {/* <p>{pickleEvent?.name}</p>
      <p>{pickleEvent?.location}</p> */}
        {/* hero */}
        <div className="h-screen">
          <div
            className="hero h-1/2"
            style={{
              backgroundImage: `url(${pickleEvent?.mainImageSrc})`,
            }}
          >
            <div className="hero-overlay bg-opacity-30 "></div>
            <div className="hero-content text-neutral-content text-center pt-20 pb-20">
              <div className="max-w-md">
                <h1
                  className="mb-5 pb-15  text-5xl font-bold text-white"
                  style={{
                    color: "#ffffff", // Sets the text color to white
                    textShadow:
                      "0 0 3px rgba(43, 43, 43, 0.5), 0 0 6px rgba(2, 2, 2, 0.3)", // Subtler glow
                  }}
                >
                  {pickleEvent?.name}
                </h1>
                <h2
                  className="mb-5 text-4xl text-white"
                  style={{
                    color: "#ffffff", // Sets the text color to white
                    textShadow:
                      "0 0 3px rgba(43, 43, 43, 0.5), 0 0 6px rgba(2, 2, 2, 0.3)", // Subtler glow
                  }}
                >
                  in {pickleEvent?.city}
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* end of hero */}
      </MainLayout>
    </div>
    // claudia to move MainLayout to new component and rename HomeTemplate to HomePage
  );
}

export default EventPage;
