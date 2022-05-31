import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, ConteudoForm , ConteudoTitulo ,Titulo , BotaoAcao, ButtonInfo , AlertSuccess, Form, Label, Input, ButtonSuccess } from './styles';

export const Cadastrar = () => {
  
    const [cliente, setCliente] = useState({
       nome: '',
       end: ''
    })

    const [status, setStatus] = useState({
       type: '',
       mensagem: ''
    })
  
    const valorInput = e => setCliente({ ...cliente, [e.target.name]:e.target.value }) 

    const cadCliente = async e =>{
        e.preventDefault();
        //console.log(cliente.nome)

        await fetch("http://localhost/cadastrar.php", {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({cliente})
        })
        .then((response) => response.json())
        .then((responseJson) => {
           //console.log(responseJson)
        if(responseJson.erro){
            setStatus({
               type: 'erro',
               mensagem: responseJson.mensagem
            });
        }else{
           setStatus({
              type: 'success',
              mensagem: responseJson.mensagem
           });
           document.getElementById('nome').value = '';
           document.getElementById('end').value = '';
           //alert('Dados cadastrados com sucesso!');
           //window.location.href = 'http://localhost:3000';
        }   
        }).catch(() => {
         setStatus({
            type: 'erro',
            mensagem: 'Cliente nao cadastrado com sucesso tente mais tarde!!!'
         });
        });
    }

    return (
     <Container>
        <ConteudoForm>
          <ConteudoTitulo> 
            <Titulo>Cadastrar</Titulo>
            <BotaoAcao>
               <Link to="/">
                  <ButtonInfo>Listar</ButtonInfo>
               </Link>
            </BotaoAcao>
          </ConteudoTitulo> 
          {status.type === 'erro' ? <p>{status.mensagem}</p> : ""}
          {status.type === 'success' ? <AlertSuccess>{status.mensagem}</AlertSuccess> : ""}
          <Form onSubmit={cadCliente}>
             <Label>Nome:</Label>
             <Input type="text" name="nome" id="nome" placeholder="Nome do Cliente" onChange={valorInput} required /><br /><br />
             <Label>Endereço:</Label>
             <Input type="text" name="end" id="end" placeholder="Endereço do Cliente" onChange={valorInput} /><br /><br />
             <ButtonSuccess type="submit">Cadastrar</ButtonSuccess>
          </Form>
        </ConteudoForm>  
     </Container> 
   );

}