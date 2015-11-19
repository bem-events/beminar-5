({
    block: 'page',
    title: 'БЭМ — будущее фронтенд разработки',
    styles: ['styles.css'],
    scripts: ['http://yastatic.net/jquery/2.1.4/jquery.min.js', 'app.js'],
    content: [
        {
            block: 'header',
            content: [
                {
                    block: 'logo',
                    content: {
                        block: 'link',
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
                    content: [
                        { url: '#', content: 'О методологии' },
                        { url: '#', content: 'Узнать больше' },
                        { url: 'http://bem.info', content: 'bem.info' }
                    ]
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
                        content: 'БЭМ-методология была разработана в Яндексе для решения следующих задач:'
                    }
                },
                {
                    content: {
                        block: 'list',
                        content: [
                            {
                                elem: 'item',
                                content: 'Типовые проекты должны разрабатываться быстро, но жить долго. Необходимо уметь за короткий срок создавать проект, архитектура которого позволит без труда поддерживать и развивать его долгие годы.'
                            },
                            {
                                elem: 'item',
                                content: 'Над проектом работает много людей. Необходимо эффективно организовывать работу команд: как из двух разработчиков, так и из десятков.'
                            },
                            {
                                elem: 'item',
                                content: 'Масштабируемость команд. Добавление новых людей в команду должно улучшать её производительность. Рациональнее максимально быстро вводить новых разработчиков в курс дела и выделять им собственные зоны ответственности. Чтобы с одним и тем же кодом можно было работать долгое время и разным составом команды, код должен быть хорошо структурирован.'
                            },
                            {
                                elem: 'item',
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
                    content: {
                        block: 'link',
                        url: '#',
                        content: 'Полный БЭМ'
                    }
                },
                {
                    block: 'menu',
                    content: [
                        { url: '#', content: 'О методологии' },
                        { url: '#', content: 'Узнать больше' },
                        { url: 'http://bem.info', content: 'bem.info' }
                    ]
                }
            ]
        }
    ]
})
