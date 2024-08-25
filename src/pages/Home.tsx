import Header from "../assets/Header";

const Home = () => {
  return (
    <Header
      logoUrl="/img/logo-triar.png"
      actionButtons={[
        {
          label: "Fale Conosco",
          url: "/contact",
          dropdownItems: [
            { label: "Email", url: "/contact/email" },
            { label: "Telefone", url: "/contact/phone" }
          ]
        },
        {
          label: "Nossas Serviços",
          url: "/services",
          dropdownItems: [
            { label: "Consultoria", url: "/services/consulting" },
            { label: "Auditoria", url: "/services/audit" }
          ]
        },
        {
          label: "Quem Somos",
          url: "/info"
        }
      ]}
    />
  );
};

export default Home;
