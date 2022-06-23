let nouveau = document.querySelector("#nouveau");
let citation = document.querySelector("#citation");
let auteur = document.querySelector("#auteur");
/* url vérifiée caractere spéciaux */
let dernier = encodeURIComponent("1");
let nombreAleatoire = 0;

nouveau.addEventListener("click", () => {
  //! Sécurité a revoir
  /* ajax objet  */
  var xhr = new XMLHttpRequest();
  /* si changement d'état de la requete */
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
      /* résultat de ma requete php */
      let res = JSON.parse(xhr.responseText);
      citation.textContent = res.phrase;
      auteur.textContent = res.nom;
      dernier.textContent = encodeURIComponent(
        res.id
      ); /* contient l'id du dernier élement eviter doublon*/
    }
  };

  /* creation requete ajax */
  xhr.open("GET", "getCitation.php?val=" + dernier, true);
  xhr.send(null);
});
