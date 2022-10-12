import React from "react";
import Header from "../../Components/Header";
import Card from "../../Components/Card";
import Footer from "../../Components/Footer";
import "./index.css";

function index() {
  return (
    <div className="app-home">
      <div className="bg-image"></div>
      <Header />

      <main>
        <h2>Cambridge</h2>
        <section className="card-container">
          <div className="card-item">
            <Card
              text="Atendimentos de qualidade, como você merece."
              image="https://retail.momentum.co.za/images/stock/hello-doctor-section-1-1.jpg"
            />
          </div>
          <div className="card-item">
            <Card
              text="Equipamentos de ponta."
              image="https://epomedicine.com/wp-content/uploads/2020/08/medical.jpg"
            />
          </div>
          <div className="card-item">
            <Card
              text="Possuímos os melhores colaboradores do Brasil."
              image="https://images.unsplash.com/photo-1638202993928-7267aad84c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvY3RvcnxlbnwwfHwwfHw%3D&w=1000&q=80"
            />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default index;
