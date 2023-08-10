<?php
    include('dataSource.php');
    header("Content-Type: text/html;charset=utf-8");
    $str_json = file_get_contents('php://input');
    $response = json_decode($str_json, true);
    $data_source=new DataSource();
    if(isset($response['idCliente']))
    {
        $idCliente=$response['idCliente'];
        $query="SELECT * FROM client where id_Cliente = '$idCliente'";
        $result_query = $data_source->exeConsulta($query);
        foreach($result_query as $row)
        {
            $result[]=Array('id_cliente'=>$row['id_cliente'],'nombre'=>$row['nombre'],'descripcion'=>$row['descripcion']);
        }
        $json=json_encode($result);
        echo $json;
    }
    else if(isset($response['idGallery']))
    {
        $idGallery=$response['idGallery'];
        $query="SELECT * FROM gallery where id_Gallery = '$idGallery'";
        $result_query = $data_source->exeConsulta($query);
        foreach($result_query as $row)
        {
            $result[]=Array('id_gallery'=>$row['id_gallery'],'nombre'=>$row['nombre'],'descripcion'=>$row['descripcion']);
        }
        $json=json_encode($result);
        echo $json;
    }
?>