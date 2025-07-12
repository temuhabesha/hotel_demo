import React from 'react'
import ContactBanner from '../../Components/Contact/ContactBanner'
import ContactDetails from '../../Components/Contact/ContactDetails/ContactDetails'
import ContactForm from '../../Components/Contact/ContactForm/ContactForm'
import GoogleMapEmbed from '../../Components/Contact/GoogleMapEmbed/GoogleMapEmbed'
import ContactCTA from '../../Components/ContactCTA/ContactCTA'

const Contact = () => {
  return (
    <div>
      <ContactBanner/>
      <ContactDetails/>
      <ContactForm/>
      <GoogleMapEmbed/>
      <ContactCTA/>
    </div>
  )
}

export default Contact
