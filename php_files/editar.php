<?php
//Curso CELKE - API REACT AND PHP

//Cabecalhos obrigatorios
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json charset=UTF-8");
header("Access-Control-Allow-Headers: *");
//header("Access-Control-Allow-Methods: GET,PUT,POST,DELETE");

//conexão banco
require_once 'conexao.php';

$response_json = file_get_contents("php://input");
$dados = json_decode($response_json, true);

if ($dados){

  //$query_cliente = "update clientes set nome=:nome, end= ':end' where id='222'";
  $nome =  $dados['nome'];
  $end  =  $dados['end'];
  $id   =  $dados['id'];

  $query_cliente = "update clientes set nome='" . $nome . "', end= '" . $end . "' where id='" . $id . "'";
  $stmt = $conn->prepare($query_cliente);
  //$stmt->bindParam(":nome", $dados['nome']);
  //$stmt->bindParam(":end", $dados['end']);
  //$stmt->bindParam(":id", $dados['id']);
  $stmt->execute();
  //var_dump($stmt);

  $response = [
        "erro" => false,
        "mensagem" => "Cliente cadastrado com sucesso!!!"       
      ];
  
}else{
    $response = [
        "erro" => true,
        "mensagem" => "Cliente nao cadastrado!!!"       
      ];

}

//$response = [
//  "erro" => false,
//  "mensagem" => "Acessou",
//  "data" => $dados
//];

http_response_code(200);
echo json_encode($response);

?>