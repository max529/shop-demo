import { Storable as Storable1 } from "@aventusjs/sharp/AventusSharp/Data/index.js";
import { Converter as Converter1 } from "@aventusjs/main/Aventus/index.js";



export class Produit extends Storable1 {
    static get Fullname() { return "Shop.Data.Produit, Shop"; }
    Nom;
    CodeBarre;
    Prix;
    Categorie;
    Commentaires = [];
}
Produit.Namespace=`Shop.Data`;
Produit.$schema={...(Storable1?.$schema ?? {}), "Nom":"string","CodeBarre":"string","Prix":"number","Categorie":"Categorie","Commentaires":"Commentaire"};
Converter1.register(Produit.Fullname, Produit);
