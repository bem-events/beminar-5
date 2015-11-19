block('menu')(
    tag()('ul'),

    /**
     * Вынесем в шаблон всю разметку,
     * которая необходима для представления.
     *
     * Семантика блока простая: меню и ссылки в нем
     *
     * {
     *     block: 'menu',
     *     content: [
     *         { url: '#', content: 'Привет' },
     *         { url: '#', content: 'БЭМ' }
     *     ]
     * }
     */
    content()(function() {
        var content = this.ctx.content;

        return content.map(function(item) {
            return {
                elem: 'item',
                content: {
                    block: 'link',
                    url: item.url,
                    mix: {
                        block: 'menu',
                        elem: 'link'
                    },
                    content: item.content
                }
            };
        });
    })
)

block('menu').elem('item')(
    tag()('li')
)
