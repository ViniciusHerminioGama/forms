import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './styles.css';
import banner from './images/indiqueeganhe.png'; // Importe a imagem aqui

const FormularioContato = () => {
  const [nome, setNome] = useState('');
  const [cidade, setcidade] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [whatsapp, setwhatsapp] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', e.target, 'SEU_USER_ID')
      .then((result) => {
        console.log(result.text);
        setEnviado(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="container">
      <div className="image-container"> {/* Div que contém a imagem */}
        <img src={banner} alt="Minha Imagem" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
      <h2>Indique um Amigo e Ganhe</h2>
      <form onSubmit={handleSubmit} className="form">
        {enviado ? (
          <p className="success-message">Obrigado! Sua indicação foi enviada com sucesso.</p>
        ) : (
          <>
            <label htmlFor="nome">Seu Nome Completo:</label>
            <input type="text" id="nome" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />

            <label htmlFor="cidade">Cidade em que reside:</label>
            <input type="text" id="cidade" name="cidade" value={cidade} onChange={(e) => setcidade(e.target.value)} required />

            <label htmlFor="nome">Whatsapp (Com DDD EX: 8700000000):</label>
            <input type="text" id="whatsapp" name="whatsapp" value={whatsapp} onChange={(e) => setwhatsapp(e.target.value)} required />

            <label htmlFor="nomeAmigo">Nome do Amigo que indicou:</label>
            <input type="text" id="nomeAmigo" name="nomeAmigo" required />

            <label htmlFor="emailAmigo">CPF do Amigo que indicou:</label>
            <input type="email" id="emailAmigo" name="emailAmigo" required />

            <label htmlFor="mensagem">Mensagem de observação (opcional):</label>
            <textarea id="mensagem" name="mensagem" value={mensagem} onChange={(e) => setMensagem(e.target.value)} rows="4"></textarea>

            <button type="submit">Enviar Indicação</button>
          </>
        )}
      </form>
    </div>
  );
};

export default FormularioContato;