import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {Table, Titulo, Container, ConteudoTitulo, BotaoAcao, ButtonInfo, ButtonPrimary, ButtonWarning, ButtonDanger, AlertSuccess } from './styles';

export const Home = () => {

   const [data, setData] = useState([]);

   const[status, setStatus] = useState({
       type: '',
       mensagem: ''
   });

   const filterLength = (texto) => {
      if (texto.length > 36) {
           return `${texto.substring(0,36)}...`;  
           //cliente.nome.substr(0,35)
           //cliente.end.substr(0,35)
      } 
      else {
           return texto; 
      } 
   }

   const getClientes = async () => {
          fetch("http://localhost/index.php") 
          .then((response) => response.json())
          .then((responseJson) => (
               //console.log(responseJson)
               setData(responseJson.records)
          ));
   } 

   const apagarCliente = async (idCliente) => {
      //alert(idCliente);
      //console.log(idCliente);
     if (window.confirm('Are you sure to delete this record?')) {

        await fetch("http://localhost/apagar.php?id=" + idCliente)
        .then((response) => response.json())
        .then((responseJson) => {
           //console.log(responseJson);  
        if(responseJson.erro){ 
            setStatus({
               type: 'erro',
               mensagem: responseJson.mensagem
            });
        } else {
           setStatus({
             type: 'success',
             mensagem: responseJson.mensagem
           });
           getClientes();
        }          
        }).catch(() => {
            setStatus({
               type: 'erro',
               mensagem: 'Erro: Cliente nao apagado com sucesso!!!'
            }); 
            //console.log("Erro: Cliente nao apagado com sucesso!!!");
        });
    
     }//if
   
   }

   useEffect(() => {
      getClientes();
   },[])


   return (
     <Container>
          <ConteudoTitulo> 
            <Titulo>Listar</Titulo>
            <BotaoAcao>
               <Link to="/cadastrar">
                  <ButtonInfo>Cadastrar</ButtonInfo>
               </Link>
            </BotaoAcao>
          </ConteudoTitulo>
           
           {status.type === 'erro' ? <p>{status.mensagem}</p> : ""}
           {status.type === 'success' ? <AlertSuccess>{status.mensagem}</AlertSuccess> : ""}
           
          <Table>
           <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Endereço</th>
              <th>Ações</th>
            </tr>
            </thead>
            <tbody>
              {Object.values(data).map(cliente =>(
                <tr key={cliente.id}>
                  <td>{cliente.id}</td>
                  <td>{filterLength(cliente.nome)}</td>
                  <td>{filterLength(cliente.end)}</td> 
                  <td>
                  <Link to={"/visualizar/" + cliente.id}><ButtonPrimary>Visualizar</ButtonPrimary></Link>
                  {" "}
                  <Link to={"/editar/" + cliente.id}><ButtonWarning>Editar</ButtonWarning></Link>
                  {" "}
                  <ButtonDanger onClick={() => apagarCliente(cliente.id)}>Apagar</ButtonDanger>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#">Topo</a>
     </Container> 
   );
}
