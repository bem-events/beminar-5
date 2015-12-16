block('link')(
    tag()('a'),

    attrs()(function() {
        return { href: this.ctx.url };
    })
);

/**
 * В данном случае мы считаем, что у всех ссылок url есть по умолчанию,
 * а если его нет, то сделаем исключение: заменим тег на span, потому что в html
 * это уже не ссылка
 *
 * Если проводить аналогию с CSS — это селектор вида .link[href]
 */
block('link').match(function() { return !this.ctx.url })(
    tag()('span')
);
