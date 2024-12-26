import { Storable as Storable1 } from "@aventusjs/sharp/AventusSharp/Data/index.js";
import { Converter as Converter1 } from "@aventusjs/main/Aventus/index.js";


export class Commentaire extends Storable1 {
    static get Fullname() { return "Shop.Data.Commentaire, Shop"; }
    Contenu;
    Date;
    Utilisateur;
    ProduitId;
}
Commentaire.Namespace=`Shop.Data`;
Commentaire.$schema={...(Storable1?.$schema ?? {}), "Contenu":"string","Date":"Date","Utilisateur":"Utilisateur","ProduitId":"number"};
Converter1.register(Commentaire.Fullname, Commentaire);
