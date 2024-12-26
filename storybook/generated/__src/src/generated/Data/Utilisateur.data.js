import { Storable as Storable1 } from "@aventusjs/sharp/AventusSharp/Data/index.js";
import { Converter as Converter1 } from "@aventusjs/main/Aventus/index.js";

export class Utilisateur extends Storable1 {
    static get Fullname() { return "Shop.Data.Utilisateur, Shop"; }
    NomUtilisateur;
}
Utilisateur.Namespace=`Shop.Data`;
Utilisateur.$schema={...(Storable1?.$schema ?? {}), "NomUtilisateur":"string"};
Converter1.register(Utilisateur.Fullname, Utilisateur);
