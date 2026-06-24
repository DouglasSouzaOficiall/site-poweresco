import React from 'react';
import { X } from 'lucide-react';
import './PrivacyPolicyModal.css';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="policy-overlay" onClick={onClose}>
      <div className="policy-card animate-scale-in" onClick={(e) => e.stopPropagation()}>
        <header className="policy-header">
          <h2>Política de Privacidade</h2>
          <button className="policy-close-btn" onClick={onClose} aria-label="Fechar">
            <X size={22} />
          </button>
        </header>

        <div className="policy-body">
          <p className="policy-date">Última atualização: Junho de 2026</p>
          
          <div className="policy-text">
            <h3>1. Introdução</h3>
            <p>A Poweresco valoriza a sua privacidade e está comprometida em proteger os seus dados pessoais. Esta Política de Privacidade descreve como coletamos, usamos e protegemos as suas informações quando você utiliza nosso site e serviços.</p>

            <h3>2. Coleta de Dados</h3>
            <p>Coletamos informações que você nos fornece diretamente, como nome, e-mail, telefone e estado, quando você preenche formulários em nosso site. Também podemos coletar automaticamente dados de navegação para melhorar a experiência do usuário.</p>

            <h3>3. Uso das Informações</h3>
            <p>As informações coletadas são utilizadas exclusivamente para:</p>
            <ul>
              <li>Responder às suas solicitações, dúvidas ou reclamações;</li>
              <li>Apresentar propostas comerciais e oportunidades de carreira;</li>
              <li>Melhorar continuamente o conteúdo e a navegabilidade do nosso site.</li>
            </ul>

            <h3>4. Compartilhamento de Dados</h3>
            <p>A Poweresco não vende, aluga ou compartilha seus dados pessoais com terceiros não autorizados. Os dados poderão ser compartilhados apenas com prestadores de serviços essenciais à nossa operação, sempre sob rigorosos acordos de confidencialidade, ou se exigido por lei.</p>

            <h3>5. Segurança</h3>
            <p>Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso, alteração, divulgação ou destruição não autorizada.</p>

            <h3>6. Seus Direitos</h3>
            <p>Você tem o direito de solicitar o acesso, a correção ou a exclusão dos seus dados pessoais armazenados por nós a qualquer momento. Para exercer esses direitos, entre em contato através do nosso canal oficial.</p>

            <h3>7. Contato</h3>
            <p>Se tiver dúvidas sobre nossa Política de Privacidade, por favor utilize o formulário de "Fale Conosco" disponível no site.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
