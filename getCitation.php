<?php
/* entete json dans la réponse */
header('Content-Type: application/json');

/* Connexion a la bdd + affichage des erreurs uniquement en débug*/
$pdo = new PDO ("mysql:host=localhost;dbname=tatoo","root",""); 
$pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_WARNING);


/*  */
$query = $pdo->prepare('SELECT citation.id , citation.phrase, auteur.nom FROM citation 
INNER JOIN auteur ON citation.auteur = auteur.id
WHERE citation.id != ? ORDER BY RAND() LIMIT 1;');
/*  valeur de l'url */
$query->execute([$_GET['val']]);
$res = $query->fetch(PDO::FETCH_OBJ); 

/* affiche sous forme de json */
echo json_encode($res);

?>