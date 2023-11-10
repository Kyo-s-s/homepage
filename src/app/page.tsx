import Profile from "./_components/Profile";
import Award from "./_components/Award";
import Affiliation from "./_components/Affiliation";
import Contact from "./_components/Contact";
import Works from "./_components/Works";

export default function Home() {
  return (
    <>
      <Profile />
      <Affiliation />
      <Award />
      <Works />
      <Contact />
    </>
  );
}
