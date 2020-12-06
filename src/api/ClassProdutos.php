<?php  
    include("./ClassConexao.php");

    class ClassProdutos extends ClassConexao{

        #Exibição dos produtos em um json
        public function exibeProdutos()
        {
            $BFetch=$this->conectaDB()->prepare("select * from produto");
            $BFetch->execute();

            $J=[];
            $I=0;

            while($Fetch=$BFetch->fetch(PDO::FETCH_ASSOC)){
                $J[$I]=[
                    "id"=>$Fetch['id_produto'],
                    "categoria"=>$Fetch['categoria'],
                    "descricao"=>$Fetch['descricao'],
                    "preco"=>$Fetch['preco'],
                    "precofinal"=>$Fetch['precofinal'],
                    "imagem"=>$Fetch['imagem']
                ];
                $I++;
            }
            

            header("Access-Control-Allow-Origin:*");
            header("Content-type: application/json");
            echo json_encode($J);
        }
    }
?>