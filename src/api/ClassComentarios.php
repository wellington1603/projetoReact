<?php  
    include("./ClassConexao.php");

    class ClassComentarios extends ClassConexao{

        #Exibição dos Comentarios em um json
        public function exibeCometarios()
        {
            $BFetch=$this->conectaDB()->prepare("SELECT * FROM fullstrack.comentarios;");
            $BFetch->execute();

            $J=[];
            $I=0;

            while($Fetch=$BFetch->fetch(PDO::FETCH_ASSOC)){
                $J[$I]=[
                    "id"=>$Fetch['id_produto'],
                    "nome"=>$Fetch['nome']
                    // "categoria"=>$Fetch['categoria'],
                    // "descricao"=>$Fetch['descricao'],
                    // "preco"=>$Fetch['preco'],
                    // "precofinal"=>$Fetch['precofinal'],
                    // "imagem"=>$Fetch['imagem']
                ];
                $I++;
            }
            

            header("Access-Control-Allow-Origin:*");
            header("Content-type: application/json");
            echo json_encode($J);
        }
    }


?>