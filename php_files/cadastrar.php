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
    
     //Exemplo PDO da UDEMY, usado no Curso do CELKE
    $stmt = $conn->prepare("insert into clientes (nome, end) values(:nome, :end)");

    $stmt->bindParam(":nome", $dados['cliente']['nome']);
    $stmt->bindParam(":end", $dados['cliente']['end']);

    $stmt->execute();

     $response = [
         "erro" => false,
         "mensagem" => "Cliente cadastrado com sucesso!!!"
     ];
}else{
    $response = [
        "erro" => true,
        "mensagem" => "Erro ao cadastrar cliente!!!"
    ];
}

http_response_code(200);
echo json_encode($response);

