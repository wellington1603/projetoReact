<?php 

    #index.php
include("./ClassProdutos.php");
// include("./ClassComentarios.php");
$Produto=new ClassProdutos();
// $Comentarios = new ClassComentarios();
$Produto->exibeProdutos();
// $Comentarios->exibeCometarios();


?>