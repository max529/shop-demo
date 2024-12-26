import { HttpRouter as HttpRouter1, HttpRouterOptions as HttpRouterOptions1 } from "@aventusjs/main/Aventus";
import { StorableRouter as StorableRouter1 } from "@aventusjs/sharp/AventusSharp/Routes";
import { Utilisateur as Utilisateur1, Commentaire as Commentaire1, Produit as Produit1, Categorie as Categorie1 } from "../Data";

export class ShopRouter extends HttpRouter1 {
    protected defineOptions(options: HttpRouterOptions1): HttpRouterOptions1;
}

export class UtilisateurRouter extends StorableRouter1<Utilisateur1> {
    constructor(router?: HttpRouter1);
    StorableName(): string;
}

export class CommentaireRouter extends StorableRouter1<Commentaire1> {
    constructor(router?: HttpRouter1);
    StorableName(): string;
}

export class ProduitRouter extends StorableRouter1<Produit1> {
    constructor(router?: HttpRouter1);
    StorableName(): string;
}

export class CategorieRouter extends StorableRouter1<Categorie1> {
    constructor(router?: HttpRouter1);
    StorableName(): string;
}

