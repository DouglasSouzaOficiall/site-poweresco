import React, { useState } from 'react';
import { X } from 'lucide-react';
import './ContactModal.css';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BRAZILIAN_STATES = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 
  'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 
  'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
];

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    state: '',
    subject: '',
    description: ''
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'description' && value.length > 100) return;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Send email using mailto as requested (temporary test email)
    const targetEmail = "douglassouzaoficiall@gmail.com";
    const mailSubject = `Contato via Site - ${formData.subject || 'Geral'}`;
    const mailBody = `
Nome: ${formData.name}
WhatsApp: ${formData.whatsapp}
E-mail: ${formData.email}
Estado: ${formData.state}
Assunto: ${formData.subject}

Mensagem:
${formData.description}
    `;

    window.location.href = `mailto:${targetEmail}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
    
    // Close modal after triggering mailto
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <h2 className="modal-title">Fale Conosco</h2>
        <p className="modal-subtitle">Preencha os dados abaixo e entraremos em contato.</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nome completo</label>
            <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="Seu nome" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="whatsapp">WhatsApp</label>
              <input type="tel" id="whatsapp" name="whatsapp" required value={formData.whatsapp} onChange={handleChange} placeholder="(00) 00000-0000" />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="seu@email.com" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="state">Localidade (Estado)</label>
              <select id="state" name="state" required value={formData.state} onChange={handleChange}>
                <option value="" disabled>Selecione seu estado</option>
                {BRAZILIAN_STATES.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Assunto</label>
              <select id="subject" name="subject" required value={formData.subject} onChange={handleChange}>
                <option value="" disabled>Selecione um assunto</option>
                <option value="vagas">Vagas</option>
                <option value="reclamacao">Reclamação</option>
                <option value="elogios">Elogios</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description">Descrição</label>
            <textarea 
              id="description" 
              name="description" 
              required 
              rows={3}
              value={formData.description} 
              onChange={handleChange} 
              placeholder="Descreva brevemente..."
            />
            <div className="char-count">
              {formData.description.length}/100 caracteres
            </div>
          </div>

          <button type="submit" className="btn-submit">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
