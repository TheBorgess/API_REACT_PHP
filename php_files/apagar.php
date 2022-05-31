<?php
//Curso CELKE - API REACT AND PHP

//Cabecalhos obrigatorios
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json charset=UTF-8");

//conexão banco
require_once 'conexao.php';

$id = filter_input(INPUT_GET, "id", FILTER_SANITIZE_NUMBER_INT);

$response = "";

$stmt = $conn->prepare("delete from clientes where id=:id LIMIT 1");

$stmt->bindParam(":id", $id, PDO::PARAM_INT);

if($stmt->execute()){

   $response = [
      "erro" => false,
      "mensagem" => "Cliente apagado com sucesso!!!"
   ];
}else{
   $response = [
      "erro" => true,
      "mensagem" => "Cliente NÃO apagado com sucesso!!!"
   ];

}

http_response_code(200);
echo json_encode($response);

?>