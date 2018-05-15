import {TreeviewItem} from 'ngx-treeview';
import {Category} from '../model/category';
import {Sublevel} from '../model/sublevel';

export class TreeViewTool {

  public static categoryToTreeviewItems(categories: Category[]): TreeviewItem[] {

    const treeviewCategories: TreeviewItem[] = [];

    for (let i = 0; i < categories.length; i++) {
      const category = categories[i];
      const treeviewCategory = new TreeviewItem({
        text: category.name,
        value: category.id,
        collapsed: true,
        children: this.getSublevelChildren(category)
      });
      treeviewCategories.push(treeviewCategory);
    }
    return treeviewCategories;
  }

  private static getSublevelChildren(thing: Sublevel|Category) {
    const sublevels = thing.sublevels;
    const children = [];
    if (thing.sublevels) {
      for (let i = 0; i < sublevels.length; i++) {
        const sublevel = sublevels[i];
        const child = {
          name: sublevel.name,
          value: sublevel.id,
          children: this.getSublevelChildren(sublevel)
        };
        children.push(child);
      }
    }
    return children;
  }
}
