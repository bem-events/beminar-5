[
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
                        content: 'БЭМ — будущее фронтенд разработки'
                    },
                    {
                        tag: 'link',
                        attrs: {
                            rel: 'stylesheet',
                            href: 'styles.css',
                            type: 'text/css',
                            media: 'all'
                        }
                    }
                ]
            },
            {
                block: 'page',
                tag: 'body',
                content: [
                    {
                        block: 'header',
                        content: [
                            {
                                block: 'logo',
                                tag: 'h1',
                                content: {
                                    tag: 'a',
                                    attrs: {
                                        href: '#'
                                    },
                                    /**
                                     * Условная логика
                                     */
                                    content: (function() {
                                        var res = ['Hello '];

                                        if (Math.random() > 0.5) {
                                            res.push('BEM');
                                        } else {
                                            res.push('world');
                                        }

                                        return res;
                                    }())
                                }
                            },
                            {
                                block: 'menu',
                                tag: 'ul',
                                /**
                                 * Мапинг одного массива на другой:
                                 * аналогично foreach в классических шаблонизаторах
                                 */
                                content: [
                                    { url: '#', content: 'О методологии' },
                                    { url: '#', content: 'Узнать больше' },
                                    { url: 'http://bem.info', content: 'bem.info' }
                                ].map(function(item) {
                                    return {
                                        elem: 'item',
                                        tag: 'li',
                                        content: {
                                            block: 'menu',
                                            elem: 'link',
                                            mix: {
                                                block: 'link'
                                            },
                                            tag: 'a',
                                            attrs: {
                                                href: item.url
                                            },
                                            content: item.content
                                        }
                                    };
                                })
                            }
                        ]
                    },
                    {
                        block: 'headline',
                        content: [
                            {
                                elem: 'content',
                                content: [
                                    {
                                        block: 'headline',
                                        elem: 'header',
                                        tag: 'h2',
                                        /**
                                         * Таймстемп момента компиляции
                                         */
                                        content: Date.now()
                                    },
                                    {
                                        block: 'countdown',
                                        mix: {
                                            block: 'headline',
                                            elem: 'countdown'
                                        },
                                        attrs: {
                                            'data-countdown': '23 july 2015 23:59'
                                        },
                                        content: [
                                            {
                                                elem: 'days',
                                                content: 'XX'
                                            },
                                            {
                                                elem: 'hrs',
                                                content: 'XX'
                                            },
                                            {
                                                elem: 'mins',
                                                content: 'XX'
                                            },
                                            {
                                                elem: 'secs',
                                                content: 'XX'
                                            }
                                        ]
                                    },
                                    {
                                        block: 'countdown',
                                        attrs: {
                                            'data-countdown': '14 july 2015 23:59'
                                        },
                                        content: [
                                            {
                                                elem: 'days',
                                                content: 'XX'
                                            },
                                            {
                                                elem: 'hrs',
                                                content: 'XX'
                                            },
                                            {
                                                elem: 'mins',
                                                content: 'XX'
                                            },
                                            {
                                                elem: 'secs',
                                                content: 'XX'
                                            }
                                        ]
                                    },
                                    {
                                        block: 'countdown',
                                        attrs: {
                                            'data-countdown': '14 august 2015 23:59'
                                        },
                                        content: [
                                            {
                                                elem: 'days',
                                                content: 'XX'
                                            },
                                            {
                                                elem: 'hrs',
                                                content: 'XX'
                                            },
                                            {
                                                elem: 'mins',
                                                content: 'XX'
                                            },
                                            {
                                                elem: 'secs',
                                                content: 'XX'
                                            }
                                        ]
                                    },
                                    {
                                        block: 'headline',
                                        elem: 'subheader',
                                        tag: 'p',
                                        content: 'БЭМ расшифровывается как Блок-Элемент-Модификатор.'
                                    },
                                    {
                                        tag: 'p',
                                        content: 'Методология БЭМ – это набор паттернов и способ описывать действительность при помощи кода и размышлять о сущностях вне зависимости от того, на каком языке программирования реализуется проект.'
                                    },
                                    {
                                        tag: 'p',
                                        content: 'На основе этой методологии разработаны подходы к вёрстке и технические решения, которые позволяют быстро создавать новые страницы и легко поддерживать уже существующие.'
                                    },
                                    {
                                        tag: 'p',
                                        content: [
                                            {
                                                block: 'button',
                                                mods: {
                                                    view: 'action'
                                                },
                                                tag: 'input',
                                                attrs: {
                                                    type: 'submit',
                                                    value: 'Узнать подробнее'
                                                }
                                            },
                                            {
                                                block: 'button',
                                                tag: 'input',
                                                attrs: {
                                                    type: 'submit',
                                                    value: 'Заказать консультацию'
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                block: 'form',
                                mix: {
                                    block: 'headline',
                                    elem: 'form'
                                },
                                tag: 'form',
                                content: [
                                    {
                                        elem: 'header',
                                        tag: 'h3',
                                        content: 'Задайте свой вопрос'
                                    },
                                    {
                                        elem: 'input',
                                        elemMods: {
                                            type: 'name'
                                        },
                                        tag: 'input',
                                        attrs: {
                                            type: 'text',
                                            value: 'имя'
                                        }
                                    },
                                    {
                                        elem: 'input',
                                        elemMods: {
                                            type: 'email'
                                        },
                                        tag: 'input',
                                        attrs: {
                                            type: 'text',
                                            value: 'email'
                                        }
                                    },
                                    {
                                        elem: 'textarea',
                                        tag: 'textarea',
                                        attrs: {
                                            value: 'Ваш вопрос'
                                        },
                                        content: 'Ваше сообщение'
                                    },
                                    {
                                        block: 'button',
                                        mods: {
                                            view: 'action'
                                        },
                                        tag: 'input',
                                        attrs: {
                                            type: 'submit',
                                            value: 'Отправить'
                                        }
                                    },
                                    {
                                        elem: 'popup',
                                        content: 'Заполните поля формы правильно!'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        block: 'content',
                        content: [
                            {
                                elem: 'header',
                                content: {
                                    tag: 'h3',
                                    content: 'БЭМ-методология была разработана в Яндексе для решения следующих задач:'
                                }
                            },
                            {
                                content: {
                                    block: 'list',
                                    tag: 'ul',
                                    content: [
                                        {
                                            elem: 'item',
                                            tag: 'li',
                                            content: 'Типовые проекты должны разрабатываться быстро, но жить долго. Необходимо уметь за короткий срок создавать проект, архитектура которого позволит без труда поддерживать и развивать его долгие годы.'
                                        },
                                        {
                                            elem: 'item',
                                            tag: 'li',
                                            content: 'Над проектом работает много людей. Необходимо эффективно организовывать работу команд: как из двух разработчиков, так и из десятков.'
                                        },
                                        {
                                            elem: 'item',
                                            tag: 'li',
                                            content: 'Масштабируемость команд. Добавление новых людей в команду должно улучшать её производительность. Рациональнее максимально быстро вводить новых разработчиков в курс дела и выделять им собственные зоны ответственности. Чтобы с одним и тем же кодом можно было работать долгое время и разным составом команды, код должен быть хорошо структурирован.'
                                        },
                                        {
                                            elem: 'item',
                                            tag: 'li',
                                            content: 'Повторное использование кода. Работа над каждым новым проектом или элементом интерфейса не должна начинаться с нуля. Если внутри компании прежде уже выполнялась похожая задача, необходимо максимально эффективно задействовать имеющийся код. У кода не должно быть контекстной зависимости, его должно быть легко переносить из одного места в другое.'
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        block: 'footer',
                        content: [
                            {
                                block: 'logo',
                                tag: 'h1',
                                content: {
                                    tag: 'a',
                                    attrs: {
                                        href: '#'
                                    },
                                    content: 'Полный БЭМ'
                                }
                            },
                            {
                                block: 'menu',
                                tag: 'ul',
                                content: [
                                    {
                                        elem: 'item',
                                        tag: 'li',
                                        content: {
                                            block: 'menu',
                                            elem: 'link',
                                            mix: {
                                                block: 'link'
                                            },
                                            tag: 'a',
                                            attrs: {
                                                href: '#'
                                            },
                                            content: 'О методологии'
                                        }
                                    },
                                    {
                                        elem: 'item',
                                        tag: 'li',
                                        content: {
                                            block: 'menu',
                                            elem: 'link',
                                            mix: {
                                                block: 'link'
                                            },
                                            tag: 'a',
                                            attrs: {
                                                href: '#'
                                            },
                                            content: 'Узнать больше'
                                        }
                                    },
                                    {
                                        elem: 'item',
                                        tag: 'li',
                                        content: {
                                            block: 'menu',
                                            elem: 'link',
                                            mix: {
                                                block: 'link'
                                            },
                                            tag: 'a',
                                            attrs: {
                                                href: 'https://ru.bem.info'
                                            },
                                            content: 'bem.info'
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        tag: 'script',
                        attrs: {
                            src: 'http://yastatic.net/jquery/2.1.4/jquery.min.js'
                        }
                    },
                    {
                        tag: 'script',
                        attrs: {
                            src: 'app.js'
                        }
                    }
                ]
            }
        ]
    }
]
