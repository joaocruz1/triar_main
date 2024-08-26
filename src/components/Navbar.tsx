import Header from "../assets/Header";


const Navbar = () => {
  return (
    <Header
      logoUrl="/img/logo-triar.png"
      actionButtons={[
        {
          label: "Para sua Empresa!",
          url: "/foryou",
          dropdownItems: [
            { label: "Lucro Real", img:"/img/lucro_real.png", url: "/foryou/lucroreal" },
            { label: "Lucro Presumido",img:"", url: "/foryou/lucropresumido" },
            { label: "Simples Nacional",img:"/img/simples-nacional1.png", url:"/foryou/simplesnacional"},
            { label:"Regime Especial",img:"", url:"/contact/regimeespecial"}
          ]
        },
        {
          label: "Nossas Serviços",
          url: "/services",
          dropdownItems: [
            { label: "Consultoria",img:"", url: "/services/consulting" },
            { label: "Auditoria",img:"", url: "/services/audit" }
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

export default Navbar;
