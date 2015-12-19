modules.define('form', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {}, {
    live: function() {
        this.liveBindTo('submit', function(e) {
            e.preventDefault();
            var input = this.elem('input', 'type', 'email');
            this.setMod(this.elem('popup'), 'visible', !/\S+@\S+\.\S+/.test(input.val()));
        });
    }
}));

});
