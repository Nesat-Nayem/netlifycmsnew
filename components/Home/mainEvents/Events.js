import Event from "./Event";

const events = ({ events }) => {
  return (
    <div className="py-5">
      <h1 className="text-4xl font-bold text-white "> Events </h1>
      <div className="py-4 rounded grid xl:grid-cols-1 md:grid-cols-1 grid-cols-1">
        {events.map((event) => (
          <Event key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default events;
