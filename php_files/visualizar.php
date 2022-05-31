<?php
//Curso CELKE - API REACT AND PHP

//Cabecalhos obrigatorios
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json charset=UTF-8");

//conexão banco
require_once 'conexao.php';

$id = filter_input(INPUT_GET,'id', FILTER_SANITIZE_NUMBER_INT);
//$id = 81;

//////////////////Exemplo PDO do CELKE////////////////////////////
$stmt = $conn->prepare("select id,nome,end from clientes where id=:id LIMIT 1");
$stmt->bindParam(":id", $id);
$stmt->execute();
$results = $stmt->fetchall(PDO::FETCH_ASSOC);

$response = [
    "erro" => true,
    "mensagem" => "Cliente não encontrado"
];
foreach ($results as $row) {
    //echo "== " . $row['nome'];
    extract($row);

    $cliente = [
            'id' => $id,
            'nome' => $nome,
            'end' => $end
    ];

    $response = [
        "erro" => false,
        "cliente" => $cliente
    ];
}

http_response_code(200);
echo json_encode($response);