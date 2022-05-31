<?php
//Cabecalhos obrigatorios - API REACT AND PHP - CURSO CELKE
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json charset=UTF-8");


//conexão banco
require_once 'conexao.php';

//////////////////Exemplo PDO do CELKE////////////////////////////
$stmt = $conn->prepare("select id,nome,end from clientes order by id desc");
$stmt->execute();
$results = $stmt->fetchall(PDO::FETCH_ASSOC);

 foreach ($results as $row) {
 	   
            extract($row);

            $lista_clientes["records"][$id] = [
                'id' => $id,
                'nome' => $nome,
                'end' => $end
            ];

 }
    
    //Resposta com status 200
     http_response_code(200);
    
     //Retornar os clientes em formato json
     echo json_encode($lista_clientes);  

 ?>

