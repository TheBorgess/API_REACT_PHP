import React, { useEffect, useState }  from 'react';

import { Link } from 'react-router-dom';

import { Container, ConteudoTitulo, BotaoAcao, ButtonInfo, Titulo } from './styles';


export const Visualizar = (props) => {

    const [data, setData] = useState([]);

    const [id] = useState(props.match.params.id)

    useEffect(() => {
        const getCliente = async () => {
            await fetch("http://localhost/visualizar.php?id=" + id)
            .then((response) => response.json())
            .then((responseJson) => {
                //console.log(responseJson);
                setData(responseJson.cliente);
                //console.log(data.id);
            });
        }
        getCliente();
    },[id]);

    return (
       <Container> 
           <ConteudoTitulo> 
            <Titulo>Visualizar</Titulo>
            <BotaoAcao>
               <Link to="/">
                  <ButtonInfo>Listar</ButtonInfo>
               </Link>
            </BotaoAcao>
          </ConteudoTitulo> 
            <p><b>ID:</b> {data.id}</p>
            <p><b>Nome:</b> {data.nome}</p>
            <p><b>Endereço:</b> {data.end}</p>
       </Container>
    );    
}