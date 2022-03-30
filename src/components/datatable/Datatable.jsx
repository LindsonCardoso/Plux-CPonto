import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios'

const Datatable = () => {

    //const [data, setData] = useState(userRows);
    const [users, setUsers] = useState([])
    const [lastUser,setLastUser] = useState([])
    const [isEmpty, setIsEmpty] = useState(false)
    const [loading, setLoading] = useState(true)
    const [loadingMore, setLoadingMore] = useState(false)


    const handleDelete = (id) => {
        setUsers(users.filter(item => item.id !== id))
    }

    const actionColumn  = [
      { field: "id", headerName: "Codigo", width: 90 },
      {
        field: "nome",
        headerName: "Usuário",
        width: 230,
        renderCell: (params) => {
          return (
            <div className="cellWithImg">
              <img className="cellImg" src={params.row.avatar} alt="" />
              {params.row.nome}
            </div>
          );
        },
      },
      { field: "email", headerName: "Email", width: 230 },
      {
        field: "status",
        headerName: "Status",
        width: 100,
      },
      {
        field: "perfil",
        headerName: "perfil",
        width: 100,
      },
      {
        field: "action",
        headerName: "Opção",
        width: 160,
        renderCell: (params) => {
          return (
            <div className="cellAction">
              <Link to={"/usuario/" + params.row.id}>
                <button className="viewButton">Editar</button>
              </Link>
              <div
                className="deleteButton"
                onClick={() => handleDelete(params.row.id)}
              >Excluir
              </div>
            </div>
          );
        },
      },
    ];
  
    useEffect(() =>{
      getUsers()
      return() => {

      }
    }, [])

    const getUsers = async () => {
      await axios.get('http://localhost:3001/api/users',{
        params: {
          _limit: 4
        }
      })
      .then((response) => {
        //console.log('get usuarios' + JSON.stringify(response.data));
        updateState(response.data);
        console.log('usuarios do get ' + JSON.stringify(response.data))
      }).catch((err) => {
        console.log('error: ' + err)
        setLoadingMore(false)
      })
      setLoading(false)
    }

    //verifincado se tem dados dos funcionarios cadastrados 
    const updateState = async (dados) => {
      const isDataEmpty = dados.size === 0;

      if(!isDataEmpty){
        let lista = [];

        dados.forEach(element => {
          lista.push({
            id: element.usu_id,
            codigo: element.usu_codigo,
            nome: element.usu_nome,
            avatar: element.usu_avatar,
            email: element.usu_email,
            perfil: element.usu_perfil,
            status: element.usu_status
          })
        });
        
        const LastUser = dados[dados.length -1]
        setUsers(users => [...users, ...lista ])
        setLastUser(LastUser)
        console.log('USUARIOS DA LISTA'+JSON.stringify(lista))
        console.log('Usuarios agora'+ users)
      }else{  
        setIsEmpty(true)
      }
      setLoadingMore(false);
    }

    async function handleMore(){
      setLoadingMore(true);
    
      //var isDataListFunc = listFuncionario.indexOf(listFuncionario[listFuncionario.length -1])
    
      //var isDataLastFunc = lastFuncionario[lastFuncionario.length -1]

        await axios.post('http://localhost:3001/api/getIdUser',{
          ultimoId: lastUser['usu_id'],
        }).then((response) => {
          console.log("ultimos arrays"+response.data)
          updateState(response.data)
        })
        setIsEmpty(true)
    }



  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={users}
        columns={actionColumn}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
