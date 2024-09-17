import Hero from "../Hero/Hero";
import EventsGrid from "../Sections/EventsGrid";
import ListOfEvents from "../ListOfEvents/ListOfEvents";

function HomeTemplate() {
  return (
    <>
      <Hero />
      <EventsGrid />
      {/* <ListOfEvents /> */}
    </>
  );
}

export default HomeTemplate;
