var globalDelay = 0;
var defaultDelay = 100;

function printLine(element, text, delay) {
    delay = delay || defaultDelay;
    globalDelay += delay;
    setTimeout(
        function() {
            element.append(text + '\n');
            //console.log(text);
            window.scrollTo(0,document.body.scrollHeight);
        },
        globalDelay
    )
}

var $keys;
function addButtons(element) {
    var delay = defaultDelay;
    globalDelay += delay;
    setTimeout(
        function() {
            $keys = $('<div class="keydiv">');
            var $keyY = $('<a class="key">Y</a>');
            var $keyN = $('<a class="key">N</a>');
            $keyY.click(chooseYes);
            $keyN.click(chooseNo);
            $keys.append($keyY);
            $keys.append($keyN);
            element.append($keys);
            window.scrollTo(0, document.body.scrollHeight);
        },
        globalDelay
    )
}

function removeButtons() {
	if ($keys) {
        $keys.remove();
	}
}

function overwriteLine(element, text, delay) {
    delay = delay || defaultDelay;
    globalDelay += delay;
    setTimeout(
        function() {
            element.text(text + '\n');
            //console.log(text);
            //window.scrollTo(0,document.body.scrollHeight);
        },
        globalDelay
    )
}


function chooseYes() {
	clearInterval(blinkIntervalId);
    $('body').off('keypress touchstart');
    removeButtons();
    var $output = $('.output4');
    printLine($output, '     Great! We\'ll see you at the party then.');
    printLine($output, '     expect DJ Music, Food, Tschunk, Games and more');
    printLine($output, '', 0);
    printLine($output, '     2023-04-01 from 19:00 till it\'s over');
    printLine($output, '', 0);
    printLine($output, '     Find the place:');
    printLine($output, '     realraum, Brockmanngasse 15, 8010 Graz');
    printLine($output, '     <a href="https://www.openstreetmap.org/node/668061696">https://www.openstreetmap.org/node/668061696</a>');
    printLine($output, '', 0);
    printLine($output, '     Save the date:');
    printLine($output, '     <a href="https://0x10.r3.at/0x10r3.ics">https://0x10.r3.at/0x10r3.ics</a>');
    printLine($output, '', 0);
    printLine($output, '     Get more Info:');
    printLine($output, '     <a href="https://wiki.realraum.at/unterkunft">https://wiki.realraum.at/unterkunft</a>');
    printLine($output, '     idle at <a href="irc://irc.oftc.net/#realraum">irc://irc.oftc.net/#realraum</a>');
    printLine($output, '     or join <a href="https://matrix.to/#/#_oftc_#realraum:matrix.org">matrix.to/#/#_oftc_#realraum:matrix.org</a>');

    printLine($output, '', 0);
    printLine($output, '         <a href="https://github.com/realraum/telme10">https://github.com/realraum/telme10</a>');
    printLine($output, '', 0);
}

function chooseNo() {
	clearInterval(blinkIntervalId);
    $('body').off('keypress');
    removeButtons();
    var $output = $('.output4');
    globalDelay = 0;
    printLine($output, '     Sorry to hear! You\'re missing out on a great experience.');

    printLine($output, '', 0);
    printLine($output, '         <a href="https://github.com/realraum/telme10">https://github.com/realraum/telme10</a>');
    printLine($output, '', 0);
}

var blinkIntervalId;
$(function () {

    var logoBW72 = [
        "                      .,:oxO0XNWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWN0o' ",
        "                  .:dOXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXd:;:lKMMMXl",
        "               ,lONMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXkxo. cWMMMN",
        "            .lONMMMMMMMMMMMMMWXK00OOOO00KNWMMMMMMMMMMMMMMMMMMMXc .OMMMMM",
        "          ,dXMMMMMMMMMMWXOdl;'...      ...';cdkKWMMMMMMMMMMMMMXd..lXMMMM",
        "        'xNMMMMMMMMMNkl;.                      .,lkXWMMMMMMMMMMNl 'OMMMM",
        "      .oXMMMMMMMMNOc'                              .:xXMMMMMNx:,.,xNMMMM",
        "     ,OWMMMMMMMNx,                                    'oKMMMW0xk0NMMMMMM",
        "    :XMMMMMMMNx,                               ...      .oXMMMMMMMMMMMMM",
        "   lXMMMMMMW0;           'odddo:.       .,:oxk00K0d.      ,OWMMMMMMMMMMM",
        "  cXMMMMMMWx.           .OMMMMMWd..,:cdOXWMMMMMMMMN:       .dNMMMMMMMMMM",
        " ;KMMMMMMWd.            ;XMMMMMMX0XWMMMMMMMMMMMMMMX;        .oNMMMMMMMMM",
        ".kMMMMMMWx.             ;XMMMMMMMMMMMMWNXK0Okxdoll;.         .dWMMMMMMMM",
        "cNMMMMMM0'              ;XMMMMMMWKxoc:,'...                   '0MMMMMMMM",
        "kMMMMMMNc               ;XMMMMMM0,                             lNMMMMMMM",
        "XMMMMMM0'               ;XMMMMMMO.                             '0MMMMMMM",
        "WMMMMMMk.               ;XMMMMMMO.                             .xMMMMMMM",
        "MMMMMMMx.               ;XMMMMMMO.                              dMMMMMMM",
        "WMMMMMMx.               ;XMMMMMMO.                              dMMMMMMM",
        "NMMMMMMO.               ;XMMMMMM0'                             .kMMMMMMW",
        "0MMMMMMN:               ;XMMMMMM0'                             ,KMMMMMMX",
        "dMMMMMMMk.              ;XMMMMMM0'                             oWMMMMMMk",
        ",KMMMMMMNl              ;XMMMMMMK,                            ;KMMMMMMX:",
        " oWMMMMMMX:             ;XMMMMMMK,                           '0MMMMMMWd.",
        " .kWMMMMMMK:            ,KMMMMMMK,                          ,0MMMMMMMO. ",
        "  'OWMMMMMMXl.          '0MMMMMM0,                         :KMMMMMMM0,  ",
        "   .kWMMMMMMNk'          lKXNXX0l.                       'xNMMMMMMWO'   ",
        "    .dNMMMMMMMXd'         .....                        .oXMMMMMMMWx.    ",
        "      :KMMMMMMMMXx;.                                .,dXMMMMMMMMXl.     ",
        "       .dNMMMMMMMMW0o,.                          .,o0NMMMMMMMMNx'       ",
        "         ,xNMMMMMMMMMWKxl;..                ..;lxKWMMMMMMMMMNk,         ",
        "           'oKWMMMMMMMMMMWN0kxolc::::::clodk0NWMMMMMMMMMMWXd,           ",
        "             .:xXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXkc.             ",
        "                .:dONMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN0d:.                ",
        "                    .:ox0XWMMMMMMMMMMMMMMMMMMWX0ko:'.                   ",
        "                        .,:ok0XNWMMMMMMWNX0kdc,.                        "];


    var $output = $('.output');
    $output.text('');

    printLine($output, 'Trying 178.63.180.140...');
    printLine($output, 'Connected to 0x10.r3.at.');
    printLine($output, 'Escape character is \'^]\'.');

    printLine($output, '', 0);
    printLine($output, '', 0);
    for (var i = 0; i < logoBW72.length; i++) {
        printLine($output, logoBW72[i], 10);
    }
    printLine($output, '', 0);
    printLine($output, '       Hello!');
    printLine($output, '', 0);

    printLine($output, '     Did you know: realraum will be celebrating its 16th birthday', 1000);
    printLine($output, '     on the 1st of April 2023?');
    printLine($output, '', 0);

    printLine($output, '     you should come by!', 1000);
    printLine($output, '', 0);

    printLine($output, '     fun fun fun!', 3000);
    printLine($output, '', 0);

    printLine($output, '     come to the party ... we mean it!', 3000);
    printLine($output, '', 0);
    printLine($output, '     you now have 5s to decide:');

    $output = $('.output2');
    for (var i = 0; i <= 100; i++) {
        overwriteLine($output, '      deciding ... ' + i + '.0%', 50);
    }

    $output = $('.output3');
    printLine($output, '     are you coming?  <span id="textinput"></span><span id="underscore">_</span>');
    addButtons($output);

    var $body = $('body');

    // yes: 121, 101, 115
    // no: 110, 111
    // enter: 13

    var input = '';
    setTimeout(
        function() {
            globalDelay = 0;

            var underscore = true;
            blinkIntervalId = setInterval(function () {
                globalDelay = 0;
                var $underscoreElem = $('#underscore');
                if ($underscoreElem){
                    //console.log('interval!');
                    if (underscore) {
                        $underscoreElem.hide();
                        underscore = false;
                    } else {
                        $underscoreElem.show();
                        underscore = true;
                    }
                }
            }, 500);


            $body.on('keypress', function (event) {
                globalDelay = 0;
                //console.log(event);
                //console.log(event.which);
                if (event.which === 121 && input === '') {
                    input += 'y';
                }
                if (event.which === 101 && input === 'y') {
                    input += 'e';
                }
                if (event.which === 115 && input === 'ye') {
                    input += 's';
                }
                if (event.which === 110 && input === '') {
                    input += 'n';
                }
                if (event.which === 111 && input === 'n') {
                    input += 'o';
                }
                if (event.which === 8 && input.length > 0) {
                    input = input.substring(0, input.length - 1);
                }
                $("#textinput").text(input);
                if ((event.which === 13) && (input === 'y' || input === 'yes')) {
                    chooseYes();
                }
                if (event.which === 13 && (input === 'n' || input === 'no')) {
                    chooseNo();
                }
            });
        },
        globalDelay
    );

});
