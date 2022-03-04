import Image from "next/image";

const EventDetails = ({ event }) => {
  return (
    <div>
      <h1 className="text-center py-4 font-bold md:text-4xl text-xl ">
        {" "}
        {event?.eventTitle}
      </h1>

      <p className="capitalize text-right py-2">
        {new Date(event?.eventDate).toDateString()}
      </p>

      <div className="flex justify-center mt-6">
        <Image width="500" height="400" src={event?.eventImage} alt="" />
      </div>
{/* event start here */}
      <p className="text-2xl text-center mt-14 font-bold">About This Event</p>
      <p className="py-5">{event?.eventDesc}</p>

      <p className="text-3xl text-center font-bold my-14">Speaker</p>

      <img className="roundedI mx-auto" src={event?.speakerImage} alt="" />

      <p className="text-center text-xl font-bold mt-3">{event?.speakerName}</p>
      <p className="text-center mb-5 ">{event?.speakerPosition}</p>
      <p className="mb-5">{event?.SpeakerBio}</p>

      <style jsx>{`
        .roundedI {
          width: 200px;
          height: 200px;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

export default EventDetails;
