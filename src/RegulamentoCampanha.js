// RegulamentoCampanha.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Importe seus estilos CSS aqui

const RegulamentoCampanha = () => {
  return (
    <div className="regulamento-container">
      <h2>Regulamento Campanha indique um amigo e ganhe desconto</h2>
      <p>Data: 25.03.2024</p>
      <p>Promoção Indique amigo e ganhe desconto em sua mensalidade.</p>
      <ol>
        <li>A campanha de indicação só é válida para clientes pessoa física ativos e adimplentes.</li>
        <li>A promoção só é válida a partir do dia 01 de abril de 2024, por tempo indeterminado, até que a empresa comunique o encerramento da mesma;</li>
        <li>O assinante Oxente.net que indicar um amigo e este aderir aos nossos serviços no prazo de até 30 dias após a indicação, receberá desconto de 50% (o valor do desconto é limitado a R$50,00) do valor da sua mensalidade. O benefício será concedido na primeira mensalidade posterior ao primeiro pagamento feito pelo amigo indicado já como assinante.</li>
        <li>O número de indicações é ilimitada, porém os descontos são limitados ao valor concedido por 1 (uma) indicação por mês, com limite de R$50,00;</li>
        <li>O desconto gerado é para o titular do contrato, indicado no formulário, não podendo ser transferido para outro cliente;</li>
        <li>Não é permitido ressarcimento em valor (dinheiro) ao cliente, o benefício é apenas desconto em mensalidades e limitado ao serviço de conexão à internet;</li>
      </ol>
      <Link to="/" className="voltar-link">Voltar à página principal</Link>
    </div>
  );
};

export default RegulamentoCampanha;
