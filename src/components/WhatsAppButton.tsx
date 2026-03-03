import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => (
  <a
    href="https://wa.me/40742702982"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contact pe WhatsApp"
    className="fixed bottom-6 right-6 z-50 text-brand hover:text-brand/80 transition-colors"
  >
    <MessageCircle size={36} strokeWidth={1.5} />
  </a>
);

export default WhatsAppButton;
