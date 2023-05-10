import { useSelector } from "react-redux";
import EventCard from "../components/Events/EventCard";
import Header from "../components/Layout/Header";
// import Loader from "../components/Layout/Loader";

function EventsPage() {
  // const { allEvents, isLoading } = useSelector((state) => state.events);
  return (
    <>
      {/* {isLoading ? (
        <Loader />
      ) : ()} */}
      <div>
        <Header activeHeading={4} />
        <EventCard active={true} />
        <EventCard active={true} />
        {/* <EventCard active={true} data={allEvents && allEvents[0]} /> */}
      </div>
    </>
  );
}

export default EventsPage;
