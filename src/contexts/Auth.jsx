import React,{Component, useState, useEffect, createContext } from 'react'
import Axios from 'axios'
import { toast } from 'react-toastify';

export const AuthContext = createContext({}); 
 
export default function AuthProvider({children}){

    const [ user, setUser] = useState(null)
    const [ loadingAuth, setLoadingAuth] = useState(false)
    const [ loading, setLoading] = useState(true)


    useEffect(()=>{
        function loadStorage(){

            const storageUser = localStorage.getItem('SistemaUser')

            if(storageUser){
                setUser(JSON.parse(storageUser))
                setLoading(false)
            }
            setLoading(false)
        }    
        loadStorage();
    }, [])

    //Login usuario
    async function LoginAuth(logIn, senha, perfil){
        
        setLoadingAuth(true)   

        Axios.post('http://localhost:3001/api/login',{
        login: logIn,
        senha: senha,
        perfil: perfil
        }).then( async (response, value) => {
        if(response.data.message){
            setLoadingAuth(false);
            toast.error("Login/senha invalidos !", {
                icon: "☹️"
            });
        }else{ 
             console.log('dados da empresa '+response.data)      
            let uid =  response.data[0].usu_id;
            const dataUser = await response.data;
            //console.log('dados do response: '+(dataUser))
            let data = {
                uid: uid,
                nome: dataUser[0].usu_nome,
                avatarUrl: dataUser[0].usu_avatar,
                email: dataUser[0].usu_email,
                perfil: dataUser[0].usu_perfil,
            }          
            console.log('dados do datauser: '+JSON.stringify(data));
            setUser(data)
            storegeUser(data)
            setLoadingAuth(false);  
            toast.success("Bem Vindo de volta !", {
                icon: "🚀"
            });   
        }
    }).catch((error) => {
            console.log(error);
            toast.error("Ops algo deu errado !", {
                icon: "☹️"
            });
            setLoadingAuth(false);
        })
    }

    //Cadatro usuario ADM
    async function Registro(nome, login, email, senha, perfil){
    setLoadingAuth(true)   
        Axios.post('http://localhost:3001/api/cadastro',{ 
        nome: nome,
        login: login,
        email: email,
        senha: senha,
        perfil: perfil
        }).then( async (response, value) => {
            if(response.data.message){
                setLoadingAuth(false);
                console.log(response.data.message)
                toast.error("Informe outro Login!", {
                    icon: "☹️"
                });
            }else{  
                
                setLoadingAuth(false);   
                toast.success("Cadastro Realizado!", {
                    icon: "🚀"
                });

                toast.info("Redirecionando... para tela inicial!", {
                    icon: "🚀"
                });
                

            }
            })
            .catch((error) => {
                console.log(error);
                toast.error("Ops algo deu errado !", {
                    icon: "☹️"
                });
                setLoadingAuth(false);
            })
    }


    function storegeUser(data){
        localStorage.setItem('SistemaUser', JSON.stringify(data))
    }


    const signOut = () => {

    localStorage.removeItem('SistemaUser');
    setUser(null);


    }


    return(
        //reconhece como verdadeiro caso seja nulo
     <AuthContext.Provider value={{ 
         signed: !!user, 
         user, 
         loading, 
         Registro,
         signOut,
         LoginAuth,
         loadingAuth,
         setUser,
         storegeUser,
         
         }}
         > 
         {children}
     </AuthContext.Provider>
  )
}