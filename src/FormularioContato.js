import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importar o Link do react-router-dom
import emailjs from 'emailjs-com';
import './styles.css';
import banner from './images/indiqueeganhe.png'; // Importar a imagem aqui

const FormularioContato = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [nomeAmigo, setNomeAmigo] = useState('');
  const [cidadeAmigo, setCidadeAmigo] = useState('');
  const [enderecoAmigo, setEnderecoAmigo] = useState('');
  const [whatsappAmigo, setWhatsappAmigo] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [enviado, setEnviado] = useState(false);

  const formatarCPF = (value) => {
    return value
      .replace(/\D/g, '') // Remove caracteres não numéricos
      .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o terceiro dígito
      .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o sexto dígito
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona traço antes dos últimos dois dígitos
  };

  const formatarTelefone = (value) => {
    return value
      .replace(/\D/g, '') // Remove caracteres não numéricos
      .replace(/(\d{2})(\d)/, '($1) $2') // Adiciona parênteses ao redor dos dois primeiros dígitos
      .replace(/(\d{5})(\d)/, '$1-$2'); // Adiciona traço após os cinco primeiros dígitos
  };

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
      <div className="image-container">
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
            <input type="text" id="cpf" name="cpf" value={formatarCPF(cpf)} onChange={(e) => setCpf(e.target.value)} maxLength={14} required />

            <label htmlFor="nomeAmigo">Nome do Amigo que irá indicar:</label>
            <input type="text" id="nomeAmigo" name="nomeAmigo" value={nomeAmigo} onChange={(e) => setNomeAmigo(e.target.value)} required />

            <label htmlFor="cidadeAmigo">Cidade em que o Amigo que irá indicar reside:</label>
            <input type="text" id="cidadeAmigo" name="cidadeAmigo" value={cidadeAmigo} onChange={(e) => setCidadeAmigo(e.target.value)} required />
            
            <label htmlFor="whatsappAmigo">Whatsapp do Amigo que irá indicar:</label>
            <input type="text" id="whatsappAmigo" name="whatsappAmigo" value={formatarTelefone(whatsappAmigo)} onChange={(e) => setWhatsappAmigo(e.target.value)} maxLength={15} required />

            <label htmlFor="mensagem">Mensagem (opcional):</label>
            <textarea id="mensagem" name="mensagem" value={mensagem} onChange={(e) => setMensagem(e.target.value)} rows="4"></textarea>

            <button type="submit">Enviar Indicação</button>
          </>
        )}
      </form>
      <Link to="/regulamento" className="regulamento-link">Regulamento indique e ganhe</Link>
    </div>
  );
};

export default FormularioContato;
