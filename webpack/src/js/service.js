import menuItems from '../js/menu.json';
import menuItemTpl from '../templates/menu_item.hbs';

class Menu {
    constructor(items, template) {
        this.items = items;
        this.template = template;
        this.markup = this.generateMenuMarkup(this.items, this.template);
        this.refs = {
            list: document.querySelector('.js-menu')
        };

        this.init();
    }

    init() {
        this.refs.list.insertAdjacentHTML('beforeend', this.markup);
    }

    generateMenuMarkup(items, template) {
        return items.map( item => template(item) ).join('');
    }
}

new Menu(menuItems, menuItemTpl);
