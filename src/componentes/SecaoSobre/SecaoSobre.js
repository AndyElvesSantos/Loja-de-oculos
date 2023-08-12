export default function SecaoSobre() {
  return (
    <section id="sobre" className="SecaoSobre">
      <div className="limitar-secao">
        <h2>QUEM SOMOS NÓS?</h2>
        <p>
          Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida
          iniciou suas atividades focada no atendimento ao público de renda mais
          baixa, sempre com o objetivo de proporcionar ao cliente bom
          atendimento, qualidade e preço baixo.{" "}
        </p>
        <div className="box-cards">
          <img src="assets/loja.png"></img>
          <div className="TextoCard">
            <h3>NOSSAS FILIAIS</h3>
            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
          </div>
          <div className="TextoCard">
            <h3>ATENDIMENTO FLEXÍVEL</h3>
            <p>Nossa equipe possui treinamento para te atender</p>
          </div>
          <img src="assets/atendimento.png"></img>
        </div>
      </div>
    </section>
  );
}
