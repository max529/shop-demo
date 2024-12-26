import { StorableRouter as StorableRouter1 } from "@aventusjs/sharp/AventusSharp/Routes/index.js";


import { ShopRouter } from "../ShopRouter.lib.js";

export class CategorieRouter extends StorableRouter1 {
    constructor(router) {
        super(router ?? new ShopRouter());
    }
    StorableName() {
        return "Categorie";
    }
}
CategorieRouter.Namespace=`Shop.Routes`;
