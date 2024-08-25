import Header from "../assets/Header";

const Home = () =>{
    return(
        <Header
        logoUrl="/img/logo-triar.png"
        actionButtons={[
          { label: "Fale Conosco", url: "/contact" },
          { label: "Nossas Serviços", url: "/services" },
          { label: "Quem somos", url: "/info"}
        ]}
      />
    )

}

export default Home