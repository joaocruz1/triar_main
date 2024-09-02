import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para navegação
import '../styles/servicescard.css'; // Importa o arquivo CSS

// Define as propriedades do card de serviço
interface ServiceCardProps {
  id: number;
  title: string;
  description: string;
  icon: string;
}

// Componente de Card de Serviço
const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, description, icon }) => {
  const navigate = useNavigate(); // Hook para navegação

  const handleClick = () => {
    // Atualiza a URL com o ID do serviço
    navigate(`/services/${id}`);
  };

  return (
    <div className="service-card" onClick={handleClick}>
      <div className="service-card__icon">{icon}</div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__description">{description}</p>
    </div>
  );
};

// Dados de serviço (poderia ser passado como props se necessário)
const serviceData = [
  {
    id: 1,
    title: 'Consultoria Contábil',
    description: 'Oferecemos consultoria especializada para ajudar você a gerenciar suas finanças e otimizar seus impostos.',
    icon: '📈', // Pode usar uma imagem ou ícone
  },
  {
    id: 2,
    title: 'Planejamento Tributário',
    description: 'Estratégias eficazes para minimizar sua carga tributária e maximizar a eficiência fiscal.',
    icon: '💼',
  },
  {
    id: 3,
    title: 'Auditoria e Compliance',
    description: 'Auditorias detalhadas para garantir que suas práticas contábeis estejam em conformidade com as regulamentações.',
    icon: '🔍',
  },
  {
    id: 4,
    title: 'Contabilidade Geral',
    description: 'Serviços completos de contabilidade para manter suas finanças organizadas e transparentes.',
    icon: '📊',
  },
];

// Componente da Seção de Serviços
const CardServices: React.FC = () => (
  <div className="services-section">
    {serviceData.map((service) => (
      <ServiceCard
        key={service.id}
        id={service.id} // Passa o id para o ServiceCard
        title={service.title}
        description={service.description}
        icon={service.icon}
      />
    ))}
  </div>
);

export default CardServices;


