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

    printLine($output, 'Trying 2a02:3e0:4000:1::56...');
    printLine($output, 'Connected to entrance.realraum.at.');
    printLine($output, 'Escape character is \'^]\'.');

    printLine($output, '');
    printLine($output, '');
    for (var i = 0; i < logoBW72.length; i++) {
        printLine($output, logoBW72[i], 10);
    }
    printLine($output, '');
    printLine($output, '       Hello!');
    printLine($output, '');

    printLine($output, '     Did you know: realraum will be celebrating its 10th birthday', 1000);
    printLine($output, '     on the 18th of March 2017?');
    printLine($output, '');

    printLine($output, '     you should come by!', 1000);
    printLine($output, '');

    printLine($output, '     fun fun fun!', 3000);
    printLine($output, '');

    printLine($output, '     come to the party ... we mean it!', 3000);
    printLine($output, '');
    printLine($output, '     you have now 5s to decide:');

    $output = $('.output2');
    for (var i = 0; i <= 100; i++) {
        overwriteLine($output, '      deciding ... ' + i + '.0%', 50);
    }

    $output = $('.output3');
    printLine($output, '     are you coming?  _');

    var $body = $('body');

    // yes: 121, 101, 115
    // no: 110, 111
    // enter: 13

    var input = '';
    setTimeout(
        function() {
            $body.on('keypress', function (event) {
                globalDelay = 0;
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
                overwriteLine($output, '     are you coming?  ' + input + '_');
                if (event.which === 13 && (input === 'y' || input === 'yes')) {
                    $body.off('keypress');
                    $output = $('.output4');
                    printLine($output, '     Great! We\'ll see you at the party then.');
                    printLine($output, '     expect DJ Music, Food, Tschunk, Games and more');
                    printLine($output, '');
                    printLine($output, '     2017-03-18 from 18:00 till it\'s over');
                    printLine($output, '');
                    printLine($output, '     Find the place:');
                    printLine($output, '     realraum, Brockmanngasse 15, 8010 Graz');
                    printLine($output, '     http://osm.org/go/0Iz~oIpTW?m=&node=668061696');
                    printLine($output, '');
                    printLine($output, '     Save the date:');
                    printLine($output, '     https://plus.google.com/u/0/events/cqiq6003lok2qd9jcqmh4u4p8d4');
                    printLine($output, '     https://10.r3.at/10r3.ics');
                    printLine($output, '');
                    printLine($output, '     Get more Info:');
                    printLine($output, '     https://wiki.realraum.at/unterkunft');
                    printLine($output, '     idle at irc://#realraum@irc.oftc.net');

                    printLine($output, '');
                    printLine($output, '         https://github.com/realraum/telme10');
                    printLine($output, '');
                }
                if (event.which === 13 && (input === 'n' || input === 'no')) {
                    $body.off('keypress');
                    $output = $('.output4');
                    globalDelay = 0;
                    printLine($output, '     Sorry to hear! You\'re missing out on a great experience.');

                    printLine($output, '');
                    printLine($output, '         https://github.com/realraum/telme10');
                    printLine($output, '');
                }
            });
        },
        globalDelay
    );








});
