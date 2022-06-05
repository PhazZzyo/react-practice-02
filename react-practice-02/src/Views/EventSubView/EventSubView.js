import { Link } from "react-router-dom";
import { useFetchEvent } from "../../Hooks/useFetchEvent";

const EventSubView = () => {
  const event = useFetchEvent();
  return (
    <>
      {!event && <h2>Loading ...</h2>}
      <h2>{event.name}</h2>
      <img src={event.images[0].url} alt={event.name}></img>
      <Link to="details">Details</Link>
    </>
  );
};

export default EventSubView;
