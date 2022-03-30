import React, {useState,useContext} from "react";
import './widgetPonto.css'
import Clock from "../../hook/useClock";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { getTodayDate } from '../../Functions/times-functions'
import { toast } from 'react-toastify';
import axios from 'axios';
import { AuthContext } from "../../contexts/Auth";





const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  border: '1 solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,

}


const Featured = () => {

  const {user} = useContext(AuthContext)

  const [open, setOpen] = useState();
  //variaveis funcionais 
  const [codigo, setCodigo] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }


  
  console.log(getTodayDate())

  const handlePonto = async (e) => {
  
    const datePonto = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });


    const newPontoData = {
        manual: false,
        adminId: user.uid,
        nome: user.nome,
        data: getTodayDate(),
        horario: datePonto.toString(),
        //localizacao: userLocalization.toString(),
    };

    // setPontoStatus("ERROR");

    // setIsLoadingPonto(false);

    // setIsModalPontoOpen(true);

    try{ 
      e.preventDefault()
      //if(!validate()) return;
      setIsLoading(true)
      await axios.post("http://localhost:3001/api/marcarponto",{
        id: newPontoData.adminId,
        data: newPontoData.data,
        horario: newPontoData.horario,
        codigo: codigo,
        nome: newPontoData.nome
      })
      .then(async (response) => {
        if(response.data.message) {
          toast.error("ERROR");
          console.log(response.data.message);
        }else {
          toast.success(`Ponto batido com sucesso ás ${datePonto} do dia ${getTodayDate()}`)
        }
        })
    }catch(err){
      console.log('Ops o que ocorreu aqui ' + err);
      toast.error('Algum campo não foi informado')
    }finally{ 
      setCodigo("");
      newPontoData({
        manual: "",
        adminId: "",
        data: "",
        horario: "",
      });
      setIsLoading(false)
      setOpen(false);
    }
};




  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">PLUX</h1>
      </div>

      <div className="divContainer">
        <div className="clock">
          <Clock />
        </div>
        <div className="divModal">
          <button onClick={handleOpen}>Marcar Ponto</button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...style, width: 250, borderRadius: 1 }}>
              <div className="newPoint">
                <h1 className="newTitle">Informe seu codigo</h1>
                <form className="newPointForm" onSubmit={handlePonto}>
                  <div className="newPointItem">
                    <label>Codigo</label>
                    <input type="text" placeholder="Codigo" onChange={(e) => setCodigo(e.target.value)} value={codigo} />
                  </div>
                  <button className="newUserButton" type="submit" disabled={isLoading}>{isLoading ? 'Gravando...' : 'Gravar'}</button>
                </form>
              </div>
            </Box>
          </Modal>
        </div>
      </div>

    </div>
  );
};

export default Featured;