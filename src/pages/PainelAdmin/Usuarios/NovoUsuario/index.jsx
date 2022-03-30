import "./novousuario.css";
import { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';



export default function NewUser() {

 //variaveis funcionais 
 const [login, setLogin] = useState('')
 const [codigo, setCodigo] = useState('')
 const [nome, setNome] = useState('')
 const [email, setEmail] = useState('')
 const [whatsapp, setWhatsapp] = useState('')
 const [perfil, setPerfil] = useState('')
 const [status, setStatus] = useState('')
 const [senha, setSenha] = useState('')

 const [isLoading, setIsLoading] = useState(false)

//Cadastro de funcionarios/colaboradores
const handleSubmitNewUser = async (e)=>{     
  
  console.log(login, codigo,email, status,perfil,nome,whatsapp,senha)
  
  e.preventDefault()
  //if(!validate()) return;
  setIsLoading(true)
  try{
    await axios.post('http://localhost:3001/api/newUser',{ 
    codigo: codigo, 
    nome: nome,
    email: email,
    login: login,
    whatsapp: whatsapp,
    perfil: perfil,
    senha: senha,
    status: status
    }).then( async (response, value) => {
      if(response.data.message){
          console.log('response'+response.data.message)
          toast.warning('Email ja cadastrado!')
      }else {
        toast.success('Dados salvos!')
    }
  });}catch(err){
      console.log('alguim blx' + err);
      toast.error('Algum campo nao foi informado')
    }finally {
        setNome('');
        setEmail('');
        setLogin('');
        setCodigo('');
        setWhatsapp('');
        setStatus('');
        setSenha('');
        setIsLoading(false)
    }
}    


  return (
    <div className="newUser">
      <h1 className="newUserTitle">Novo usuário</h1>
      <form className="newUserForm" onSubmit={handleSubmitNewUser}>
        <div className="newUserItem">
          <label>Login</label>
          <input type="text" placeholder="Login" onChange={(e) => setLogin(e.target.value)} value={login}/>
        </div>
        <div className="newUserItem">
          <label>Codigo</label>
          <input type="text" placeholder="Codigo" onChange={(e) => setCodigo(e.target.value)} value={codigo}/>
        </div>
        <div className="newUserItem">
          <label>Nome completo</label>
          <input type="text" placeholder="John Smith" onChange={(e) => setNome(e.target.value)} value={nome}/>
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" onChange={(e) => setEmail(e.target.value)} value={email}/>
        </div>
        <div className="newUserItem">
          <label>Senha</label>
          <input type="password" placeholder="senha" onChange={(e) => setSenha(e.target.value)} value={senha}/>
        </div>
        <div className="newUserItem">
          <label>Whatsapp</label>
          <input type="text" placeholder="00 9 9999999" onChange={(e) => setWhatsapp(e.target.value)} value={whatsapp}/>
        </div>
    
        <div className="newUserItem">
          <label>Genero</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Masculino</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Feminino</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Outro</label>
          </div>
        </div>

        <div className="newUserItem">
          <label>Status</label>
          <select className="newUserSelect" name="active" id="active" value={status}  onChange={(e) => setStatus(e.target.value)} >
            <option value="A">Ativo</option>
            <option value="D">Inativo</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Perfil</label>
          <select className="newUserSelect" name="active" id="active" value={perfil} onChange={(e) => setPerfil(e.target.value)}>
            <option value="ADM" >Administrador</option>
            <option value="FUN" >Funcionario</option>
          </select>
        </div>
        
        
        <button className="newUserButton" type="submit" disabled={isLoading} >{isLoading ? 'salvando' : 'Criar'}</button>
      </form>
    </div>
  );
}