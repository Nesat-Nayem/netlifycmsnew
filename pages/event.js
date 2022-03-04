import Events from "../components/Home/mainEvents/Events";
import Header from "../components/Shared/Header/Header";

const event = ({events}) => {
    return (
        <div>
           <Header />
            <Events events={events} />
        </div>
    );
};

export default event;


export const getServerSideProps = async () => {
    const res = await fetch("https://secure-falls-14127.herokuapp.com/events");
    const events = await res.json();
  
    return {
      props: {
        events,
      },
    };
  };
  