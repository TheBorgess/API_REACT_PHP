import styled from 'styled-components';

export const Container = styled.section`
  max-width: 960px;
  margin: 20px auto;
  box-shadow: 0 0 1em #6c757d;
`;

export const ConteudoTitulo = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const BotaoAcao = styled.section`
  margin: 10px;
`;

export const ButtonInfo = styled.button`
  background-color: #fff;
  color: #0dcaf0;
  padding: 8px 12px;
  border: 1px solid #0dcaf0;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  :hover{
      background-color: #31d2f2;
      color: #fff;
  }
`;

export const ButtonPrimary = styled.button`
  background-color: #fff;
  color: #0d6efd;
  padding: 5px 8px;
  border: 1px solid #0d6efd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  :hover{
      background-color: #0d6efd;
      color: #fff;
  }
`;

export const ButtonWarning = styled.button`
  background-color: #fff;
  color: #ffc107;
  padding: 5px 8px;
  border: 1px solid #ffc107;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  :hover{
      background-color: #ffc107;
      color: #fff;
  }
`;

export const ButtonDanger = styled.button`
  background-color: #fff;
  color: #dc3545;
  padding: 5px 8px;
  border: 1px solid #dc3545;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  :hover{
      background-color: #dc3545;
      color: #fff;
  }
`;


export const Titulo = styled.h1`
  color: #3e3e3e;
  font-size: 28px;
  margin: 10px;
`;

export const Table = styled.table`
  width: 98%;
  margin: 10px 10px;
   th{
       background-color: #ffd219;
       color:#3e3e3e;
       padding: 10px;
   }
   td{
    background-color: #f6f6f6;
    color:#3e3e3e;
    padding: 8px;
}
`;

export const AlertSuccess = styled.p`
  background-color: #d1e7dd;
  color: #0f5132;
  margin: 10px 10px;
  border: 1px solid #badbcc;
  border-radius: 4px;
  padding: 7px;
`;