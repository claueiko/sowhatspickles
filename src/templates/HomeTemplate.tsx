import Hero from "../Hero/Hero";
import EventsGrid from "../Sections/EventsGrid";
import ListOfEvents from "../ListOfEvents/ListOfEvents";
import Header from "../templates/Header";
import { ReactElement, ReactNode } from "react";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header /> {children}
    </>
  );
};

function HomeTemplate() {
  return (
    <>
      <MainLayout>
        <Hero />

        <ListOfEvents />
      </MainLayout>
      {/* <EventsGrid /> */}
    </>
  );
}

export default HomeTemplate;
