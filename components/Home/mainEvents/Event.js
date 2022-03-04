import Image from "next/image";
import Link from "next/link";

const event = ({ event }) => {
  const eventTitle = event?.eventTitle.slice(0, 30);
  const eventDesc = event?.eventDesc.slice(0, 150);

  return (
    <Link href={`/event/${event._id}`}>
      <a className="cursor-pointer flex transition-shadow duration-300 items-center hover:shadow-xl py-2 px-4 m-3 rounded group">
        <div>
          <Image
            className="rounded grid grid-cols-4 w-full  transition duration-300 transform group-hover:scale-125 group-hover:animate-pulse"
            width="400"
            height="300"
            src={event?.eventImage}
            alt=""
          />
        </div>

        <div className="ml-6">
          <p className="mb-5">
            {new Date(event?.eventDate).toDateString()} - VIRTUAL EVENTS
          </p>
          <h1 className="text-xl font-serif pb-3 ">{eventTitle}</h1>
          <p className="text-sm w-11/12 leading-6 text-gray-500 pb-12 ">
            {eventDesc}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default event;
