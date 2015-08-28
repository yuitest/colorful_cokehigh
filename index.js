var targetNames = [
    'skin',
    'hair',
    'eye1',
    'eye2',
    'skinShadow',
    'hairBand1',
    'hairBand2'
];
var targetNameColor = {
    'skin': [
        'path4265',
        'path3063',
        'path4345',
        'path3059',
        'path3078',
        'path3069'
    ],
    'hair': [
        'path4261',
        'path4263',
        'path4305'
    ],
    'eye1': [
        'path3052',
        'path4325'
    ],
    'eye2': [
        'path3054',
        'path4327'
    ],
    'skinShadow': [
        'path4267',
        'path4281',
        'path3823'
    ],
    'hairBand1': [
        'path4301'
    ],
    'hairBand2': [
        'path4303'
    ]
}
var targetColors = {
    'skin': '#00ff00',
    'hair': '#00ff00',
    'eye1': '#00ff00',
    'eye2': '#00ff00',
    'skinShadow': '#00ff00',
    'hairBand1': '#00ff00',
    'hairBand2': '#00ff00'
}
function randomColor() {
    function singleColorStr() {
        var h = (Math.random() * 256 << 0).toString(16);
        if (h.length == 2) {
            return h;
        }
        return '0' + h;
    }
    return singleColorStr() + singleColorStr() + singleColorStr();
}
function selectedColors() {
    var s = {};
    $('.colorPickerCokeHigh').each(function () {
        var name = String(this.id).substr('colorpicker_'.length);
        var value = String($(this).spectrum('get'));
        s[name] = value;
    });
    return s;
}
$(function () {
    targetNames.forEach(function (tname) {
        $("#colorpicker_" + tname).spectrum({
            preferredFormat: 'hex',
            color: randomColor()
        }).on('change', function () {
            repaint();
        }).addClass('colorPickerCokeHigh');
    });
    $('#cokehigh_svg').on('load', function () {
        repaint();
    });
    $('#reloadButton').click(function () {
        $('.colorPickerCokeHigh').each(function () {
            $(this).spectrum('set', randomColor())
        });

        repaint();
    });
});
function repaint(){
    var targetColors = selectedColors();
    var svg = document.getElementById("cokehigh_svg").contentDocument;
    targetNames.forEach(function (tname) {
        var color = targetColors[tname];
        targetNameColor[tname].forEach(function (eid) {
            var elm = svg.getElementById(eid);
            elm.style.fill = color;
        });
    });
}
