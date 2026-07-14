import { Metadata } from "next";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import Contact from "../../../components/section/Contact";

export const metadata: Metadata = {
  title: "Jagdish Portfolio | Contact Me",
  description: "Get in touch with me",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <Contact />
      <Footer showContactCard={false} />
    </main>
  );
}
