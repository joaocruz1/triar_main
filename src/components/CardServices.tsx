import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/servicescard.css'; 

interface ServiceCardProps {
  id: number;
  title: string;
  description: string;
  icon: string;
  onHover: (id: number | null) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, description, icon, onHover }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/services/${id}`);
  };

  return (
    <div 
      className="service-card" 
      onClick={handleClick}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="service-card__icon">{icon}</div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__description">{description}</p>
    </div>
  );
};

const serviceData = [
  { id: 1, title: 'Consultoria Contábil', description: 'Oferecemos consultoria...', icon: '📈' },
  { id: 2, title: 'Planejamento Tributário', description: 'Estratégias eficazes...', icon: '💼' },
  { id: 3, title: 'Auditoria e Compliance', description: 'Auditorias detalhadas...', icon: '🔍' },
  { id: 4, title: 'Contabilidade Geral', description: 'Serviços completos...', icon: '📊' },
];

const CardServices: React.FC = () => {
  const [hoveredServiceId, setHoveredServiceId] = useState<number | null>(null);

  return (
    <div className="services-section">
      {serviceData.map((service) => (
        <ServiceCard
          key={service.id}
          id={service.id}
          title={service.title}
          description={service.description}
          icon={service.icon}
          onHover={setHoveredServiceId}
        />
      ))}
    </div>
  );
};

export default CardServices;
