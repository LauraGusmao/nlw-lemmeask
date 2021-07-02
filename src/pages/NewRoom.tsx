import React from 'react';
import { Link } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/Button';
import illustrationImg from '../images/illustration.svg';
import logo from '../images/lemme.svg';
import '../styles/auth.scss';

export function NewRoom() {
  // const { user } = useAuth();

  return (
    <div id="page-auth">
      <aside>
        <img src={ illustrationImg } alt="Ilustração da capa" />
        <strong>Toda pergunta tem uma resposta.</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>
      <main>
        <div className="main-content">
          <img className="logo" src={ logo } alt="Logo Lemmeask" />
          <h2>Criar uma nova sala</h2>
          <form>
            <input
              type="text"
              placeholder="Nome da sala"
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>Quer entrar em uma sala existente? <Link to="/">clique aqui</Link></p>
        </div>
      </main>
    </div>
  );
}