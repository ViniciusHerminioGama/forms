import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './styles.css';
import banner from './images/indiqueeganhe.png'; // Importe a imagem aqui

const FormularioContato = () => {
  const [nome, setNome] = useState('');
  const [cpf, setcpf] = useState('');
  const [nomeAmigo, setnomeAmigo] = useState('');
  const [cpfAmigo, setcpfAmigo] = useState('');
  const [cidadeAmigo, setcidadeAmigo] = useState('');
  const [enderecoAmigo, setenderecoAmigo] = useState('');
  const [whatsappAmigo, setwhatsappAmigo] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmailMessage', 'template_s0n3fmq', e.target, 'ieaebn5vLF1l8PvsY')
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
            <label htmlFor="nome">Nome do cliente oxente:</label>
            <input type="text" id="nome" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />

            <label htmlFor="cpf">CPF do cliente oxente:</label>
            <input type="text" id="cpf" name="cpf" value={cpf} onChange={(e) => setcpf(e.target.value)} required />

            <label htmlFor="nomeAmigo">Nome do Amigo que irá indicar:</label>
            <input type="text" id="nomeAmigo" name="nomeAmigo" value={nomeAmigo} onChange={(e) => setnomeAmigo(e.target.value)} required />

            <label htmlFor="cpfAmigo">CPF do Amigo que irá indicar:</label>
            <input type="number" id="cpfAmigo" name="cpfAmigo" value={cpfAmigo} onChange={(e) => setcpfAmigo(e.target.value)} required />

            <label htmlFor="cidadeAmigo">Cidade em que o Amigo que irá indicar reside:</label>
            <input type="text" id="cidadeAmigo" name="cidadeAmigo" value={cidadeAmigo} onChange={(e) => setcidadeAmigo(e.target.value)} required />

            <label htmlFor="enderecoAmigo">Endereço do Amigo que irá indicar:</label>
            <input type="text" id="enderecoAmigo" name="enderecoAmigo" value={enderecoAmigo} onChange={(e) => setenderecoAmigo(e.target.value)} required />
            
            <label htmlFor="whatsappAmigo">Whatsapp do Amigo que irá indicar:</label>
            <input type="enderecoAmigo" id="whatsappAmigo" name="whatsappAmigo" value={whatsappAmigo} onChange={(e) => setwhatsappAmigo(e.target.value)} required />

            <label htmlFor="mensagem">Mensagem (opcional):</label>
            <textarea id="mensagem" name="mensagem" value={mensagem} onChange={(e) => setMensagem(e.target.value)} rows="4"></textarea>

            <button type="submit">Enviar Indicação</button>
          </>
        )}
      </form>
    </div>
  );
};

export default FormularioContato;
