import ContactForm from "./ContactForm";
import Section from "./Section";
import TitleSection from "./TitleSection";

const Contact = () => {
  return (
    <Section id="contact">
      <TitleSection>Contact me</TitleSection>
      <ContactForm />
    </Section>
  );
};

export default Contact;
