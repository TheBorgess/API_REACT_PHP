import styled from 'styled-components';

export const ConteudoForm = styled.section`
  max-width: 960px;
  padding: 10px 30px 30px;
`;

export const Form = styled.form`
  margin: 0px auto;
`;

export const Label = styled.label`
  width: 100%;
  padding: 12px;
  margin-top: 6px;
  margin-b:ottom 16px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-b:ottom 16px;
  resize: vertical;
`;

export const ButtonSuccess = styled.button`
  background-color: #fff;
  color: #198754;
  padding: 8px 12px;
  border: 1px solid #198754;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  :hover{
      background-color: #157347;
      color: #fff;
  }
`;

export const Container = styled.section`
  max-width: 960px;
  margin: 20px auto;
  box-shadow: 0 0 1em #6c757d;
`;

export const Titulo = styled.h1`
  color: #3e3e3e;
  font-size: 28px;
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

export const AlertSuccess = styled.p`
  background-color: #d1e7dd;
  color: #0f5132;
  margin: 10px 10px;
  border: 1px solid #badbcc;
  border-radius: 4px;
  padding: 7px;
`;
