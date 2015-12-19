modules.define('countdown', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                this.endDate = new Date(this.params.countdown);

                var _this = this;

                setInterval(function() {
                    _this.updateCountdown();
                }, 1000);
            }
        }
    },
    updateCountdown: function() {
        var curDays, curHrs, curMins, curSecs,
            startDate = new Date(),
            dateDelta = this.endDate - startDate,
            timeInSec = parseInt(dateDelta/1000);
        curSecs = parseInt(timeInSec % 60);
        timeInSec /= 60;
        curMins = parseInt(timeInSec % 60);
        timeInSec /= 60;
        curHrs = parseInt(timeInSec % 24);
        timeInSec /= 24;
        curDays = parseInt(timeInSec);

        this.elem('days').text(curDays);
        this.elem('hrs').text(curHrs);
        this.elem('mins').text(curMins);
        this.elem('secs').text(curSecs);
    }
}));

});
