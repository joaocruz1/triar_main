import Header from "../assets/Header";

const Home = () =>{
    return(
        <Header
        logoUrl="/img/logo-triar.png"
        actionButtons={[
          { label: "Fale Conosco", url: "/contact" },
          { label: "Nossas Serviços", url: "/services" }
        ]}
      />
    )

}

export default Home