define(function (require, exports, module) {

    // require('../lib/qrcode.min');
    // opt: {width,height,content}
    exports.generate = function (el, opt) {
        el.innerHTML = '';
        return new QRCode(el, opt).makeCode(opt.content);
    }

});