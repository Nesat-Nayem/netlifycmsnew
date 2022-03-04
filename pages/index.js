import Head from "next/head";
import HeroArea from "../components/Home/HeroArea/HeroArea";
import Events from "../components/Home/mainEvents/Events";
import Header from "../components/Shared/Header/Header";

export default function Home({ events }) {
  console.log(events);
  return (
    <div className="md:9/12 w-11/12 mx-auto">
      <Head>
        <title>Netlify CMS</title>
        <meta name="keyword" content="netlify cms" />
      </Head>

      <Header />
      <HeroArea />

      <Events events={events} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("https://secure-falls-14127.herokuapp.com/events");
  const events = await res.json();

  return {
    props: {
      events,
    },
  };
};
