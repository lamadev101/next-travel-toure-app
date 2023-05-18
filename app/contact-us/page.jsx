import { Banner, Container } from "@/components"
import ContactInfo from "@/sections/contact-us/ContactInfo"

const ContactUs = () => {
  return (
    <main>
      <Banner
        title="Contact Us"
        bgImg="https://images.unsplash.com/photo-1544442069-97dded965a9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
      />

      
      <Container>
        <ContactInfo />
      </Container>
    </main>
  )
}

export default ContactUs