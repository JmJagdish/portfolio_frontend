import { Metadata } from "next";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import AboutMe from "../../../components/section/AboutMe";

export const metadata: Metadata = {
  title: "Jagdish Portfolio | About Me",
  description: "About my experience and skills",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutMe />
      <Footer />
    </main>
  );
}
