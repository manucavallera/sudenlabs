// Número de WhatsApp de contacto. Cambiar solo acá.
export const WHATSAPP = '5493434907989'

export const waLink = (text) =>
  `https://wa.me/${WHATSAPP}` + (text ? `?text=${encodeURIComponent(text)}` : '')
