import {Category} from '../model/category';
import {TreeviewItem} from 'ngx-treeview';
import {Sublevel} from '../model/sublevel';
import {SublevelTool} from './sublevel-tool';

export class CategoryTool {

  public static categoriesToItems(categories: Category[]): TreeviewItem[] {
    const items: TreeviewItem[] = [];
    for (let i = 0; i < categories.length; i++) {
      const category = categories[i];
      const item = new TreeviewItem({
        text: category.name,
        value: category.id
      });
      if (category.sublevels) {
        item.children = SublevelTool.sublevelsToItems(category.sublevels);
      }
      items.push(item);
    }
    return items;
  }
}
