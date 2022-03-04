import Head from "next/head";
// import EventDetails from "../../components/event/EventDetails";
// import EventDetails from "../../components/EventDetails";
import EventDetails from "../../components/Home/mainEvents/EventDetails";


const Details = ({ event }) => {
  console.log(event);
  return (
    <div className="md:w-9/12 w-11/12 mx-auto">
      <Head>
        <title>{event?.eventTitle}</title>
        <meta name="event" content="event details" />
      </Head>

      <EventDetails event={event} />
    </div>
  );
};

export default Details;

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://secure-falls-14127.herokuapp.com/events/${context.params.id}`
  );
  const event = await res.json();

  return {
    props: {
      event,
    },
  };
};
