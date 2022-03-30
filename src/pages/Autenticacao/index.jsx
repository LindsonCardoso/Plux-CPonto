import { useState, useContext } from "react"
import AuthInput from "../../components/InputAuth/inputAuth"
//import { IconAtencao } from "../../components/Icons/Icon"
import { AuthContext } from '../../contexts/Auth'

export default function Autenticacao() {

  const { Registro, LoginAuth, loadingAuth } = useContext(AuthContext);


  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [nome, setNome] = useState('')
  const [logIn, setLogIn] = useState('')
  const [erro, setErro] = useState('')
  const [modo, setModo] = useState('login' || 'cadastro')


  function exibirErro(msg, tempo = 5) {
    setErro(msg)
    setTimeout(() => setErro(null), tempo * 1000)
  }


  async function Submit() {
    const perfil = "ADM"
    try {
      if (modo === 'login') {
        const perfil = "ADM"
        if (logIn !== '' && senha !== '') {
          await LoginAuth(logIn, senha, perfil);
        }
      } else {
        if (nome !== '' && logIn !== '' && email !== '' && senha !== '') {
          await Registro(nome, logIn, email, senha, perfil)
        }
      }
    } catch (e) {
      exibirErro(e.message ?? 'Erro desconhecido!')
    }

  }

  return (
    <div className="flex  h-screen items-center justify-center">
      <div className={`hidden md:block md:w-1/2  lg:w-2/3`}>
        <img src="https://source.unsplash.com/random"
          alt="Imagem de tela zltecnologia"
          className={`h-screen w-full object-cover`}
        />
      </div>
      <div className={`m-10 md:w-1/2 w-full lg:w-1/3`}>
        <h1 className={`
                text-3xl font-bold mb-5
            `}>
          {modo === 'login' ? 'Entre com seus dados' : 'Inicie o cadastro clicando aqui'}
        </h1>

        {erro ? (
          <div className={`
            flex items-center 
                bg-red-400 text-white py-3 px-5 my-2
                border-2 border-red-600 rounded-lg 
            `}>
            teste
            <span className={`ml-3 text-sm`} >{erro}</span>
          </div>
        ) : false}


        {modo === 'login' ? (
          <>

            <AuthInput
              tipo="text"
              label="Login"
              valor={logIn}
              estado={setLogIn}
              obrigatorio
            />

            <AuthInput
              tipo="password"
              label="Senha"
              valor={senha}
              estado={setSenha}
              obrigatorio
            />
          </>
        ) : (
          <>
   
            <AuthInput

              label="Nome Completo"
              valor={nome}
              tipo="text"
              estado={setNome}
              obrigatorio
            />
            <AuthInput
              tipo="text"
              label="Login"
              valor={logIn}
              estado={setLogIn}
              obrigatorio
            />
            <AuthInput
              label="email"
              valor={email}
              tipo={"email"}
              estado={setEmail}
              obrigatorio
            />
            <AuthInput
              tipo="password"
              label="Senha"
              valor={senha}
              estado={setSenha}
              obrigatorio
            />


          </>

        )
        }





        <button onClick={Submit} className={`
                w-full bg-indigo-500 hover:bg-indigo-400
                text-white rounded-lg px-4 py-3 mt-6
            `}>
          {modo === 'login' ? 'Entrar' : 'Cadastrar'}
        </button>

        {modo === 'login' ? (
          <p className={`mt-8`} >
            <a className={`text-blue-500 hover:text-blue-700 font-semibold
                    cursor-pointer`} onClick={() => setModo('cadastro')}> Criar uma Conta</a>
          </p>
        ) : (
          <p className={`mt-8`} >
            <a className={`text-blue-500 hover:text-blue-700 font-semibold
                cursor-pointer`} onClick={() => setModo('login')}> Entre com suas Credenciais</a>
          </p>

        )}

      </div>
    </div>
  )

}