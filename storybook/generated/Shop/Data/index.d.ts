import { Storable as Storable1 } from "@aventusjs/sharp/AventusSharp/Data";
import { IData as IData1 } from "@aventusjs/main/Aventus";

export class Utilisateur extends Storable1 implements IData1 {
    static get Fullname(): string;
    NomUtilisateur: string;
}

export class Categorie extends Storable1 implements IData1 {
    static get Fullname(): string;
    Nom: string;
}

export class Commentaire extends Storable1 implements IData1 {
    static get Fullname(): string;
    Contenu: string;
    Date: Date;
    Utilisateur: Utilisateur;
    ProduitId: number;
}

export class Produit extends Storable1 implements IData1 {
    static get Fullname(): string;
    Nom: string;
    CodeBarre: string;
    Prix: number;
    Categorie: Categorie;
    Commentaires: Commentaire[];
}

