import React from 'react'

const LocationSection = () => {
  return (
    <div className="fz-contact-location-map">
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.40266361037!2d76.89755067525164!3d43.26393937752151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3883695f39f20419%3A0x3d243f5a80a1c81f!2sMaxima!5e0!3m2!1sen!2skz!4v1710598552586!5m2!1sen!2skz" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
  )
}

export default LocationSection