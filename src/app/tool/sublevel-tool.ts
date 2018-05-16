import {DownlineTreeviewItem, TreeviewItem} from 'ngx-treeview';
import {Sublevel} from '../model/sublevel';
import {Product} from '../model/product';

export class SublevelTool {
  public static sublevelsToItems(sublevels: Sublevel[]): TreeviewItem[] {
    const children: TreeviewItem[] = [];
    for (let i = 0; i < sublevels.length; i++) {
      const sublevel = sublevels[i];
      const item = new TreeviewItem({
        text: sublevel.name,
        value: sublevel.id
      });
      if (sublevel.sublevels) {
        item.children = this.sublevelsToItems(sublevel.sublevels);
      }
      children.push(item);
    }
    return children;
  }

  public static filterProductsBySublevel(sublevelIds, products: Product[]): Product[] {
    const returnedProducts: Product[] = [];
    for (let i = 0; i < products.length; i++) {
      for (let j = 0; j < sublevelIds.length; j++) {
        if (products[i].sublevel_id === sublevelIds[j]) {
          returnedProducts.push(products[i]);
        }
      }
    }
    return returnedProducts;
  }
}
