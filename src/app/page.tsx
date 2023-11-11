import Profile from "./_components/Profile";
import Award from "./_components/Award";
import Affiliation from "./_components/Affiliation";
import Contact from "./_components/Contact";
import Skills from "./_components/Skills";

export default function Home() {
  return (
    <>
      <Profile />
      <Affiliation />
      <Award />
      <Skills />
      <Contact />
    </>
  );
}
