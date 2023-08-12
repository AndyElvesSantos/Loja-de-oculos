import Capa from "../SecaoCapa/capa";
import SecaoProduto from "../SecaoProduto/SecaoProduto";
import SecaoSobre from "../SecaoSobre/SecaoSobre";
import SecaoContato from "../SecaoContato/SecaoContato";
import Rodape from "../Rodapé/rodapé";

export default function Index() {
  return (
    <div>
      <main>
        <Capa />
        <SecaoProduto />
        <SecaoSobre />
        <SecaoContato />
        <Rodape />
      </main>
    </div>
  );
}
