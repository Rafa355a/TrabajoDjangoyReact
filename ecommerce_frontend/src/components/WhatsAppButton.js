// src/components/WhatsAppButton.js
import React from 'react';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

const WhatsAppButton = () => {
  return (
    <WhatsAppWidget
      phoneNumber="+51990675577" // Reemplaza con tu número de WhatsApp
      companyName="InnovaTec"
      message="Hola! ¿Cómo podemos ayudarte?"
      iconSize="50"
      widgetWidth="300px"
      widgetWidthMobile="260px"
      buttonStyle={{ backgroundColor: '#25D366', right: '20px', bottom: '20px' }}
    />
  );
};

export default WhatsAppButton;
