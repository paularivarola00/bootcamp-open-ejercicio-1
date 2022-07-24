import React from 'react'
import { Contact } from '../../models/contact.class'
import ComponentContact from '../pure/componentContact'

export const ContactListComponent = () => {
    const defaultContact = new Contact('Paula', 'Rivarola', 'paularivarola02@gmail.com', false)
  return (
    <div>
        <h1>Contactos</h1>
        <div>
            <ComponentContact contact={defaultContact} />
        </div>
    </div>
  )
}


