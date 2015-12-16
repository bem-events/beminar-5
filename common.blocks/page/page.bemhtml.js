/**
 * Блок page всегда имеет одну и ту же html-обвязку,
 * удобно вынести это в шаблон один раз.
 *
 * АПИ блока page:
 *
 * {
 *     block: 'page',
 *     styles: [...],
 *     scripts: [...],
 *     title: '...'
 * }
 *
 * Блок page очевидно используется на любой странице,
 * поэтому он есть в стандартной библиотеке блоков bem-core.
 */
block('page').replace()(function() {
    var ctx = this.ctx;

    /**
     * HTML-обвязка страницы
     */
    return [
        '<!DOCTYPE html>',
        {
            tag: 'html',
            content: [
                {
                    tag: 'head',
                    content: [
                        {
                            tag: 'meta',
                            attrs: {
                                charset: 'utf-8'
                            }
                        },
                        {
                            tag: 'title',
                            content: ctx.title
                        },
                        ctx.styles.map(function(style) {
                            return {
                                tag: 'link',
                                attrs: {
                                    rel: 'stylesheet',
                                    href: style,
                                    type: 'text/css',
                                    media: 'all'
                                }
                            };
                        })
                    ]
                },
                {
                    tag: 'body',
                    cls: 'page',
                    content: [
                        ctx.content,
                        /**
                         * Скрипты в конце body
                         */
                        this.ctx.scripts.map(function(script) {
                            return {
                                tag: 'script',
                                attrs: {
                                    type: "text/javascript",
                                    src: script
                                }
                            }
                        })
                    ]
                }
            ]
        }
    ];
});
