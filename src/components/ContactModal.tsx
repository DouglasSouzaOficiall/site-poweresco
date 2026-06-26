import React, { useState } from 'react';
import { X, Send, Phone, Mail, MapPin } from 'lucide-react';
import './ContactModal.css';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: 'Interesse em soluções de Eficiência Energética',
    mensagem: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.nome.trim()) newErrors.nome = 'Nome é obrigatório.';
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido.';
    }
    if (!formData.mensagem.trim()) newErrors.mensagem = 'Mensagem é obrigatória.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Build the mailto link parameters
    const subject = encodeURIComponent(`Contato Site: ${formData.assunto}`);
    const body = encodeURIComponent(
      `Nome: ${formData.nome}\n` +
      `E-mail: ${formData.email}\n` +
      `Telefone: ${formData.telefone}\n\n` +
      `Mensagem:\n${formData.mensagem}`
    );

    window.location.href = `mailto:contato@poweresco.com.br?subject=${subject}&body=${body}`;
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
      // Reset form
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        assunto: 'Interesse em soluções de Eficiência Energética',
        mensagem: ''
      });
    }, 2000);
  };

  return (
    <div className="contact-overlay" onClick={onClose}>
      <div className="contact-card animate-scale-in" onClick={(e) => e.stopPropagation()}>
        <button className="contact-close-btn" onClick={onClose} aria-label="Fechar">
          <X size={22} />
        </button>

        <div className="contact-layout">
          {/* Left panel: Info */}
          <div className="contact-info-panel">
            <h3 className="info-title">Vamos construir soluções juntos?</h3>
            <p className="info-desc">
              Entre em contato conosco para solicitar um diagnóstico energético ou saber mais sobre nossos projetos.
            </p>

            <div className="info-items">
              <div className="info-item">
                <Phone className="info-icon" size={20} />
                <div>
                  <h4>Telefone</h4>
                  <p>(19) 3571-0000</p>
                </div>
              </div>

              <div className="info-item">
                <Mail className="info-icon" size={20} />
                <div>
                  <h4>E-mail</h4>
                  <p>contato@poweresco.com.br</p>
                </div>
              </div>

              <div className="info-item">
                <MapPin className="info-icon" size={20} />
                <div>
                  <h4>Localização</h4>
                  <p>Rua Federação Paulista de Futebol, 799 - São Paulo/SP</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel: Form */}
          <div className="contact-form-panel">
            {success ? (
              <div className="success-message">
                <h3>Mensagem Preparada!</h3>
                <p>O seu cliente de e-mail foi aberto para concluir o envio da mensagem. Obrigado!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="nome">Nome Completo</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className={errors.nome ? 'error' : ''}
                    placeholder="Seu nome"
                  />
                  {errors.nome && <span className="error-text">{errors.nome}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">E-mail Corporativo</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'error' : ''}
                      placeholder="nome@empresa.com"
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="telefone">Telefone / WhatsApp</label>
                    <input
                      type="text"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="assunto">Assunto</label>
                  <select
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                  >
                    <option value="Interesse em soluções de Eficiência Energética">Eficiência Energética</option>
                    <option value="Projetos de Educação e Sustentabilidade">Educação e Conscientização</option>
                    <option value="Engajamento Comunitário & ESG">Engajamento Comunitário & ESG</option>
                    <option value="Parceria de Negócios / Concessionárias">Parcerias e Concessionárias</option>
                    <option value="Outros assuntos">Outros assuntos</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="mensagem">Como podemos ajudar?</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    className={errors.mensagem ? 'error' : ''}
                    rows={4}
                    placeholder="Descreva brevemente a sua necessidade..."
                  ></textarea>
                  {errors.mensagem && <span className="error-text">{errors.mensagem}</span>}
                </div>

                <button type="submit" className="btn-primary-orange w-full">
                  Enviar Mensagem <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
