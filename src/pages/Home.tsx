import React from 'react';
import { useHistory } from 'react-router-dom';
import illustrationImg from '../images/illustration.svg'
import logo from '../images/lemme.svg'
import googleIcon from '../images/google-icon.svg'
import { Button } from '../components/Button';
import '../styles/auth.scss'

export function Home() {
  const history = useHistory()

  function navigateToNewRoom() {
    history.push('/rooms/new')
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração da capa" />
        <strong>Toda pergunta tem uma resposta.</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>
      <main>
        <div className="main-content">
          <img className="logo" src={ logo } alt="Logo Lemmeask" />
          <button onClick={ navigateToNewRoom } className="create-room">
            <img src={ googleIcon } alt="Icon Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input
              type="text"
              placeholder="Digite o código da sala"
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}