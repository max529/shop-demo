import { HttpRouter as HttpRouter1 } from "@aventusjs/main/Aventus/index.js";

export class ShopRouter extends HttpRouter1 {
    defineOptions(options) {
        options.url = "https://shop.rayuki.com" + "";
        return options;
    }
}
ShopRouter.Namespace=`Shop.Routes`;
