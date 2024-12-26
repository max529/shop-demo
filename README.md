# Demo shop

Ce projet permet de montrer comment fonctionne AventusJs et AventusSharp.

## Webcomponent

Il s'agit d'un exemple de webcomponent écrit à la main.

## Backend

Ce dossier contient un projet AventusSharp qui permet d'exposer les fonctions cruds pour :
 
 - Categorie : [/categorie](https://shop.rayuki.com/categorie)
 - Commentaire : [/commentaire](https://shop.rayuki.com/categorie)
 - Produit : [/produit](https://shop.rayuki.com/produit)
 - Utilisateur : [/utilisateur](https://shop.rayuki.com/utilisateur)

Via le compilateur se trouvant dans l'extension vscode Aventus, le dossier backend/Frontend/src/generated sera créé et contiendra les différents éléments pour le frontend. Le package est ensuite exporté dans le dossier storybook/static/def afin de pouvoir être utilisé plus tard.

## Storybook

Ce dossier permet de créer la documentation. Le contenu est généré depuis le backend et permet d'avoir rapidement des informations sur les différents objets dans le package. Vous pouvez consulter la documentation [ici](https://shop.rayuki.com)


## Frontend

Il s'agit d'un projet de test permettant d'afficher simplement le nom des produits en utilisant le package généré depuis l'api.