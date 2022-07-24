import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

const ComponentContact = ({ contact }) => {
  return (
    <div>
      <h2>Nombre { contact.name }</h2>
      <h2>Apellido: { contact.lastName }</h2>
      <h2>Email: { contact.email }</h2>
      <h2>Conectado: { contact.connected ? 'Contacto En Línea' : 'Contacto No Disponible' }</h2>
    </div>
  )
}

ComponentContact.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ComponentContact

