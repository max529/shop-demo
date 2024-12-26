import { StorableRouter as StorableRouter1 } from "@aventusjs/sharp/AventusSharp/Routes/index.js";


import { ShopRouter } from "../ShopRouter.lib.js";

export class UtilisateurRouter extends StorableRouter1 {
    constructor(router) {
        super(router ?? new ShopRouter());
    }
    StorableName() {
        return "Utilisateur";
    }
}
UtilisateurRouter.Namespace=`Shop.Routes`;
