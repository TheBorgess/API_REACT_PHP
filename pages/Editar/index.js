import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, ConteudoForm , ConteudoTitulo ,Titulo , BotaoAcao, ButtonInfo , AlertSuccess, Form, Label, Input, ButtonSuccess } from './styles';


export const Editar = (props) => {
    
        const [id]            = useState(props.match.params.id);
        const [nome, setNome] = useState('');
        const [end, setEnd]   = useState('');

        const [status, setStatus] = useState({
            type: '',
            mensagem: ''
         })     

        const editCliente = async e => {
           e.preventDefault();
           
           await fetch("http://localhost/editar.php", {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify({id, nome, end})
           }).then((response) => response.json())
           .then((responseJson) => {
               //console.log(responseJson);
               if(responseJson.erro){
                    setStatus({
                       type: 'error',
                       mensagem: responseJson.mensagem
                    });
               }else{
                setStatus({
                    type: 'success',
                    mensagem: responseJson.mensagem
                 });
               }
           }).catch(() => {
            setStatus({
                type: 'error',
                mensagem: 'Cliente não editado com sucesso!!!'
             });
           });
        
        }
    
        useEffect(() => {
            const getCliente = async () => {
                await fetch("http://localhost/visualizar.php?id=" + id)
                .then((response) => response.json())
                .then((responseJson) => {
                    //console.log(responseJson);
                    setNome(responseJson.cliente.nome);
                    setEnd(responseJson.cliente.end);
                });
            }
            getCliente();
        },[id]);

    return (
       <Container>
          <ConteudoForm>
              <ConteudoTitulo>
                 <Titulo>Editar</Titulo>
                 <Link to="/">
                      <ButtonInfo>Listar</ButtonInfo>
                  </Link>
              </ConteudoTitulo>
              {status.type === 'erro' ? <p>{status.mensagem}</p> : ""}
              {status.type === 'success' ? <AlertSuccess>{status.mensagem}</AlertSuccess> : ""}
              <Form onSubmit={editCliente}>
                <Label>Nome:</Label>
                <Input type="text" name="nome" id="nome" placeholder="Nome do Cliente" required value={nome}
                onChange={e => setNome(e.target.value)}/><br /><br />
                
                <Label>Endereço:</Label>
                <Input type="text" name="end" id="end" placeholder="Endereço do Cliente" value={end} 
                onChange={e => setEnd(e.target.value)}/><br /><br />
                
                <ButtonSuccess type="submit">Editar</ButtonSuccess>
              </Form>

              <BotaoAcao>
              </BotaoAcao>
          </ConteudoForm>
        </Container>

    );

}