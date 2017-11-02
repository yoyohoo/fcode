define(function (require, exports, module) {

    var content = document.getElementById('content'),
        code = document.getElementById('code'),
        btn = document.getElementById('gen-btn'),
        gen = require('fcode.gen');

    btn.addEventListener('click', function () {
        if (!content.value.trim()) {
            alert('please input any content...')
            content.focus();
        } else {
            var opt = {
                width: format(code.style.width),
                height: format(code.style.height),
                content: content.value.trim()
            }
            gen.generate(code, opt)
        }

        function format(str) {
            return str.substr(0, str.length - 2)
        }
    })

});