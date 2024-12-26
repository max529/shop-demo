import { Storable as Storable1 } from "@aventusjs/sharp/AventusSharp/Data/index.js";
import { Converter as Converter1 } from "@aventusjs/main/Aventus/index.js";

export class Categorie extends Storable1 {
    static get Fullname() { return "Shop.Data.Categorie, Shop"; }
    Nom;
}
Categorie.Namespace=`Shop.Data`;
Categorie.$schema={...(Storable1?.$schema ?? {}), "Nom":"string"};
Converter1.register(Categorie.Fullname, Categorie);
