// dependencies
const socketio = require('socket.io');

const server = require('./server');

module.exports.socketioListen = function() {
    const io = socketio(server.httpServer);

    const namespace0 = io.of('/namespace0');
    namespace0.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace0.emit(msg);
        });
    });

    const namespace1 = io.of('/namespace1');
    namespace1.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace1.emit(msg);
        });
    });

    const namespace2 = io.of('/namespace2');
    namespace2.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace2.emit(msg);
        });
    });

    const namespace3 = io.of('/namespace3');
    namespace3.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace3.emit(msg);
        });
    });

    const namespace4 = io.of('/namespace4');
    namespace4.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace4.emit(msg);
        });
    });

    const namespace5 = io.of('/namespace5');
    namespace5.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace5.emit(msg);
        });
    });

    const namespace6 = io.of('/namespace6');
    namespace6.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace6.emit(msg);
        });
    });

    const namespace7 = io.of('/namespace7');
    namespace7.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace7.emit(msg);
        });
    });

    const namespace8 = io.of('/namespace8');
    namespace8.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace8.emit(msg);
        });
    });

    const namespace9 = io.of('/namespace9');
    namespace9.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace9.emit(msg);
        });
    });

    const namespace10 = io.of('/namespace10');
    namespace10.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace10.emit(msg);
        });
    });

    const namespace11 = io.of('/namespace11');
    namespace11.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace11.emit(msg);
        });
    });

    const namespace12 = io.of('/namespace12');
    namespace12.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace12.emit(msg);
        });
    });

    const namespace13 = io.of('/namespace13');
    namespace13.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace13.emit(msg);
        });
    });

    const namespace14 = io.of('/namespace14');
    namespace14.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace14.emit(msg);
        });
    });

    const namespace15 = io.of('/namespace15');
    namespace15.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace15.emit(msg);
        });
    });

    const namespace16 = io.of('/namespace16');
    namespace16.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace16.emit(msg);
        });
    });

    const namespace17 = io.of('/namespace17');
    namespace17.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace17.emit(msg);
        });
    });

    const namespace18 = io.of('/namespace18');
    namespace18.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace18.emit(msg);
        });
    });

    const namespace19 = io.of('/namespace19');
    namespace19.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace19.emit(msg);
        });
    });

    const namespace20 = io.of('/namespace20');
    namespace20.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace20.emit(msg);
        });
    });

    const namespace21 = io.of('/namespace21');
    namespace21.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace21.emit(msg);
        });
    });

    const namespace22 = io.of('/namespace22');
    namespace22.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace22.emit(msg);
        });
    });

    const namespace23 = io.of('/namespace23');
    namespace23.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace23.emit(msg);
        });
    });

    const namespace24 = io.of('/namespace24');
    namespace24.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace24.emit(msg);
        });
    });

    const namespace25 = io.of('/namespace25');
    namespace25.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace25.emit(msg);
        });
    });

    const namespace26 = io.of('/namespace26');
    namespace26.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace26.emit(msg);
        });
    });

    const namespace27 = io.of('/namespace27');
    namespace27.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace27.emit(msg);
        });
    });

    const namespace28 = io.of('/namespace28');
    namespace28.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace28.emit(msg);
        });
    });

    const namespace29 = io.of('/namespace29');
    namespace29.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace29.emit(msg);
        });
    });

    const namespace30 = io.of('/namespace30');
    namespace30.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace30.emit(msg);
        });
    });

    const namespace31 = io.of('/namespace31');
    namespace31.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace31.emit(msg);
        });
    });

    const namespace32 = io.of('/namespace32');
    namespace32.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace32.emit(msg);
        });
    });

    const namespace33 = io.of('/namespace33');
    namespace33.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace33.emit(msg);
        });
    });

    const namespace34 = io.of('/namespace34');
    namespace34.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace34.emit(msg);
        });
    });

    const namespace35 = io.of('/namespace35');
    namespace35.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace35.emit(msg);
        });
    });

    const namespace36 = io.of('/namespace36');
    namespace36.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace36.emit(msg);
        });
    });

    const namespace37 = io.of('/namespace37');
    namespace37.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace37.emit(msg);
        });
    });

    const namespace38 = io.of('/namespace38');
    namespace38.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace38.emit(msg);
        });
    });

    const namespace39 = io.of('/namespace39');
    namespace39.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace39.emit(msg);
        });
    });

    const namespace40 = io.of('/namespace40');
    namespace40.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace40.emit(msg);
        });
    });

    const namespace41 = io.of('/namespace41');
    namespace41.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace41.emit(msg);
        });
    });

    const namespace42 = io.of('/namespace42');
    namespace42.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace42.emit(msg);
        });
    });

    const namespace43 = io.of('/namespace43');
    namespace43.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace43.emit(msg);
        });
    });

    const namespace44 = io.of('/namespace44');
    namespace44.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace44.emit(msg);
        });
    });

    const namespace45 = io.of('/namespace45');
    namespace45.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace45.emit(msg);
        });
    });

    const namespace46 = io.of('/namespace46');
    namespace46.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace46.emit(msg);
        });
    });

    const namespace47 = io.of('/namespace47');
    namespace47.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace47.emit(msg);
        });
    });

    const namespace48 = io.of('/namespace48');
    namespace48.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace48.emit(msg);
        });
    });

    const namespace49 = io.of('/namespace49');
    namespace49.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace49.emit(msg);
        });
    });

    const namespace50 = io.of('/namespace50');
    namespace50.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace50.emit(msg);
        });
    });

    const namespace51 = io.of('/namespace51');
    namespace51.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace51.emit(msg);
        });
    });

    const namespace52 = io.of('/namespace52');
    namespace52.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace52.emit(msg);
        });
    });

    const namespace53 = io.of('/namespace53');
    namespace53.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace53.emit(msg);
        });
    });

    const namespace54 = io.of('/namespace54');
    namespace54.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace54.emit(msg);
        });
    });

    const namespace55 = io.of('/namespace55');
    namespace55.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace55.emit(msg);
        });
    });

    const namespace56 = io.of('/namespace56');
    namespace56.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace56.emit(msg);
        });
    });

    const namespace57 = io.of('/namespace57');
    namespace57.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace57.emit(msg);
        });
    });

    const namespace58 = io.of('/namespace58');
    namespace58.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace58.emit(msg);
        });
    });

    const namespace59 = io.of('/namespace59');
    namespace59.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace59.emit(msg);
        });
    });

    const namespace60 = io.of('/namespace60');
    namespace60.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace60.emit(msg);
        });
    });

    const namespace61 = io.of('/namespace61');
    namespace61.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace61.emit(msg);
        });
    });

    const namespace62 = io.of('/namespace62');
    namespace62.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace62.emit(msg);
        });
    });

    const namespace63 = io.of('/namespace63');
    namespace63.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace63.emit(msg);
        });
    });

    const namespace64 = io.of('/namespace64');
    namespace64.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace64.emit(msg);
        });
    });

    const namespace65 = io.of('/namespace65');
    namespace65.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace65.emit(msg);
        });
    });

    const namespace66 = io.of('/namespace66');
    namespace66.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace66.emit(msg);
        });
    });

    const namespace67 = io.of('/namespace67');
    namespace67.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace67.emit(msg);
        });
    });

    const namespace68 = io.of('/namespace68');
    namespace68.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace68.emit(msg);
        });
    });

    const namespace69 = io.of('/namespace69');
    namespace69.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace69.emit(msg);
        });
    });

    const namespace70 = io.of('/namespace70');
    namespace70.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace70.emit(msg);
        });
    });

    const namespace71 = io.of('/namespace71');
    namespace71.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace71.emit(msg);
        });
    });

    const namespace72 = io.of('/namespace72');
    namespace72.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace72.emit(msg);
        });
    });

    const namespace73 = io.of('/namespace73');
    namespace73.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace73.emit(msg);
        });
    });

    const namespace74 = io.of('/namespace74');
    namespace74.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace74.emit(msg);
        });
    });

    const namespace75 = io.of('/namespace75');
    namespace75.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace75.emit(msg);
        });
    });

    const namespace76 = io.of('/namespace76');
    namespace76.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace76.emit(msg);
        });
    });

    const namespace77 = io.of('/namespace77');
    namespace77.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace77.emit(msg);
        });
    });

    const namespace78 = io.of('/namespace78');
    namespace78.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace78.emit(msg);
        });
    });

    const namespace79 = io.of('/namespace79');
    namespace79.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace79.emit(msg);
        });
    });

    const namespace80 = io.of('/namespace80');
    namespace80.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace80.emit(msg);
        });
    });

    const namespace81 = io.of('/namespace81');
    namespace81.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace81.emit(msg);
        });
    });

    const namespace82 = io.of('/namespace82');
    namespace82.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace82.emit(msg);
        });
    });

    const namespace83 = io.of('/namespace83');
    namespace83.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace83.emit(msg);
        });
    });

    const namespace84 = io.of('/namespace84');
    namespace84.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace84.emit(msg);
        });
    });

    const namespace85 = io.of('/namespace85');
    namespace85.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace85.emit(msg);
        });
    });

    const namespace86 = io.of('/namespace86');
    namespace86.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace86.emit(msg);
        });
    });

    const namespace87 = io.of('/namespace87');
    namespace87.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace87.emit(msg);
        });
    });

    const namespace88 = io.of('/namespace88');
    namespace88.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace88.emit(msg);
        });
    });

    const namespace89 = io.of('/namespace89');
    namespace89.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace89.emit(msg);
        });
    });

    const namespace90 = io.of('/namespace90');
    namespace90.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace90.emit(msg);
        });
    });

    const namespace91 = io.of('/namespace91');
    namespace91.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace91.emit(msg);
        });
    });

    const namespace92 = io.of('/namespace92');
    namespace92.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace92.emit(msg);
        });
    });

    const namespace93 = io.of('/namespace93');
    namespace93.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace93.emit(msg);
        });
    });

    const namespace94 = io.of('/namespace94');
    namespace94.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace94.emit(msg);
        });
    });

    const namespace95 = io.of('/namespace95');
    namespace95.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace95.emit(msg);
        });
    });

    const namespace96 = io.of('/namespace96');
    namespace96.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace96.emit(msg);
        });
    });

    const namespace97 = io.of('/namespace97');
    namespace97.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace97.emit(msg);
        });
    });

    const namespace98 = io.of('/namespace98');
    namespace98.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace98.emit(msg);
        });
    });

    const namespace99 = io.of('/namespace99');
    namespace99.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace99.emit(msg);
        });
    });

    const namespace100 = io.of('/namespace100');
    namespace100.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace100.emit(msg);
        });
    });

    const namespace101 = io.of('/namespace101');
    namespace101.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace101.emit(msg);
        });
    });

    const namespace102 = io.of('/namespace102');
    namespace102.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace102.emit(msg);
        });
    });

    const namespace103 = io.of('/namespace103');
    namespace103.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace103.emit(msg);
        });
    });

    const namespace104 = io.of('/namespace104');
    namespace104.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace104.emit(msg);
        });
    });

    const namespace105 = io.of('/namespace105');
    namespace105.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace105.emit(msg);
        });
    });

    const namespace106 = io.of('/namespace106');
    namespace106.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace106.emit(msg);
        });
    });

    const namespace107 = io.of('/namespace107');
    namespace107.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace107.emit(msg);
        });
    });

    const namespace108 = io.of('/namespace108');
    namespace108.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace108.emit(msg);
        });
    });

    const namespace109 = io.of('/namespace109');
    namespace109.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace109.emit(msg);
        });
    });

    const namespace110 = io.of('/namespace110');
    namespace110.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace110.emit(msg);
        });
    });

    const namespace111 = io.of('/namespace111');
    namespace111.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace111.emit(msg);
        });
    });

    const namespace112 = io.of('/namespace112');
    namespace112.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace112.emit(msg);
        });
    });

    const namespace113 = io.of('/namespace113');
    namespace113.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace113.emit(msg);
        });
    });

    const namespace114 = io.of('/namespace114');
    namespace114.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace114.emit(msg);
        });
    });

    const namespace115 = io.of('/namespace115');
    namespace115.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace115.emit(msg);
        });
    });

    const namespace116 = io.of('/namespace116');
    namespace116.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace116.emit(msg);
        });
    });

    const namespace117 = io.of('/namespace117');
    namespace117.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace117.emit(msg);
        });
    });

    const namespace118 = io.of('/namespace118');
    namespace118.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace118.emit(msg);
        });
    });

    const namespace119 = io.of('/namespace119');
    namespace119.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace119.emit(msg);
        });
    });

    const namespace120 = io.of('/namespace120');
    namespace120.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace120.emit(msg);
        });
    });

    const namespace121 = io.of('/namespace121');
    namespace121.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace121.emit(msg);
        });
    });

    const namespace122 = io.of('/namespace122');
    namespace122.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace122.emit(msg);
        });
    });

    const namespace123 = io.of('/namespace123');
    namespace123.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace123.emit(msg);
        });
    });

    const namespace124 = io.of('/namespace124');
    namespace124.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace124.emit(msg);
        });
    });

    const namespace125 = io.of('/namespace125');
    namespace125.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace125.emit(msg);
        });
    });

    const namespace126 = io.of('/namespace126');
    namespace126.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace126.emit(msg);
        });
    });

    const namespace127 = io.of('/namespace127');
    namespace127.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace127.emit(msg);
        });
    });

    const namespace128 = io.of('/namespace128');
    namespace128.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace128.emit(msg);
        });
    });

    const namespace129 = io.of('/namespace129');
    namespace129.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace129.emit(msg);
        });
    });

    const namespace130 = io.of('/namespace130');
    namespace130.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace130.emit(msg);
        });
    });

    const namespace131 = io.of('/namespace131');
    namespace131.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace131.emit(msg);
        });
    });

    const namespace132 = io.of('/namespace132');
    namespace132.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace132.emit(msg);
        });
    });

    const namespace133 = io.of('/namespace133');
    namespace133.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace133.emit(msg);
        });
    });

    const namespace134 = io.of('/namespace134');
    namespace134.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace134.emit(msg);
        });
    });

    const namespace135 = io.of('/namespace135');
    namespace135.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace135.emit(msg);
        });
    });

    const namespace136 = io.of('/namespace136');
    namespace136.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace136.emit(msg);
        });
    });

    const namespace137 = io.of('/namespace137');
    namespace137.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace137.emit(msg);
        });
    });

    const namespace138 = io.of('/namespace138');
    namespace138.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace138.emit(msg);
        });
    });

    const namespace139 = io.of('/namespace139');
    namespace139.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace139.emit(msg);
        });
    });

    const namespace140 = io.of('/namespace140');
    namespace140.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace140.emit(msg);
        });
    });

    const namespace141 = io.of('/namespace141');
    namespace141.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace141.emit(msg);
        });
    });

    const namespace142 = io.of('/namespace142');
    namespace142.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace142.emit(msg);
        });
    });

    const namespace143 = io.of('/namespace143');
    namespace143.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace143.emit(msg);
        });
    });

    const namespace144 = io.of('/namespace144');
    namespace144.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace144.emit(msg);
        });
    });

    const namespace145 = io.of('/namespace145');
    namespace145.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace145.emit(msg);
        });
    });

    const namespace146 = io.of('/namespace146');
    namespace146.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace146.emit(msg);
        });
    });

    const namespace147 = io.of('/namespace147');
    namespace147.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace147.emit(msg);
        });
    });

    const namespace148 = io.of('/namespace148');
    namespace148.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace148.emit(msg);
        });
    });

    const namespace149 = io.of('/namespace149');
    namespace149.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace149.emit(msg);
        });
    });

    const namespace150 = io.of('/namespace150');
    namespace150.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace150.emit(msg);
        });
    });

    const namespace151 = io.of('/namespace151');
    namespace151.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace151.emit(msg);
        });
    });

    const namespace152 = io.of('/namespace152');
    namespace152.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace152.emit(msg);
        });
    });

    const namespace153 = io.of('/namespace153');
    namespace153.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace153.emit(msg);
        });
    });

    const namespace154 = io.of('/namespace154');
    namespace154.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace154.emit(msg);
        });
    });

    const namespace155 = io.of('/namespace155');
    namespace155.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace155.emit(msg);
        });
    });

    const namespace156 = io.of('/namespace156');
    namespace156.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace156.emit(msg);
        });
    });

    const namespace157 = io.of('/namespace157');
    namespace157.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace157.emit(msg);
        });
    });

    const namespace158 = io.of('/namespace158');
    namespace158.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace158.emit(msg);
        });
    });

    const namespace159 = io.of('/namespace159');
    namespace159.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace159.emit(msg);
        });
    });

    const namespace160 = io.of('/namespace160');
    namespace160.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace160.emit(msg);
        });
    });

    const namespace161 = io.of('/namespace161');
    namespace161.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace161.emit(msg);
        });
    });

    const namespace162 = io.of('/namespace162');
    namespace162.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace162.emit(msg);
        });
    });

    const namespace163 = io.of('/namespace163');
    namespace163.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace163.emit(msg);
        });
    });

    const namespace164 = io.of('/namespace164');
    namespace164.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace164.emit(msg);
        });
    });

    const namespace165 = io.of('/namespace165');
    namespace165.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace165.emit(msg);
        });
    });

    const namespace166 = io.of('/namespace166');
    namespace166.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace166.emit(msg);
        });
    });

    const namespace167 = io.of('/namespace167');
    namespace167.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace167.emit(msg);
        });
    });

    const namespace168 = io.of('/namespace168');
    namespace168.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace168.emit(msg);
        });
    });

    const namespace169 = io.of('/namespace169');
    namespace169.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace169.emit(msg);
        });
    });

    const namespace170 = io.of('/namespace170');
    namespace170.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace170.emit(msg);
        });
    });

    const namespace171 = io.of('/namespace171');
    namespace171.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace171.emit(msg);
        });
    });

    const namespace172 = io.of('/namespace172');
    namespace172.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace172.emit(msg);
        });
    });

    const namespace173 = io.of('/namespace173');
    namespace173.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace173.emit(msg);
        });
    });

    const namespace174 = io.of('/namespace174');
    namespace174.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace174.emit(msg);
        });
    });

    const namespace175 = io.of('/namespace175');
    namespace175.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace175.emit(msg);
        });
    });

    const namespace176 = io.of('/namespace176');
    namespace176.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace176.emit(msg);
        });
    });

    const namespace177 = io.of('/namespace177');
    namespace177.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace177.emit(msg);
        });
    });

    const namespace178 = io.of('/namespace178');
    namespace178.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace178.emit(msg);
        });
    });

    const namespace179 = io.of('/namespace179');
    namespace179.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace179.emit(msg);
        });
    });

    const namespace180 = io.of('/namespace180');
    namespace180.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace180.emit(msg);
        });
    });

    const namespace181 = io.of('/namespace181');
    namespace181.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace181.emit(msg);
        });
    });

    const namespace182 = io.of('/namespace182');
    namespace182.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace182.emit(msg);
        });
    });

    const namespace183 = io.of('/namespace183');
    namespace183.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace183.emit(msg);
        });
    });

    const namespace184 = io.of('/namespace184');
    namespace184.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace184.emit(msg);
        });
    });

    const namespace185 = io.of('/namespace185');
    namespace185.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace185.emit(msg);
        });
    });

    const namespace186 = io.of('/namespace186');
    namespace186.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace186.emit(msg);
        });
    });

    const namespace187 = io.of('/namespace187');
    namespace187.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace187.emit(msg);
        });
    });

    const namespace188 = io.of('/namespace188');
    namespace188.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace188.emit(msg);
        });
    });

    const namespace189 = io.of('/namespace189');
    namespace189.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace189.emit(msg);
        });
    });

    const namespace190 = io.of('/namespace190');
    namespace190.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace190.emit(msg);
        });
    });

    const namespace191 = io.of('/namespace191');
    namespace191.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace191.emit(msg);
        });
    });

    const namespace192 = io.of('/namespace192');
    namespace192.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace192.emit(msg);
        });
    });

    const namespace193 = io.of('/namespace193');
    namespace193.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace193.emit(msg);
        });
    });

    const namespace194 = io.of('/namespace194');
    namespace194.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace194.emit(msg);
        });
    });

    const namespace195 = io.of('/namespace195');
    namespace195.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace195.emit(msg);
        });
    });

    const namespace196 = io.of('/namespace196');
    namespace196.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace196.emit(msg);
        });
    });

    const namespace197 = io.of('/namespace197');
    namespace197.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace197.emit(msg);
        });
    });

    const namespace198 = io.of('/namespace198');
    namespace198.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace198.emit(msg);
        });
    });

    const namespace199 = io.of('/namespace199');
    namespace199.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace199.emit(msg);
        });
    });

    const namespace200 = io.of('/namespace200');
    namespace200.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace200.emit(msg);
        });
    });

    const namespace201 = io.of('/namespace201');
    namespace201.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace201.emit(msg);
        });
    });

    const namespace202 = io.of('/namespace202');
    namespace202.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace202.emit(msg);
        });
    });

    const namespace203 = io.of('/namespace203');
    namespace203.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace203.emit(msg);
        });
    });

    const namespace204 = io.of('/namespace204');
    namespace204.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace204.emit(msg);
        });
    });

    const namespace205 = io.of('/namespace205');
    namespace205.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace205.emit(msg);
        });
    });

    const namespace206 = io.of('/namespace206');
    namespace206.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace206.emit(msg);
        });
    });

    const namespace207 = io.of('/namespace207');
    namespace207.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace207.emit(msg);
        });
    });

    const namespace208 = io.of('/namespace208');
    namespace208.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace208.emit(msg);
        });
    });

    const namespace209 = io.of('/namespace209');
    namespace209.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace209.emit(msg);
        });
    });

    const namespace210 = io.of('/namespace210');
    namespace210.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace210.emit(msg);
        });
    });

    const namespace211 = io.of('/namespace211');
    namespace211.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace211.emit(msg);
        });
    });

    const namespace212 = io.of('/namespace212');
    namespace212.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace212.emit(msg);
        });
    });

    const namespace213 = io.of('/namespace213');
    namespace213.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace213.emit(msg);
        });
    });

    const namespace214 = io.of('/namespace214');
    namespace214.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace214.emit(msg);
        });
    });

    const namespace215 = io.of('/namespace215');
    namespace215.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace215.emit(msg);
        });
    });

    const namespace216 = io.of('/namespace216');
    namespace216.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace216.emit(msg);
        });
    });

    const namespace217 = io.of('/namespace217');
    namespace217.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace217.emit(msg);
        });
    });

    const namespace218 = io.of('/namespace218');
    namespace218.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace218.emit(msg);
        });
    });

    const namespace219 = io.of('/namespace219');
    namespace219.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace219.emit(msg);
        });
    });

    const namespace220 = io.of('/namespace220');
    namespace220.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace220.emit(msg);
        });
    });

    const namespace221 = io.of('/namespace221');
    namespace221.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace221.emit(msg);
        });
    });

    const namespace222 = io.of('/namespace222');
    namespace222.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace222.emit(msg);
        });
    });

    const namespace223 = io.of('/namespace223');
    namespace223.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace223.emit(msg);
        });
    });

    const namespace224 = io.of('/namespace224');
    namespace224.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace224.emit(msg);
        });
    });

    const namespace225 = io.of('/namespace225');
    namespace225.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace225.emit(msg);
        });
    });

    const namespace226 = io.of('/namespace226');
    namespace226.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace226.emit(msg);
        });
    });

    const namespace227 = io.of('/namespace227');
    namespace227.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace227.emit(msg);
        });
    });

    const namespace228 = io.of('/namespace228');
    namespace228.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace228.emit(msg);
        });
    });

    const namespace229 = io.of('/namespace229');
    namespace229.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace229.emit(msg);
        });
    });

    const namespace230 = io.of('/namespace230');
    namespace230.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace230.emit(msg);
        });
    });

    const namespace231 = io.of('/namespace231');
    namespace231.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace231.emit(msg);
        });
    });

    const namespace232 = io.of('/namespace232');
    namespace232.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace232.emit(msg);
        });
    });

    const namespace233 = io.of('/namespace233');
    namespace233.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace233.emit(msg);
        });
    });

    const namespace234 = io.of('/namespace234');
    namespace234.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace234.emit(msg);
        });
    });

    const namespace235 = io.of('/namespace235');
    namespace235.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace235.emit(msg);
        });
    });

    const namespace236 = io.of('/namespace236');
    namespace236.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace236.emit(msg);
        });
    });

    const namespace237 = io.of('/namespace237');
    namespace237.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace237.emit(msg);
        });
    });

    const namespace238 = io.of('/namespace238');
    namespace238.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace238.emit(msg);
        });
    });

    const namespace239 = io.of('/namespace239');
    namespace239.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace239.emit(msg);
        });
    });

    const namespace240 = io.of('/namespace240');
    namespace240.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace240.emit(msg);
        });
    });

    const namespace241 = io.of('/namespace241');
    namespace241.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace241.emit(msg);
        });
    });

    const namespace242 = io.of('/namespace242');
    namespace242.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace242.emit(msg);
        });
    });

    const namespace243 = io.of('/namespace243');
    namespace243.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace243.emit(msg);
        });
    });

    const namespace244 = io.of('/namespace244');
    namespace244.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace244.emit(msg);
        });
    });

    const namespace245 = io.of('/namespace245');
    namespace245.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace245.emit(msg);
        });
    });

    const namespace246 = io.of('/namespace246');
    namespace246.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace246.emit(msg);
        });
    });

    const namespace247 = io.of('/namespace247');
    namespace247.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace247.emit(msg);
        });
    });

    const namespace248 = io.of('/namespace248');
    namespace248.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace248.emit(msg);
        });
    });

    const namespace249 = io.of('/namespace249');
    namespace249.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace249.emit(msg);
        });
    });

    const namespace250 = io.of('/namespace250');
    namespace250.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace250.emit(msg);
        });
    });

    const namespace251 = io.of('/namespace251');
    namespace251.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace251.emit(msg);
        });
    });

    const namespace252 = io.of('/namespace252');
    namespace252.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace252.emit(msg);
        });
    });

    const namespace253 = io.of('/namespace253');
    namespace253.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace253.emit(msg);
        });
    });

    const namespace254 = io.of('/namespace254');
    namespace254.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace254.emit(msg);
        });
    });

    const namespace255 = io.of('/namespace255');
    namespace255.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace255.emit(msg);
        });
    });

    const namespace256 = io.of('/namespace256');
    namespace256.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace256.emit(msg);
        });
    });

    const namespace257 = io.of('/namespace257');
    namespace257.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace257.emit(msg);
        });
    });

    const namespace258 = io.of('/namespace258');
    namespace258.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace258.emit(msg);
        });
    });

    const namespace259 = io.of('/namespace259');
    namespace259.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace259.emit(msg);
        });
    });

    const namespace260 = io.of('/namespace260');
    namespace260.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace260.emit(msg);
        });
    });

    const namespace261 = io.of('/namespace261');
    namespace261.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace261.emit(msg);
        });
    });

    const namespace262 = io.of('/namespace262');
    namespace262.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace262.emit(msg);
        });
    });

    const namespace263 = io.of('/namespace263');
    namespace263.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace263.emit(msg);
        });
    });

    const namespace264 = io.of('/namespace264');
    namespace264.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace264.emit(msg);
        });
    });

    const namespace265 = io.of('/namespace265');
    namespace265.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace265.emit(msg);
        });
    });

    const namespace266 = io.of('/namespace266');
    namespace266.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace266.emit(msg);
        });
    });

    const namespace267 = io.of('/namespace267');
    namespace267.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace267.emit(msg);
        });
    });

    const namespace268 = io.of('/namespace268');
    namespace268.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace268.emit(msg);
        });
    });

    const namespace269 = io.of('/namespace269');
    namespace269.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace269.emit(msg);
        });
    });

    const namespace270 = io.of('/namespace270');
    namespace270.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace270.emit(msg);
        });
    });

    const namespace271 = io.of('/namespace271');
    namespace271.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace271.emit(msg);
        });
    });

    const namespace272 = io.of('/namespace272');
    namespace272.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace272.emit(msg);
        });
    });

    const namespace273 = io.of('/namespace273');
    namespace273.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace273.emit(msg);
        });
    });

    const namespace274 = io.of('/namespace274');
    namespace274.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace274.emit(msg);
        });
    });

    const namespace275 = io.of('/namespace275');
    namespace275.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace275.emit(msg);
        });
    });

    const namespace276 = io.of('/namespace276');
    namespace276.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace276.emit(msg);
        });
    });

    const namespace277 = io.of('/namespace277');
    namespace277.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace277.emit(msg);
        });
    });

    const namespace278 = io.of('/namespace278');
    namespace278.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace278.emit(msg);
        });
    });

    const namespace279 = io.of('/namespace279');
    namespace279.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace279.emit(msg);
        });
    });

    const namespace280 = io.of('/namespace280');
    namespace280.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace280.emit(msg);
        });
    });

    const namespace281 = io.of('/namespace281');
    namespace281.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace281.emit(msg);
        });
    });

    const namespace282 = io.of('/namespace282');
    namespace282.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace282.emit(msg);
        });
    });

    const namespace283 = io.of('/namespace283');
    namespace283.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace283.emit(msg);
        });
    });

    const namespace284 = io.of('/namespace284');
    namespace284.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace284.emit(msg);
        });
    });

    const namespace285 = io.of('/namespace285');
    namespace285.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace285.emit(msg);
        });
    });

    const namespace286 = io.of('/namespace286');
    namespace286.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace286.emit(msg);
        });
    });

    const namespace287 = io.of('/namespace287');
    namespace287.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace287.emit(msg);
        });
    });

    const namespace288 = io.of('/namespace288');
    namespace288.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace288.emit(msg);
        });
    });

    const namespace289 = io.of('/namespace289');
    namespace289.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace289.emit(msg);
        });
    });

    const namespace290 = io.of('/namespace290');
    namespace290.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace290.emit(msg);
        });
    });

    const namespace291 = io.of('/namespace291');
    namespace291.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace291.emit(msg);
        });
    });

    const namespace292 = io.of('/namespace292');
    namespace292.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace292.emit(msg);
        });
    });

    const namespace293 = io.of('/namespace293');
    namespace293.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace293.emit(msg);
        });
    });

    const namespace294 = io.of('/namespace294');
    namespace294.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace294.emit(msg);
        });
    });

    const namespace295 = io.of('/namespace295');
    namespace295.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace295.emit(msg);
        });
    });

    const namespace296 = io.of('/namespace296');
    namespace296.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace296.emit(msg);
        });
    });

    const namespace297 = io.of('/namespace297');
    namespace297.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace297.emit(msg);
        });
    });

    const namespace298 = io.of('/namespace298');
    namespace298.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace298.emit(msg);
        });
    });

    const namespace299 = io.of('/namespace299');
    namespace299.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace299.emit(msg);
        });
    });

    const namespace300 = io.of('/namespace300');
    namespace300.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace300.emit(msg);
        });
    });

    const namespace301 = io.of('/namespace301');
    namespace301.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace301.emit(msg);
        });
    });

    const namespace302 = io.of('/namespace302');
    namespace302.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace302.emit(msg);
        });
    });

    const namespace303 = io.of('/namespace303');
    namespace303.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace303.emit(msg);
        });
    });

    const namespace304 = io.of('/namespace304');
    namespace304.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace304.emit(msg);
        });
    });

    const namespace305 = io.of('/namespace305');
    namespace305.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace305.emit(msg);
        });
    });

    const namespace306 = io.of('/namespace306');
    namespace306.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace306.emit(msg);
        });
    });

    const namespace307 = io.of('/namespace307');
    namespace307.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace307.emit(msg);
        });
    });

    const namespace308 = io.of('/namespace308');
    namespace308.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace308.emit(msg);
        });
    });

    const namespace309 = io.of('/namespace309');
    namespace309.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace309.emit(msg);
        });
    });

    const namespace310 = io.of('/namespace310');
    namespace310.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace310.emit(msg);
        });
    });

    const namespace311 = io.of('/namespace311');
    namespace311.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace311.emit(msg);
        });
    });

    const namespace312 = io.of('/namespace312');
    namespace312.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace312.emit(msg);
        });
    });

    const namespace313 = io.of('/namespace313');
    namespace313.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace313.emit(msg);
        });
    });

    const namespace314 = io.of('/namespace314');
    namespace314.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace314.emit(msg);
        });
    });

    const namespace315 = io.of('/namespace315');
    namespace315.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace315.emit(msg);
        });
    });

    const namespace316 = io.of('/namespace316');
    namespace316.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace316.emit(msg);
        });
    });

    const namespace317 = io.of('/namespace317');
    namespace317.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace317.emit(msg);
        });
    });

    const namespace318 = io.of('/namespace318');
    namespace318.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace318.emit(msg);
        });
    });

    const namespace319 = io.of('/namespace319');
    namespace319.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace319.emit(msg);
        });
    });

    const namespace320 = io.of('/namespace320');
    namespace320.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace320.emit(msg);
        });
    });

    const namespace321 = io.of('/namespace321');
    namespace321.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace321.emit(msg);
        });
    });

    const namespace322 = io.of('/namespace322');
    namespace322.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace322.emit(msg);
        });
    });

    const namespace323 = io.of('/namespace323');
    namespace323.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace323.emit(msg);
        });
    });

    const namespace324 = io.of('/namespace324');
    namespace324.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace324.emit(msg);
        });
    });

    const namespace325 = io.of('/namespace325');
    namespace325.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace325.emit(msg);
        });
    });

    const namespace326 = io.of('/namespace326');
    namespace326.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace326.emit(msg);
        });
    });

    const namespace327 = io.of('/namespace327');
    namespace327.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace327.emit(msg);
        });
    });

    const namespace328 = io.of('/namespace328');
    namespace328.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace328.emit(msg);
        });
    });

    const namespace329 = io.of('/namespace329');
    namespace329.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace329.emit(msg);
        });
    });

    const namespace330 = io.of('/namespace330');
    namespace330.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace330.emit(msg);
        });
    });

    const namespace331 = io.of('/namespace331');
    namespace331.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace331.emit(msg);
        });
    });

    const namespace332 = io.of('/namespace332');
    namespace332.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace332.emit(msg);
        });
    });

    const namespace333 = io.of('/namespace333');
    namespace333.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace333.emit(msg);
        });
    });

    const namespace334 = io.of('/namespace334');
    namespace334.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace334.emit(msg);
        });
    });

    const namespace335 = io.of('/namespace335');
    namespace335.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace335.emit(msg);
        });
    });

    const namespace336 = io.of('/namespace336');
    namespace336.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace336.emit(msg);
        });
    });

    const namespace337 = io.of('/namespace337');
    namespace337.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace337.emit(msg);
        });
    });

    const namespace338 = io.of('/namespace338');
    namespace338.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace338.emit(msg);
        });
    });

    const namespace339 = io.of('/namespace339');
    namespace339.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace339.emit(msg);
        });
    });

    const namespace340 = io.of('/namespace340');
    namespace340.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace340.emit(msg);
        });
    });

    const namespace341 = io.of('/namespace341');
    namespace341.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace341.emit(msg);
        });
    });

    const namespace342 = io.of('/namespace342');
    namespace342.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace342.emit(msg);
        });
    });

    const namespace343 = io.of('/namespace343');
    namespace343.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace343.emit(msg);
        });
    });

    const namespace344 = io.of('/namespace344');
    namespace344.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace344.emit(msg);
        });
    });

    const namespace345 = io.of('/namespace345');
    namespace345.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace345.emit(msg);
        });
    });

    const namespace346 = io.of('/namespace346');
    namespace346.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace346.emit(msg);
        });
    });

    const namespace347 = io.of('/namespace347');
    namespace347.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace347.emit(msg);
        });
    });

    const namespace348 = io.of('/namespace348');
    namespace348.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace348.emit(msg);
        });
    });

    const namespace349 = io.of('/namespace349');
    namespace349.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace349.emit(msg);
        });
    });

    const namespace350 = io.of('/namespace350');
    namespace350.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace350.emit(msg);
        });
    });

    const namespace351 = io.of('/namespace351');
    namespace351.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace351.emit(msg);
        });
    });

    const namespace352 = io.of('/namespace352');
    namespace352.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace352.emit(msg);
        });
    });

    const namespace353 = io.of('/namespace353');
    namespace353.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace353.emit(msg);
        });
    });

    const namespace354 = io.of('/namespace354');
    namespace354.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace354.emit(msg);
        });
    });

    const namespace355 = io.of('/namespace355');
    namespace355.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace355.emit(msg);
        });
    });

    const namespace356 = io.of('/namespace356');
    namespace356.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace356.emit(msg);
        });
    });

    const namespace357 = io.of('/namespace357');
    namespace357.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace357.emit(msg);
        });
    });

    const namespace358 = io.of('/namespace358');
    namespace358.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace358.emit(msg);
        });
    });

    const namespace359 = io.of('/namespace359');
    namespace359.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace359.emit(msg);
        });
    });

    const namespace360 = io.of('/namespace360');
    namespace360.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace360.emit(msg);
        });
    });

    const namespace361 = io.of('/namespace361');
    namespace361.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace361.emit(msg);
        });
    });

    const namespace362 = io.of('/namespace362');
    namespace362.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace362.emit(msg);
        });
    });

    const namespace363 = io.of('/namespace363');
    namespace363.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace363.emit(msg);
        });
    });

    const namespace364 = io.of('/namespace364');
    namespace364.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace364.emit(msg);
        });
    });

    const namespace365 = io.of('/namespace365');
    namespace365.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace365.emit(msg);
        });
    });

    const namespace366 = io.of('/namespace366');
    namespace366.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace366.emit(msg);
        });
    });

    const namespace367 = io.of('/namespace367');
    namespace367.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace367.emit(msg);
        });
    });

    const namespace368 = io.of('/namespace368');
    namespace368.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace368.emit(msg);
        });
    });

    const namespace369 = io.of('/namespace369');
    namespace369.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace369.emit(msg);
        });
    });

    const namespace370 = io.of('/namespace370');
    namespace370.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace370.emit(msg);
        });
    });

    const namespace371 = io.of('/namespace371');
    namespace371.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace371.emit(msg);
        });
    });

    const namespace372 = io.of('/namespace372');
    namespace372.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace372.emit(msg);
        });
    });

    const namespace373 = io.of('/namespace373');
    namespace373.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace373.emit(msg);
        });
    });

    const namespace374 = io.of('/namespace374');
    namespace374.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace374.emit(msg);
        });
    });

    const namespace375 = io.of('/namespace375');
    namespace375.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace375.emit(msg);
        });
    });

    const namespace376 = io.of('/namespace376');
    namespace376.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace376.emit(msg);
        });
    });

    const namespace377 = io.of('/namespace377');
    namespace377.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace377.emit(msg);
        });
    });

    const namespace378 = io.of('/namespace378');
    namespace378.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace378.emit(msg);
        });
    });

    const namespace379 = io.of('/namespace379');
    namespace379.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace379.emit(msg);
        });
    });

    const namespace380 = io.of('/namespace380');
    namespace380.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace380.emit(msg);
        });
    });

    const namespace381 = io.of('/namespace381');
    namespace381.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace381.emit(msg);
        });
    });

    const namespace382 = io.of('/namespace382');
    namespace382.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace382.emit(msg);
        });
    });

    const namespace383 = io.of('/namespace383');
    namespace383.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace383.emit(msg);
        });
    });

    const namespace384 = io.of('/namespace384');
    namespace384.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace384.emit(msg);
        });
    });

    const namespace385 = io.of('/namespace385');
    namespace385.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace385.emit(msg);
        });
    });

    const namespace386 = io.of('/namespace386');
    namespace386.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace386.emit(msg);
        });
    });

    const namespace387 = io.of('/namespace387');
    namespace387.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace387.emit(msg);
        });
    });

    const namespace388 = io.of('/namespace388');
    namespace388.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace388.emit(msg);
        });
    });

    const namespace389 = io.of('/namespace389');
    namespace389.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace389.emit(msg);
        });
    });

    const namespace390 = io.of('/namespace390');
    namespace390.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace390.emit(msg);
        });
    });

    const namespace391 = io.of('/namespace391');
    namespace391.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace391.emit(msg);
        });
    });

    const namespace392 = io.of('/namespace392');
    namespace392.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace392.emit(msg);
        });
    });

    const namespace393 = io.of('/namespace393');
    namespace393.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace393.emit(msg);
        });
    });

    const namespace394 = io.of('/namespace394');
    namespace394.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace394.emit(msg);
        });
    });

    const namespace395 = io.of('/namespace395');
    namespace395.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace395.emit(msg);
        });
    });

    const namespace396 = io.of('/namespace396');
    namespace396.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace396.emit(msg);
        });
    });

    const namespace397 = io.of('/namespace397');
    namespace397.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace397.emit(msg);
        });
    });

    const namespace398 = io.of('/namespace398');
    namespace398.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace398.emit(msg);
        });
    });

    const namespace399 = io.of('/namespace399');
    namespace399.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace399.emit(msg);
        });
    });

    const namespace400 = io.of('/namespace400');
    namespace400.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace400.emit(msg);
        });
    });

    const namespace401 = io.of('/namespace401');
    namespace401.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace401.emit(msg);
        });
    });

    const namespace402 = io.of('/namespace402');
    namespace402.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace402.emit(msg);
        });
    });

    const namespace403 = io.of('/namespace403');
    namespace403.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace403.emit(msg);
        });
    });

    const namespace404 = io.of('/namespace404');
    namespace404.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace404.emit(msg);
        });
    });

    const namespace405 = io.of('/namespace405');
    namespace405.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace405.emit(msg);
        });
    });

    const namespace406 = io.of('/namespace406');
    namespace406.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace406.emit(msg);
        });
    });

    const namespace407 = io.of('/namespace407');
    namespace407.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace407.emit(msg);
        });
    });

    const namespace408 = io.of('/namespace408');
    namespace408.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace408.emit(msg);
        });
    });

    const namespace409 = io.of('/namespace409');
    namespace409.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace409.emit(msg);
        });
    });

    const namespace410 = io.of('/namespace410');
    namespace410.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace410.emit(msg);
        });
    });

    const namespace411 = io.of('/namespace411');
    namespace411.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace411.emit(msg);
        });
    });

    const namespace412 = io.of('/namespace412');
    namespace412.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace412.emit(msg);
        });
    });

    const namespace413 = io.of('/namespace413');
    namespace413.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace413.emit(msg);
        });
    });

    const namespace414 = io.of('/namespace414');
    namespace414.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace414.emit(msg);
        });
    });

    const namespace415 = io.of('/namespace415');
    namespace415.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace415.emit(msg);
        });
    });

    const namespace416 = io.of('/namespace416');
    namespace416.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace416.emit(msg);
        });
    });

    const namespace417 = io.of('/namespace417');
    namespace417.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace417.emit(msg);
        });
    });

    const namespace418 = io.of('/namespace418');
    namespace418.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace418.emit(msg);
        });
    });

    const namespace419 = io.of('/namespace419');
    namespace419.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace419.emit(msg);
        });
    });

    const namespace420 = io.of('/namespace420');
    namespace420.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace420.emit(msg);
        });
    });

    const namespace421 = io.of('/namespace421');
    namespace421.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace421.emit(msg);
        });
    });

    const namespace422 = io.of('/namespace422');
    namespace422.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace422.emit(msg);
        });
    });

    const namespace423 = io.of('/namespace423');
    namespace423.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace423.emit(msg);
        });
    });

    const namespace424 = io.of('/namespace424');
    namespace424.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace424.emit(msg);
        });
    });

    const namespace425 = io.of('/namespace425');
    namespace425.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace425.emit(msg);
        });
    });

    const namespace426 = io.of('/namespace426');
    namespace426.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace426.emit(msg);
        });
    });

    const namespace427 = io.of('/namespace427');
    namespace427.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace427.emit(msg);
        });
    });

    const namespace428 = io.of('/namespace428');
    namespace428.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace428.emit(msg);
        });
    });

    const namespace429 = io.of('/namespace429');
    namespace429.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace429.emit(msg);
        });
    });

    const namespace430 = io.of('/namespace430');
    namespace430.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace430.emit(msg);
        });
    });

    const namespace431 = io.of('/namespace431');
    namespace431.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace431.emit(msg);
        });
    });

    const namespace432 = io.of('/namespace432');
    namespace432.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace432.emit(msg);
        });
    });

    const namespace433 = io.of('/namespace433');
    namespace433.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace433.emit(msg);
        });
    });

    const namespace434 = io.of('/namespace434');
    namespace434.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace434.emit(msg);
        });
    });

    const namespace435 = io.of('/namespace435');
    namespace435.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace435.emit(msg);
        });
    });

    const namespace436 = io.of('/namespace436');
    namespace436.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace436.emit(msg);
        });
    });

    const namespace437 = io.of('/namespace437');
    namespace437.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace437.emit(msg);
        });
    });

    const namespace438 = io.of('/namespace438');
    namespace438.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace438.emit(msg);
        });
    });

    const namespace439 = io.of('/namespace439');
    namespace439.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace439.emit(msg);
        });
    });

    const namespace440 = io.of('/namespace440');
    namespace440.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace440.emit(msg);
        });
    });

    const namespace441 = io.of('/namespace441');
    namespace441.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace441.emit(msg);
        });
    });

    const namespace442 = io.of('/namespace442');
    namespace442.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace442.emit(msg);
        });
    });

    const namespace443 = io.of('/namespace443');
    namespace443.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace443.emit(msg);
        });
    });

    const namespace444 = io.of('/namespace444');
    namespace444.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace444.emit(msg);
        });
    });

    const namespace445 = io.of('/namespace445');
    namespace445.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace445.emit(msg);
        });
    });

    const namespace446 = io.of('/namespace446');
    namespace446.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace446.emit(msg);
        });
    });

    const namespace447 = io.of('/namespace447');
    namespace447.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace447.emit(msg);
        });
    });

    const namespace448 = io.of('/namespace448');
    namespace448.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace448.emit(msg);
        });
    });

    const namespace449 = io.of('/namespace449');
    namespace449.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace449.emit(msg);
        });
    });

    const namespace450 = io.of('/namespace450');
    namespace450.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace450.emit(msg);
        });
    });

    const namespace451 = io.of('/namespace451');
    namespace451.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace451.emit(msg);
        });
    });

    const namespace452 = io.of('/namespace452');
    namespace452.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace452.emit(msg);
        });
    });

    const namespace453 = io.of('/namespace453');
    namespace453.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace453.emit(msg);
        });
    });

    const namespace454 = io.of('/namespace454');
    namespace454.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace454.emit(msg);
        });
    });

    const namespace455 = io.of('/namespace455');
    namespace455.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace455.emit(msg);
        });
    });

    const namespace456 = io.of('/namespace456');
    namespace456.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace456.emit(msg);
        });
    });

    const namespace457 = io.of('/namespace457');
    namespace457.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace457.emit(msg);
        });
    });

    const namespace458 = io.of('/namespace458');
    namespace458.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace458.emit(msg);
        });
    });

    const namespace459 = io.of('/namespace459');
    namespace459.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace459.emit(msg);
        });
    });

    const namespace460 = io.of('/namespace460');
    namespace460.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace460.emit(msg);
        });
    });

    const namespace461 = io.of('/namespace461');
    namespace461.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace461.emit(msg);
        });
    });

    const namespace462 = io.of('/namespace462');
    namespace462.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace462.emit(msg);
        });
    });

    const namespace463 = io.of('/namespace463');
    namespace463.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace463.emit(msg);
        });
    });

    const namespace464 = io.of('/namespace464');
    namespace464.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace464.emit(msg);
        });
    });

    const namespace465 = io.of('/namespace465');
    namespace465.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace465.emit(msg);
        });
    });

    const namespace466 = io.of('/namespace466');
    namespace466.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace466.emit(msg);
        });
    });

    const namespace467 = io.of('/namespace467');
    namespace467.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace467.emit(msg);
        });
    });

    const namespace468 = io.of('/namespace468');
    namespace468.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace468.emit(msg);
        });
    });

    const namespace469 = io.of('/namespace469');
    namespace469.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace469.emit(msg);
        });
    });

    const namespace470 = io.of('/namespace470');
    namespace470.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace470.emit(msg);
        });
    });

    const namespace471 = io.of('/namespace471');
    namespace471.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace471.emit(msg);
        });
    });

    const namespace472 = io.of('/namespace472');
    namespace472.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace472.emit(msg);
        });
    });

    const namespace473 = io.of('/namespace473');
    namespace473.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace473.emit(msg);
        });
    });

    const namespace474 = io.of('/namespace474');
    namespace474.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace474.emit(msg);
        });
    });

    const namespace475 = io.of('/namespace475');
    namespace475.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace475.emit(msg);
        });
    });

    const namespace476 = io.of('/namespace476');
    namespace476.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace476.emit(msg);
        });
    });

    const namespace477 = io.of('/namespace477');
    namespace477.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace477.emit(msg);
        });
    });

    const namespace478 = io.of('/namespace478');
    namespace478.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace478.emit(msg);
        });
    });

    const namespace479 = io.of('/namespace479');
    namespace479.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace479.emit(msg);
        });
    });

    const namespace480 = io.of('/namespace480');
    namespace480.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace480.emit(msg);
        });
    });

    const namespace481 = io.of('/namespace481');
    namespace481.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace481.emit(msg);
        });
    });

    const namespace482 = io.of('/namespace482');
    namespace482.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace482.emit(msg);
        });
    });

    const namespace483 = io.of('/namespace483');
    namespace483.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace483.emit(msg);
        });
    });

    const namespace484 = io.of('/namespace484');
    namespace484.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace484.emit(msg);
        });
    });

    const namespace485 = io.of('/namespace485');
    namespace485.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace485.emit(msg);
        });
    });

    const namespace486 = io.of('/namespace486');
    namespace486.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace486.emit(msg);
        });
    });

    const namespace487 = io.of('/namespace487');
    namespace487.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace487.emit(msg);
        });
    });

    const namespace488 = io.of('/namespace488');
    namespace488.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace488.emit(msg);
        });
    });

    const namespace489 = io.of('/namespace489');
    namespace489.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace489.emit(msg);
        });
    });

    const namespace490 = io.of('/namespace490');
    namespace490.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace490.emit(msg);
        });
    });

    const namespace491 = io.of('/namespace491');
    namespace491.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace491.emit(msg);
        });
    });

    const namespace492 = io.of('/namespace492');
    namespace492.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace492.emit(msg);
        });
    });

    const namespace493 = io.of('/namespace493');
    namespace493.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace493.emit(msg);
        });
    });

    const namespace494 = io.of('/namespace494');
    namespace494.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace494.emit(msg);
        });
    });

    const namespace495 = io.of('/namespace495');
    namespace495.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace495.emit(msg);
        });
    });

    const namespace496 = io.of('/namespace496');
    namespace496.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace496.emit(msg);
        });
    });

    const namespace497 = io.of('/namespace497');
    namespace497.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace497.emit(msg);
        });
    });

    const namespace498 = io.of('/namespace498');
    namespace498.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace498.emit(msg);
        });
    });

    const namespace499 = io.of('/namespace499');
    namespace499.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace499.emit(msg);
        });
    });

    const namespace500 = io.of('/namespace500');
    namespace500.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace500.emit(msg);
        });
    });

    const namespace501 = io.of('/namespace501');
    namespace501.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace501.emit(msg);
        });
    });

    const namespace502 = io.of('/namespace502');
    namespace502.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace502.emit(msg);
        });
    });

    const namespace503 = io.of('/namespace503');
    namespace503.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace503.emit(msg);
        });
    });

    const namespace504 = io.of('/namespace504');
    namespace504.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace504.emit(msg);
        });
    });

    const namespace505 = io.of('/namespace505');
    namespace505.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace505.emit(msg);
        });
    });

    const namespace506 = io.of('/namespace506');
    namespace506.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace506.emit(msg);
        });
    });

    const namespace507 = io.of('/namespace507');
    namespace507.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace507.emit(msg);
        });
    });

    const namespace508 = io.of('/namespace508');
    namespace508.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace508.emit(msg);
        });
    });

    const namespace509 = io.of('/namespace509');
    namespace509.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace509.emit(msg);
        });
    });

    const namespace510 = io.of('/namespace510');
    namespace510.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace510.emit(msg);
        });
    });

    const namespace511 = io.of('/namespace511');
    namespace511.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace511.emit(msg);
        });
    });

    const namespace512 = io.of('/namespace512');
    namespace512.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace512.emit(msg);
        });
    });

    const namespace513 = io.of('/namespace513');
    namespace513.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace513.emit(msg);
        });
    });

    const namespace514 = io.of('/namespace514');
    namespace514.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace514.emit(msg);
        });
    });

    const namespace515 = io.of('/namespace515');
    namespace515.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace515.emit(msg);
        });
    });

    const namespace516 = io.of('/namespace516');
    namespace516.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace516.emit(msg);
        });
    });

    const namespace517 = io.of('/namespace517');
    namespace517.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace517.emit(msg);
        });
    });

    const namespace518 = io.of('/namespace518');
    namespace518.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace518.emit(msg);
        });
    });

    const namespace519 = io.of('/namespace519');
    namespace519.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace519.emit(msg);
        });
    });

    const namespace520 = io.of('/namespace520');
    namespace520.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace520.emit(msg);
        });
    });

    const namespace521 = io.of('/namespace521');
    namespace521.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace521.emit(msg);
        });
    });

    const namespace522 = io.of('/namespace522');
    namespace522.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace522.emit(msg);
        });
    });

    const namespace523 = io.of('/namespace523');
    namespace523.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace523.emit(msg);
        });
    });

    const namespace524 = io.of('/namespace524');
    namespace524.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace524.emit(msg);
        });
    });

    const namespace525 = io.of('/namespace525');
    namespace525.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace525.emit(msg);
        });
    });

    const namespace526 = io.of('/namespace526');
    namespace526.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace526.emit(msg);
        });
    });

    const namespace527 = io.of('/namespace527');
    namespace527.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace527.emit(msg);
        });
    });

    const namespace528 = io.of('/namespace528');
    namespace528.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace528.emit(msg);
        });
    });

    const namespace529 = io.of('/namespace529');
    namespace529.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace529.emit(msg);
        });
    });

    const namespace530 = io.of('/namespace530');
    namespace530.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace530.emit(msg);
        });
    });

    const namespace531 = io.of('/namespace531');
    namespace531.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace531.emit(msg);
        });
    });

    const namespace532 = io.of('/namespace532');
    namespace532.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace532.emit(msg);
        });
    });

    const namespace533 = io.of('/namespace533');
    namespace533.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace533.emit(msg);
        });
    });

    const namespace534 = io.of('/namespace534');
    namespace534.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace534.emit(msg);
        });
    });

    const namespace535 = io.of('/namespace535');
    namespace535.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace535.emit(msg);
        });
    });

    const namespace536 = io.of('/namespace536');
    namespace536.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace536.emit(msg);
        });
    });

    const namespace537 = io.of('/namespace537');
    namespace537.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace537.emit(msg);
        });
    });

    const namespace538 = io.of('/namespace538');
    namespace538.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace538.emit(msg);
        });
    });

    const namespace539 = io.of('/namespace539');
    namespace539.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace539.emit(msg);
        });
    });

    const namespace540 = io.of('/namespace540');
    namespace540.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace540.emit(msg);
        });
    });

    const namespace541 = io.of('/namespace541');
    namespace541.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace541.emit(msg);
        });
    });

    const namespace542 = io.of('/namespace542');
    namespace542.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace542.emit(msg);
        });
    });

    const namespace543 = io.of('/namespace543');
    namespace543.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace543.emit(msg);
        });
    });

    const namespace544 = io.of('/namespace544');
    namespace544.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace544.emit(msg);
        });
    });

    const namespace545 = io.of('/namespace545');
    namespace545.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace545.emit(msg);
        });
    });

    const namespace546 = io.of('/namespace546');
    namespace546.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace546.emit(msg);
        });
    });

    const namespace547 = io.of('/namespace547');
    namespace547.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace547.emit(msg);
        });
    });

    const namespace548 = io.of('/namespace548');
    namespace548.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace548.emit(msg);
        });
    });

    const namespace549 = io.of('/namespace549');
    namespace549.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace549.emit(msg);
        });
    });

    const namespace550 = io.of('/namespace550');
    namespace550.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace550.emit(msg);
        });
    });

    const namespace551 = io.of('/namespace551');
    namespace551.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace551.emit(msg);
        });
    });

    const namespace552 = io.of('/namespace552');
    namespace552.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace552.emit(msg);
        });
    });

    const namespace553 = io.of('/namespace553');
    namespace553.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace553.emit(msg);
        });
    });

    const namespace554 = io.of('/namespace554');
    namespace554.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace554.emit(msg);
        });
    });

    const namespace555 = io.of('/namespace555');
    namespace555.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace555.emit(msg);
        });
    });

    const namespace556 = io.of('/namespace556');
    namespace556.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace556.emit(msg);
        });
    });

    const namespace557 = io.of('/namespace557');
    namespace557.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace557.emit(msg);
        });
    });

    const namespace558 = io.of('/namespace558');
    namespace558.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace558.emit(msg);
        });
    });

    const namespace559 = io.of('/namespace559');
    namespace559.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace559.emit(msg);
        });
    });

    const namespace560 = io.of('/namespace560');
    namespace560.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace560.emit(msg);
        });
    });

    const namespace561 = io.of('/namespace561');
    namespace561.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace561.emit(msg);
        });
    });

    const namespace562 = io.of('/namespace562');
    namespace562.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace562.emit(msg);
        });
    });

    const namespace563 = io.of('/namespace563');
    namespace563.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace563.emit(msg);
        });
    });

    const namespace564 = io.of('/namespace564');
    namespace564.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace564.emit(msg);
        });
    });

    const namespace565 = io.of('/namespace565');
    namespace565.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace565.emit(msg);
        });
    });

    const namespace566 = io.of('/namespace566');
    namespace566.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace566.emit(msg);
        });
    });

    const namespace567 = io.of('/namespace567');
    namespace567.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace567.emit(msg);
        });
    });

    const namespace568 = io.of('/namespace568');
    namespace568.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace568.emit(msg);
        });
    });

    const namespace569 = io.of('/namespace569');
    namespace569.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace569.emit(msg);
        });
    });

    const namespace570 = io.of('/namespace570');
    namespace570.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace570.emit(msg);
        });
    });

    const namespace571 = io.of('/namespace571');
    namespace571.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace571.emit(msg);
        });
    });

    const namespace572 = io.of('/namespace572');
    namespace572.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace572.emit(msg);
        });
    });

    const namespace573 = io.of('/namespace573');
    namespace573.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace573.emit(msg);
        });
    });

    const namespace574 = io.of('/namespace574');
    namespace574.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace574.emit(msg);
        });
    });

    const namespace575 = io.of('/namespace575');
    namespace575.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace575.emit(msg);
        });
    });

    const namespace576 = io.of('/namespace576');
    namespace576.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace576.emit(msg);
        });
    });

    const namespace577 = io.of('/namespace577');
    namespace577.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace577.emit(msg);
        });
    });

    const namespace578 = io.of('/namespace578');
    namespace578.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace578.emit(msg);
        });
    });

    const namespace579 = io.of('/namespace579');
    namespace579.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace579.emit(msg);
        });
    });

    const namespace580 = io.of('/namespace580');
    namespace580.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace580.emit(msg);
        });
    });

    const namespace581 = io.of('/namespace581');
    namespace581.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace581.emit(msg);
        });
    });

    const namespace582 = io.of('/namespace582');
    namespace582.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace582.emit(msg);
        });
    });

    const namespace583 = io.of('/namespace583');
    namespace583.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace583.emit(msg);
        });
    });

    const namespace584 = io.of('/namespace584');
    namespace584.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace584.emit(msg);
        });
    });

    const namespace585 = io.of('/namespace585');
    namespace585.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace585.emit(msg);
        });
    });

    const namespace586 = io.of('/namespace586');
    namespace586.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace586.emit(msg);
        });
    });

    const namespace587 = io.of('/namespace587');
    namespace587.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace587.emit(msg);
        });
    });

    const namespace588 = io.of('/namespace588');
    namespace588.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace588.emit(msg);
        });
    });

    const namespace589 = io.of('/namespace589');
    namespace589.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace589.emit(msg);
        });
    });

    const namespace590 = io.of('/namespace590');
    namespace590.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace590.emit(msg);
        });
    });

    const namespace591 = io.of('/namespace591');
    namespace591.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace591.emit(msg);
        });
    });

    const namespace592 = io.of('/namespace592');
    namespace592.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace592.emit(msg);
        });
    });

    const namespace593 = io.of('/namespace593');
    namespace593.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace593.emit(msg);
        });
    });

    const namespace594 = io.of('/namespace594');
    namespace594.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace594.emit(msg);
        });
    });

    const namespace595 = io.of('/namespace595');
    namespace595.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace595.emit(msg);
        });
    });

    const namespace596 = io.of('/namespace596');
    namespace596.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace596.emit(msg);
        });
    });

    const namespace597 = io.of('/namespace597');
    namespace597.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace597.emit(msg);
        });
    });

    const namespace598 = io.of('/namespace598');
    namespace598.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace598.emit(msg);
        });
    });

    const namespace599 = io.of('/namespace599');
    namespace599.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace599.emit(msg);
        });
    });

    const namespace600 = io.of('/namespace600');
    namespace600.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace600.emit(msg);
        });
    });

    const namespace601 = io.of('/namespace601');
    namespace601.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace601.emit(msg);
        });
    });

    const namespace602 = io.of('/namespace602');
    namespace602.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace602.emit(msg);
        });
    });

    const namespace603 = io.of('/namespace603');
    namespace603.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace603.emit(msg);
        });
    });

    const namespace604 = io.of('/namespace604');
    namespace604.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace604.emit(msg);
        });
    });

    const namespace605 = io.of('/namespace605');
    namespace605.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace605.emit(msg);
        });
    });

    const namespace606 = io.of('/namespace606');
    namespace606.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace606.emit(msg);
        });
    });

    const namespace607 = io.of('/namespace607');
    namespace607.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace607.emit(msg);
        });
    });

    const namespace608 = io.of('/namespace608');
    namespace608.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace608.emit(msg);
        });
    });

    const namespace609 = io.of('/namespace609');
    namespace609.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace609.emit(msg);
        });
    });

    const namespace610 = io.of('/namespace610');
    namespace610.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace610.emit(msg);
        });
    });

    const namespace611 = io.of('/namespace611');
    namespace611.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace611.emit(msg);
        });
    });

    const namespace612 = io.of('/namespace612');
    namespace612.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace612.emit(msg);
        });
    });

    const namespace613 = io.of('/namespace613');
    namespace613.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace613.emit(msg);
        });
    });

    const namespace614 = io.of('/namespace614');
    namespace614.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace614.emit(msg);
        });
    });

    const namespace615 = io.of('/namespace615');
    namespace615.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace615.emit(msg);
        });
    });

    const namespace616 = io.of('/namespace616');
    namespace616.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace616.emit(msg);
        });
    });

    const namespace617 = io.of('/namespace617');
    namespace617.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace617.emit(msg);
        });
    });

    const namespace618 = io.of('/namespace618');
    namespace618.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace618.emit(msg);
        });
    });

    const namespace619 = io.of('/namespace619');
    namespace619.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace619.emit(msg);
        });
    });

    const namespace620 = io.of('/namespace620');
    namespace620.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace620.emit(msg);
        });
    });

    const namespace621 = io.of('/namespace621');
    namespace621.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace621.emit(msg);
        });
    });

    const namespace622 = io.of('/namespace622');
    namespace622.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace622.emit(msg);
        });
    });

    const namespace623 = io.of('/namespace623');
    namespace623.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace623.emit(msg);
        });
    });

    const namespace624 = io.of('/namespace624');
    namespace624.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace624.emit(msg);
        });
    });

    const namespace625 = io.of('/namespace625');
    namespace625.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace625.emit(msg);
        });
    });

    const namespace626 = io.of('/namespace626');
    namespace626.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace626.emit(msg);
        });
    });

    const namespace627 = io.of('/namespace627');
    namespace627.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace627.emit(msg);
        });
    });

    const namespace628 = io.of('/namespace628');
    namespace628.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace628.emit(msg);
        });
    });

    const namespace629 = io.of('/namespace629');
    namespace629.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace629.emit(msg);
        });
    });

    const namespace630 = io.of('/namespace630');
    namespace630.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace630.emit(msg);
        });
    });

    const namespace631 = io.of('/namespace631');
    namespace631.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace631.emit(msg);
        });
    });

    const namespace632 = io.of('/namespace632');
    namespace632.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace632.emit(msg);
        });
    });

    const namespace633 = io.of('/namespace633');
    namespace633.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace633.emit(msg);
        });
    });

    const namespace634 = io.of('/namespace634');
    namespace634.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace634.emit(msg);
        });
    });

    const namespace635 = io.of('/namespace635');
    namespace635.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace635.emit(msg);
        });
    });

    const namespace636 = io.of('/namespace636');
    namespace636.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace636.emit(msg);
        });
    });

    const namespace637 = io.of('/namespace637');
    namespace637.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace637.emit(msg);
        });
    });

    const namespace638 = io.of('/namespace638');
    namespace638.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace638.emit(msg);
        });
    });

    const namespace639 = io.of('/namespace639');
    namespace639.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace639.emit(msg);
        });
    });

    const namespace640 = io.of('/namespace640');
    namespace640.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace640.emit(msg);
        });
    });

    const namespace641 = io.of('/namespace641');
    namespace641.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace641.emit(msg);
        });
    });

    const namespace642 = io.of('/namespace642');
    namespace642.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace642.emit(msg);
        });
    });

    const namespace643 = io.of('/namespace643');
    namespace643.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace643.emit(msg);
        });
    });

    const namespace644 = io.of('/namespace644');
    namespace644.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace644.emit(msg);
        });
    });

    const namespace645 = io.of('/namespace645');
    namespace645.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace645.emit(msg);
        });
    });

    const namespace646 = io.of('/namespace646');
    namespace646.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace646.emit(msg);
        });
    });

    const namespace647 = io.of('/namespace647');
    namespace647.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace647.emit(msg);
        });
    });

    const namespace648 = io.of('/namespace648');
    namespace648.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace648.emit(msg);
        });
    });

    const namespace649 = io.of('/namespace649');
    namespace649.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace649.emit(msg);
        });
    });

    const namespace650 = io.of('/namespace650');
    namespace650.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace650.emit(msg);
        });
    });

    const namespace651 = io.of('/namespace651');
    namespace651.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace651.emit(msg);
        });
    });

    const namespace652 = io.of('/namespace652');
    namespace652.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace652.emit(msg);
        });
    });

    const namespace653 = io.of('/namespace653');
    namespace653.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace653.emit(msg);
        });
    });

    const namespace654 = io.of('/namespace654');
    namespace654.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace654.emit(msg);
        });
    });

    const namespace655 = io.of('/namespace655');
    namespace655.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace655.emit(msg);
        });
    });

    const namespace656 = io.of('/namespace656');
    namespace656.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace656.emit(msg);
        });
    });

    const namespace657 = io.of('/namespace657');
    namespace657.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace657.emit(msg);
        });
    });

    const namespace658 = io.of('/namespace658');
    namespace658.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace658.emit(msg);
        });
    });

    const namespace659 = io.of('/namespace659');
    namespace659.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace659.emit(msg);
        });
    });

    const namespace660 = io.of('/namespace660');
    namespace660.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace660.emit(msg);
        });
    });

    const namespace661 = io.of('/namespace661');
    namespace661.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace661.emit(msg);
        });
    });

    const namespace662 = io.of('/namespace662');
    namespace662.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace662.emit(msg);
        });
    });

    const namespace663 = io.of('/namespace663');
    namespace663.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace663.emit(msg);
        });
    });

    const namespace664 = io.of('/namespace664');
    namespace664.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace664.emit(msg);
        });
    });

    const namespace665 = io.of('/namespace665');
    namespace665.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace665.emit(msg);
        });
    });

    const namespace666 = io.of('/namespace666');
    namespace666.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace666.emit(msg);
        });
    });

    const namespace667 = io.of('/namespace667');
    namespace667.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace667.emit(msg);
        });
    });

    const namespace668 = io.of('/namespace668');
    namespace668.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace668.emit(msg);
        });
    });

    const namespace669 = io.of('/namespace669');
    namespace669.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace669.emit(msg);
        });
    });

    const namespace670 = io.of('/namespace670');
    namespace670.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace670.emit(msg);
        });
    });

    const namespace671 = io.of('/namespace671');
    namespace671.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace671.emit(msg);
        });
    });

    const namespace672 = io.of('/namespace672');
    namespace672.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace672.emit(msg);
        });
    });

    const namespace673 = io.of('/namespace673');
    namespace673.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace673.emit(msg);
        });
    });

    const namespace674 = io.of('/namespace674');
    namespace674.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace674.emit(msg);
        });
    });

    const namespace675 = io.of('/namespace675');
    namespace675.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace675.emit(msg);
        });
    });

    const namespace676 = io.of('/namespace676');
    namespace676.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace676.emit(msg);
        });
    });

    const namespace677 = io.of('/namespace677');
    namespace677.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace677.emit(msg);
        });
    });

    const namespace678 = io.of('/namespace678');
    namespace678.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace678.emit(msg);
        });
    });

    const namespace679 = io.of('/namespace679');
    namespace679.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace679.emit(msg);
        });
    });

    const namespace680 = io.of('/namespace680');
    namespace680.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace680.emit(msg);
        });
    });

    const namespace681 = io.of('/namespace681');
    namespace681.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace681.emit(msg);
        });
    });

    const namespace682 = io.of('/namespace682');
    namespace682.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace682.emit(msg);
        });
    });

    const namespace683 = io.of('/namespace683');
    namespace683.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace683.emit(msg);
        });
    });

    const namespace684 = io.of('/namespace684');
    namespace684.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace684.emit(msg);
        });
    });

    const namespace685 = io.of('/namespace685');
    namespace685.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace685.emit(msg);
        });
    });

    const namespace686 = io.of('/namespace686');
    namespace686.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace686.emit(msg);
        });
    });

    const namespace687 = io.of('/namespace687');
    namespace687.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace687.emit(msg);
        });
    });

    const namespace688 = io.of('/namespace688');
    namespace688.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace688.emit(msg);
        });
    });

    const namespace689 = io.of('/namespace689');
    namespace689.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace689.emit(msg);
        });
    });

    const namespace690 = io.of('/namespace690');
    namespace690.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace690.emit(msg);
        });
    });

    const namespace691 = io.of('/namespace691');
    namespace691.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace691.emit(msg);
        });
    });

    const namespace692 = io.of('/namespace692');
    namespace692.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace692.emit(msg);
        });
    });

    const namespace693 = io.of('/namespace693');
    namespace693.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace693.emit(msg);
        });
    });

    const namespace694 = io.of('/namespace694');
    namespace694.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace694.emit(msg);
        });
    });

    const namespace695 = io.of('/namespace695');
    namespace695.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace695.emit(msg);
        });
    });

    const namespace696 = io.of('/namespace696');
    namespace696.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace696.emit(msg);
        });
    });

    const namespace697 = io.of('/namespace697');
    namespace697.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace697.emit(msg);
        });
    });

    const namespace698 = io.of('/namespace698');
    namespace698.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace698.emit(msg);
        });
    });

    const namespace699 = io.of('/namespace699');
    namespace699.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace699.emit(msg);
        });
    });

    const namespace700 = io.of('/namespace700');
    namespace700.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace700.emit(msg);
        });
    });

    const namespace701 = io.of('/namespace701');
    namespace701.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace701.emit(msg);
        });
    });

    const namespace702 = io.of('/namespace702');
    namespace702.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace702.emit(msg);
        });
    });

    const namespace703 = io.of('/namespace703');
    namespace703.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace703.emit(msg);
        });
    });

    const namespace704 = io.of('/namespace704');
    namespace704.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace704.emit(msg);
        });
    });

    const namespace705 = io.of('/namespace705');
    namespace705.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace705.emit(msg);
        });
    });

    const namespace706 = io.of('/namespace706');
    namespace706.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace706.emit(msg);
        });
    });

    const namespace707 = io.of('/namespace707');
    namespace707.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace707.emit(msg);
        });
    });

    const namespace708 = io.of('/namespace708');
    namespace708.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace708.emit(msg);
        });
    });

    const namespace709 = io.of('/namespace709');
    namespace709.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace709.emit(msg);
        });
    });

    const namespace710 = io.of('/namespace710');
    namespace710.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace710.emit(msg);
        });
    });

    const namespace711 = io.of('/namespace711');
    namespace711.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace711.emit(msg);
        });
    });

    const namespace712 = io.of('/namespace712');
    namespace712.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace712.emit(msg);
        });
    });

    const namespace713 = io.of('/namespace713');
    namespace713.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace713.emit(msg);
        });
    });

    const namespace714 = io.of('/namespace714');
    namespace714.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace714.emit(msg);
        });
    });

    const namespace715 = io.of('/namespace715');
    namespace715.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace715.emit(msg);
        });
    });

    const namespace716 = io.of('/namespace716');
    namespace716.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace716.emit(msg);
        });
    });

    const namespace717 = io.of('/namespace717');
    namespace717.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace717.emit(msg);
        });
    });

    const namespace718 = io.of('/namespace718');
    namespace718.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace718.emit(msg);
        });
    });

    const namespace719 = io.of('/namespace719');
    namespace719.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace719.emit(msg);
        });
    });

    const namespace720 = io.of('/namespace720');
    namespace720.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace720.emit(msg);
        });
    });

    const namespace721 = io.of('/namespace721');
    namespace721.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace721.emit(msg);
        });
    });

    const namespace722 = io.of('/namespace722');
    namespace722.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace722.emit(msg);
        });
    });

    const namespace723 = io.of('/namespace723');
    namespace723.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace723.emit(msg);
        });
    });

    const namespace724 = io.of('/namespace724');
    namespace724.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace724.emit(msg);
        });
    });

    const namespace725 = io.of('/namespace725');
    namespace725.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace725.emit(msg);
        });
    });

    const namespace726 = io.of('/namespace726');
    namespace726.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace726.emit(msg);
        });
    });

    const namespace727 = io.of('/namespace727');
    namespace727.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace727.emit(msg);
        });
    });

    const namespace728 = io.of('/namespace728');
    namespace728.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace728.emit(msg);
        });
    });

    const namespace729 = io.of('/namespace729');
    namespace729.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace729.emit(msg);
        });
    });

    const namespace730 = io.of('/namespace730');
    namespace730.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace730.emit(msg);
        });
    });

    const namespace731 = io.of('/namespace731');
    namespace731.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace731.emit(msg);
        });
    });

    const namespace732 = io.of('/namespace732');
    namespace732.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace732.emit(msg);
        });
    });

    const namespace733 = io.of('/namespace733');
    namespace733.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace733.emit(msg);
        });
    });

    const namespace734 = io.of('/namespace734');
    namespace734.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace734.emit(msg);
        });
    });

    const namespace735 = io.of('/namespace735');
    namespace735.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace735.emit(msg);
        });
    });

    const namespace736 = io.of('/namespace736');
    namespace736.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace736.emit(msg);
        });
    });

    const namespace737 = io.of('/namespace737');
    namespace737.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace737.emit(msg);
        });
    });

    const namespace738 = io.of('/namespace738');
    namespace738.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace738.emit(msg);
        });
    });

    const namespace739 = io.of('/namespace739');
    namespace739.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace739.emit(msg);
        });
    });

    const namespace740 = io.of('/namespace740');
    namespace740.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace740.emit(msg);
        });
    });

    const namespace741 = io.of('/namespace741');
    namespace741.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace741.emit(msg);
        });
    });

    const namespace742 = io.of('/namespace742');
    namespace742.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace742.emit(msg);
        });
    });

    const namespace743 = io.of('/namespace743');
    namespace743.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace743.emit(msg);
        });
    });

    const namespace744 = io.of('/namespace744');
    namespace744.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace744.emit(msg);
        });
    });

    const namespace745 = io.of('/namespace745');
    namespace745.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace745.emit(msg);
        });
    });

    const namespace746 = io.of('/namespace746');
    namespace746.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace746.emit(msg);
        });
    });

    const namespace747 = io.of('/namespace747');
    namespace747.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace747.emit(msg);
        });
    });

    const namespace748 = io.of('/namespace748');
    namespace748.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace748.emit(msg);
        });
    });

    const namespace749 = io.of('/namespace749');
    namespace749.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace749.emit(msg);
        });
    });

    const namespace750 = io.of('/namespace750');
    namespace750.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace750.emit(msg);
        });
    });

    const namespace751 = io.of('/namespace751');
    namespace751.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace751.emit(msg);
        });
    });

    const namespace752 = io.of('/namespace752');
    namespace752.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace752.emit(msg);
        });
    });

    const namespace753 = io.of('/namespace753');
    namespace753.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace753.emit(msg);
        });
    });

    const namespace754 = io.of('/namespace754');
    namespace754.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace754.emit(msg);
        });
    });

    const namespace755 = io.of('/namespace755');
    namespace755.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace755.emit(msg);
        });
    });

    const namespace756 = io.of('/namespace756');
    namespace756.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace756.emit(msg);
        });
    });

    const namespace757 = io.of('/namespace757');
    namespace757.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace757.emit(msg);
        });
    });

    const namespace758 = io.of('/namespace758');
    namespace758.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace758.emit(msg);
        });
    });

    const namespace759 = io.of('/namespace759');
    namespace759.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace759.emit(msg);
        });
    });

    const namespace760 = io.of('/namespace760');
    namespace760.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace760.emit(msg);
        });
    });

    const namespace761 = io.of('/namespace761');
    namespace761.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace761.emit(msg);
        });
    });

    const namespace762 = io.of('/namespace762');
    namespace762.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace762.emit(msg);
        });
    });

    const namespace763 = io.of('/namespace763');
    namespace763.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace763.emit(msg);
        });
    });

    const namespace764 = io.of('/namespace764');
    namespace764.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace764.emit(msg);
        });
    });

    const namespace765 = io.of('/namespace765');
    namespace765.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace765.emit(msg);
        });
    });

    const namespace766 = io.of('/namespace766');
    namespace766.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace766.emit(msg);
        });
    });

    const namespace767 = io.of('/namespace767');
    namespace767.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace767.emit(msg);
        });
    });

    const namespace768 = io.of('/namespace768');
    namespace768.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace768.emit(msg);
        });
    });

    const namespace769 = io.of('/namespace769');
    namespace769.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace769.emit(msg);
        });
    });

    const namespace770 = io.of('/namespace770');
    namespace770.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace770.emit(msg);
        });
    });

    const namespace771 = io.of('/namespace771');
    namespace771.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace771.emit(msg);
        });
    });

    const namespace772 = io.of('/namespace772');
    namespace772.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace772.emit(msg);
        });
    });

    const namespace773 = io.of('/namespace773');
    namespace773.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace773.emit(msg);
        });
    });

    const namespace774 = io.of('/namespace774');
    namespace774.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace774.emit(msg);
        });
    });

    const namespace775 = io.of('/namespace775');
    namespace775.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace775.emit(msg);
        });
    });

    const namespace776 = io.of('/namespace776');
    namespace776.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace776.emit(msg);
        });
    });

    const namespace777 = io.of('/namespace777');
    namespace777.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace777.emit(msg);
        });
    });

    const namespace778 = io.of('/namespace778');
    namespace778.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace778.emit(msg);
        });
    });

    const namespace779 = io.of('/namespace779');
    namespace779.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace779.emit(msg);
        });
    });

    const namespace780 = io.of('/namespace780');
    namespace780.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace780.emit(msg);
        });
    });

    const namespace781 = io.of('/namespace781');
    namespace781.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace781.emit(msg);
        });
    });

    const namespace782 = io.of('/namespace782');
    namespace782.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace782.emit(msg);
        });
    });

    const namespace783 = io.of('/namespace783');
    namespace783.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace783.emit(msg);
        });
    });

    const namespace784 = io.of('/namespace784');
    namespace784.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace784.emit(msg);
        });
    });

    const namespace785 = io.of('/namespace785');
    namespace785.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace785.emit(msg);
        });
    });

    const namespace786 = io.of('/namespace786');
    namespace786.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace786.emit(msg);
        });
    });

    const namespace787 = io.of('/namespace787');
    namespace787.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace787.emit(msg);
        });
    });

    const namespace788 = io.of('/namespace788');
    namespace788.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace788.emit(msg);
        });
    });

    const namespace789 = io.of('/namespace789');
    namespace789.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace789.emit(msg);
        });
    });

    const namespace790 = io.of('/namespace790');
    namespace790.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace790.emit(msg);
        });
    });

    const namespace791 = io.of('/namespace791');
    namespace791.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace791.emit(msg);
        });
    });

    const namespace792 = io.of('/namespace792');
    namespace792.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace792.emit(msg);
        });
    });

    const namespace793 = io.of('/namespace793');
    namespace793.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace793.emit(msg);
        });
    });

    const namespace794 = io.of('/namespace794');
    namespace794.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace794.emit(msg);
        });
    });

    const namespace795 = io.of('/namespace795');
    namespace795.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace795.emit(msg);
        });
    });

    const namespace796 = io.of('/namespace796');
    namespace796.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace796.emit(msg);
        });
    });

    const namespace797 = io.of('/namespace797');
    namespace797.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace797.emit(msg);
        });
    });

    const namespace798 = io.of('/namespace798');
    namespace798.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace798.emit(msg);
        });
    });

    const namespace799 = io.of('/namespace799');
    namespace799.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace799.emit(msg);
        });
    });

    const namespace800 = io.of('/namespace800');
    namespace800.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace800.emit(msg);
        });
    });

    const namespace801 = io.of('/namespace801');
    namespace801.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace801.emit(msg);
        });
    });

    const namespace802 = io.of('/namespace802');
    namespace802.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace802.emit(msg);
        });
    });

    const namespace803 = io.of('/namespace803');
    namespace803.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace803.emit(msg);
        });
    });

    const namespace804 = io.of('/namespace804');
    namespace804.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace804.emit(msg);
        });
    });

    const namespace805 = io.of('/namespace805');
    namespace805.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace805.emit(msg);
        });
    });

    const namespace806 = io.of('/namespace806');
    namespace806.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace806.emit(msg);
        });
    });

    const namespace807 = io.of('/namespace807');
    namespace807.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace807.emit(msg);
        });
    });

    const namespace808 = io.of('/namespace808');
    namespace808.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace808.emit(msg);
        });
    });

    const namespace809 = io.of('/namespace809');
    namespace809.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace809.emit(msg);
        });
    });

    const namespace810 = io.of('/namespace810');
    namespace810.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace810.emit(msg);
        });
    });

    const namespace811 = io.of('/namespace811');
    namespace811.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace811.emit(msg);
        });
    });

    const namespace812 = io.of('/namespace812');
    namespace812.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace812.emit(msg);
        });
    });

    const namespace813 = io.of('/namespace813');
    namespace813.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace813.emit(msg);
        });
    });

    const namespace814 = io.of('/namespace814');
    namespace814.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace814.emit(msg);
        });
    });

    const namespace815 = io.of('/namespace815');
    namespace815.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace815.emit(msg);
        });
    });

    const namespace816 = io.of('/namespace816');
    namespace816.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace816.emit(msg);
        });
    });

    const namespace817 = io.of('/namespace817');
    namespace817.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace817.emit(msg);
        });
    });

    const namespace818 = io.of('/namespace818');
    namespace818.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace818.emit(msg);
        });
    });

    const namespace819 = io.of('/namespace819');
    namespace819.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace819.emit(msg);
        });
    });

    const namespace820 = io.of('/namespace820');
    namespace820.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace820.emit(msg);
        });
    });

    const namespace821 = io.of('/namespace821');
    namespace821.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace821.emit(msg);
        });
    });

    const namespace822 = io.of('/namespace822');
    namespace822.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace822.emit(msg);
        });
    });

    const namespace823 = io.of('/namespace823');
    namespace823.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace823.emit(msg);
        });
    });

    const namespace824 = io.of('/namespace824');
    namespace824.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace824.emit(msg);
        });
    });

    const namespace825 = io.of('/namespace825');
    namespace825.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace825.emit(msg);
        });
    });

    const namespace826 = io.of('/namespace826');
    namespace826.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace826.emit(msg);
        });
    });

    const namespace827 = io.of('/namespace827');
    namespace827.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace827.emit(msg);
        });
    });

    const namespace828 = io.of('/namespace828');
    namespace828.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace828.emit(msg);
        });
    });

    const namespace829 = io.of('/namespace829');
    namespace829.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace829.emit(msg);
        });
    });

    const namespace830 = io.of('/namespace830');
    namespace830.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace830.emit(msg);
        });
    });

    const namespace831 = io.of('/namespace831');
    namespace831.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace831.emit(msg);
        });
    });

    const namespace832 = io.of('/namespace832');
    namespace832.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace832.emit(msg);
        });
    });

    const namespace833 = io.of('/namespace833');
    namespace833.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace833.emit(msg);
        });
    });

    const namespace834 = io.of('/namespace834');
    namespace834.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace834.emit(msg);
        });
    });

    const namespace835 = io.of('/namespace835');
    namespace835.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace835.emit(msg);
        });
    });

    const namespace836 = io.of('/namespace836');
    namespace836.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace836.emit(msg);
        });
    });

    const namespace837 = io.of('/namespace837');
    namespace837.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace837.emit(msg);
        });
    });

    const namespace838 = io.of('/namespace838');
    namespace838.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace838.emit(msg);
        });
    });

    const namespace839 = io.of('/namespace839');
    namespace839.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace839.emit(msg);
        });
    });

    const namespace840 = io.of('/namespace840');
    namespace840.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace840.emit(msg);
        });
    });

    const namespace841 = io.of('/namespace841');
    namespace841.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace841.emit(msg);
        });
    });

    const namespace842 = io.of('/namespace842');
    namespace842.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace842.emit(msg);
        });
    });

    const namespace843 = io.of('/namespace843');
    namespace843.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace843.emit(msg);
        });
    });

    const namespace844 = io.of('/namespace844');
    namespace844.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace844.emit(msg);
        });
    });

    const namespace845 = io.of('/namespace845');
    namespace845.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace845.emit(msg);
        });
    });

    const namespace846 = io.of('/namespace846');
    namespace846.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace846.emit(msg);
        });
    });

    const namespace847 = io.of('/namespace847');
    namespace847.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace847.emit(msg);
        });
    });

    const namespace848 = io.of('/namespace848');
    namespace848.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace848.emit(msg);
        });
    });

    const namespace849 = io.of('/namespace849');
    namespace849.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace849.emit(msg);
        });
    });

    const namespace850 = io.of('/namespace850');
    namespace850.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace850.emit(msg);
        });
    });

    const namespace851 = io.of('/namespace851');
    namespace851.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace851.emit(msg);
        });
    });

    const namespace852 = io.of('/namespace852');
    namespace852.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace852.emit(msg);
        });
    });

    const namespace853 = io.of('/namespace853');
    namespace853.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace853.emit(msg);
        });
    });

    const namespace854 = io.of('/namespace854');
    namespace854.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace854.emit(msg);
        });
    });

    const namespace855 = io.of('/namespace855');
    namespace855.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace855.emit(msg);
        });
    });

    const namespace856 = io.of('/namespace856');
    namespace856.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace856.emit(msg);
        });
    });

    const namespace857 = io.of('/namespace857');
    namespace857.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace857.emit(msg);
        });
    });

    const namespace858 = io.of('/namespace858');
    namespace858.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace858.emit(msg);
        });
    });

    const namespace859 = io.of('/namespace859');
    namespace859.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace859.emit(msg);
        });
    });

    const namespace860 = io.of('/namespace860');
    namespace860.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace860.emit(msg);
        });
    });

    const namespace861 = io.of('/namespace861');
    namespace861.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace861.emit(msg);
        });
    });

    const namespace862 = io.of('/namespace862');
    namespace862.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace862.emit(msg);
        });
    });

    const namespace863 = io.of('/namespace863');
    namespace863.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace863.emit(msg);
        });
    });

    const namespace864 = io.of('/namespace864');
    namespace864.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace864.emit(msg);
        });
    });

    const namespace865 = io.of('/namespace865');
    namespace865.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace865.emit(msg);
        });
    });

    const namespace866 = io.of('/namespace866');
    namespace866.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace866.emit(msg);
        });
    });

    const namespace867 = io.of('/namespace867');
    namespace867.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace867.emit(msg);
        });
    });

    const namespace868 = io.of('/namespace868');
    namespace868.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace868.emit(msg);
        });
    });

    const namespace869 = io.of('/namespace869');
    namespace869.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace869.emit(msg);
        });
    });

    const namespace870 = io.of('/namespace870');
    namespace870.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace870.emit(msg);
        });
    });

    const namespace871 = io.of('/namespace871');
    namespace871.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace871.emit(msg);
        });
    });

    const namespace872 = io.of('/namespace872');
    namespace872.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace872.emit(msg);
        });
    });

    const namespace873 = io.of('/namespace873');
    namespace873.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace873.emit(msg);
        });
    });

    const namespace874 = io.of('/namespace874');
    namespace874.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace874.emit(msg);
        });
    });

    const namespace875 = io.of('/namespace875');
    namespace875.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace875.emit(msg);
        });
    });

    const namespace876 = io.of('/namespace876');
    namespace876.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace876.emit(msg);
        });
    });

    const namespace877 = io.of('/namespace877');
    namespace877.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace877.emit(msg);
        });
    });

    const namespace878 = io.of('/namespace878');
    namespace878.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace878.emit(msg);
        });
    });

    const namespace879 = io.of('/namespace879');
    namespace879.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace879.emit(msg);
        });
    });

    const namespace880 = io.of('/namespace880');
    namespace880.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace880.emit(msg);
        });
    });

    const namespace881 = io.of('/namespace881');
    namespace881.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace881.emit(msg);
        });
    });

    const namespace882 = io.of('/namespace882');
    namespace882.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace882.emit(msg);
        });
    });

    const namespace883 = io.of('/namespace883');
    namespace883.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace883.emit(msg);
        });
    });

    const namespace884 = io.of('/namespace884');
    namespace884.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace884.emit(msg);
        });
    });

    const namespace885 = io.of('/namespace885');
    namespace885.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace885.emit(msg);
        });
    });

    const namespace886 = io.of('/namespace886');
    namespace886.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace886.emit(msg);
        });
    });

    const namespace887 = io.of('/namespace887');
    namespace887.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace887.emit(msg);
        });
    });

    const namespace888 = io.of('/namespace888');
    namespace888.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace888.emit(msg);
        });
    });

    const namespace889 = io.of('/namespace889');
    namespace889.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace889.emit(msg);
        });
    });

    const namespace890 = io.of('/namespace890');
    namespace890.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace890.emit(msg);
        });
    });

    const namespace891 = io.of('/namespace891');
    namespace891.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace891.emit(msg);
        });
    });

    const namespace892 = io.of('/namespace892');
    namespace892.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace892.emit(msg);
        });
    });

    const namespace893 = io.of('/namespace893');
    namespace893.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace893.emit(msg);
        });
    });

    const namespace894 = io.of('/namespace894');
    namespace894.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace894.emit(msg);
        });
    });

    const namespace895 = io.of('/namespace895');
    namespace895.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace895.emit(msg);
        });
    });

    const namespace896 = io.of('/namespace896');
    namespace896.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace896.emit(msg);
        });
    });

    const namespace897 = io.of('/namespace897');
    namespace897.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace897.emit(msg);
        });
    });

    const namespace898 = io.of('/namespace898');
    namespace898.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace898.emit(msg);
        });
    });

    const namespace899 = io.of('/namespace899');
    namespace899.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace899.emit(msg);
        });
    });

    const namespace900 = io.of('/namespace900');
    namespace900.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace900.emit(msg);
        });
    });

    const namespace901 = io.of('/namespace901');
    namespace901.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace901.emit(msg);
        });
    });

    const namespace902 = io.of('/namespace902');
    namespace902.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace902.emit(msg);
        });
    });

    const namespace903 = io.of('/namespace903');
    namespace903.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace903.emit(msg);
        });
    });

    const namespace904 = io.of('/namespace904');
    namespace904.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace904.emit(msg);
        });
    });

    const namespace905 = io.of('/namespace905');
    namespace905.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace905.emit(msg);
        });
    });

    const namespace906 = io.of('/namespace906');
    namespace906.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace906.emit(msg);
        });
    });

    const namespace907 = io.of('/namespace907');
    namespace907.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace907.emit(msg);
        });
    });

    const namespace908 = io.of('/namespace908');
    namespace908.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace908.emit(msg);
        });
    });

    const namespace909 = io.of('/namespace909');
    namespace909.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace909.emit(msg);
        });
    });

    const namespace910 = io.of('/namespace910');
    namespace910.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace910.emit(msg);
        });
    });

    const namespace911 = io.of('/namespace911');
    namespace911.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace911.emit(msg);
        });
    });

    const namespace912 = io.of('/namespace912');
    namespace912.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace912.emit(msg);
        });
    });

    const namespace913 = io.of('/namespace913');
    namespace913.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace913.emit(msg);
        });
    });

    const namespace914 = io.of('/namespace914');
    namespace914.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace914.emit(msg);
        });
    });

    const namespace915 = io.of('/namespace915');
    namespace915.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace915.emit(msg);
        });
    });

    const namespace916 = io.of('/namespace916');
    namespace916.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace916.emit(msg);
        });
    });

    const namespace917 = io.of('/namespace917');
    namespace917.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace917.emit(msg);
        });
    });

    const namespace918 = io.of('/namespace918');
    namespace918.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace918.emit(msg);
        });
    });

    const namespace919 = io.of('/namespace919');
    namespace919.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace919.emit(msg);
        });
    });

    const namespace920 = io.of('/namespace920');
    namespace920.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace920.emit(msg);
        });
    });

    const namespace921 = io.of('/namespace921');
    namespace921.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace921.emit(msg);
        });
    });

    const namespace922 = io.of('/namespace922');
    namespace922.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace922.emit(msg);
        });
    });

    const namespace923 = io.of('/namespace923');
    namespace923.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace923.emit(msg);
        });
    });

    const namespace924 = io.of('/namespace924');
    namespace924.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace924.emit(msg);
        });
    });

    const namespace925 = io.of('/namespace925');
    namespace925.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace925.emit(msg);
        });
    });

    const namespace926 = io.of('/namespace926');
    namespace926.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace926.emit(msg);
        });
    });

    const namespace927 = io.of('/namespace927');
    namespace927.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace927.emit(msg);
        });
    });

    const namespace928 = io.of('/namespace928');
    namespace928.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace928.emit(msg);
        });
    });

    const namespace929 = io.of('/namespace929');
    namespace929.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace929.emit(msg);
        });
    });

    const namespace930 = io.of('/namespace930');
    namespace930.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace930.emit(msg);
        });
    });

    const namespace931 = io.of('/namespace931');
    namespace931.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace931.emit(msg);
        });
    });

    const namespace932 = io.of('/namespace932');
    namespace932.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace932.emit(msg);
        });
    });

    const namespace933 = io.of('/namespace933');
    namespace933.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace933.emit(msg);
        });
    });

    const namespace934 = io.of('/namespace934');
    namespace934.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace934.emit(msg);
        });
    });

    const namespace935 = io.of('/namespace935');
    namespace935.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace935.emit(msg);
        });
    });

    const namespace936 = io.of('/namespace936');
    namespace936.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace936.emit(msg);
        });
    });

    const namespace937 = io.of('/namespace937');
    namespace937.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace937.emit(msg);
        });
    });

    const namespace938 = io.of('/namespace938');
    namespace938.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace938.emit(msg);
        });
    });

    const namespace939 = io.of('/namespace939');
    namespace939.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace939.emit(msg);
        });
    });

    const namespace940 = io.of('/namespace940');
    namespace940.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace940.emit(msg);
        });
    });

    const namespace941 = io.of('/namespace941');
    namespace941.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace941.emit(msg);
        });
    });

    const namespace942 = io.of('/namespace942');
    namespace942.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace942.emit(msg);
        });
    });

    const namespace943 = io.of('/namespace943');
    namespace943.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace943.emit(msg);
        });
    });

    const namespace944 = io.of('/namespace944');
    namespace944.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace944.emit(msg);
        });
    });

    const namespace945 = io.of('/namespace945');
    namespace945.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace945.emit(msg);
        });
    });

    const namespace946 = io.of('/namespace946');
    namespace946.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace946.emit(msg);
        });
    });

    const namespace947 = io.of('/namespace947');
    namespace947.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace947.emit(msg);
        });
    });

    const namespace948 = io.of('/namespace948');
    namespace948.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace948.emit(msg);
        });
    });

    const namespace949 = io.of('/namespace949');
    namespace949.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace949.emit(msg);
        });
    });

    const namespace950 = io.of('/namespace950');
    namespace950.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace950.emit(msg);
        });
    });

    const namespace951 = io.of('/namespace951');
    namespace951.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace951.emit(msg);
        });
    });

    const namespace952 = io.of('/namespace952');
    namespace952.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace952.emit(msg);
        });
    });

    const namespace953 = io.of('/namespace953');
    namespace953.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace953.emit(msg);
        });
    });

    const namespace954 = io.of('/namespace954');
    namespace954.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace954.emit(msg);
        });
    });

    const namespace955 = io.of('/namespace955');
    namespace955.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace955.emit(msg);
        });
    });

    const namespace956 = io.of('/namespace956');
    namespace956.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace956.emit(msg);
        });
    });

    const namespace957 = io.of('/namespace957');
    namespace957.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace957.emit(msg);
        });
    });

    const namespace958 = io.of('/namespace958');
    namespace958.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace958.emit(msg);
        });
    });

    const namespace959 = io.of('/namespace959');
    namespace959.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace959.emit(msg);
        });
    });

    const namespace960 = io.of('/namespace960');
    namespace960.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace960.emit(msg);
        });
    });

    const namespace961 = io.of('/namespace961');
    namespace961.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace961.emit(msg);
        });
    });

    const namespace962 = io.of('/namespace962');
    namespace962.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace962.emit(msg);
        });
    });

    const namespace963 = io.of('/namespace963');
    namespace963.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace963.emit(msg);
        });
    });

    const namespace964 = io.of('/namespace964');
    namespace964.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace964.emit(msg);
        });
    });

    const namespace965 = io.of('/namespace965');
    namespace965.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace965.emit(msg);
        });
    });

    const namespace966 = io.of('/namespace966');
    namespace966.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace966.emit(msg);
        });
    });

    const namespace967 = io.of('/namespace967');
    namespace967.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace967.emit(msg);
        });
    });

    const namespace968 = io.of('/namespace968');
    namespace968.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace968.emit(msg);
        });
    });

    const namespace969 = io.of('/namespace969');
    namespace969.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace969.emit(msg);
        });
    });

    const namespace970 = io.of('/namespace970');
    namespace970.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace970.emit(msg);
        });
    });

    const namespace971 = io.of('/namespace971');
    namespace971.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace971.emit(msg);
        });
    });

    const namespace972 = io.of('/namespace972');
    namespace972.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace972.emit(msg);
        });
    });

    const namespace973 = io.of('/namespace973');
    namespace973.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace973.emit(msg);
        });
    });

    const namespace974 = io.of('/namespace974');
    namespace974.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace974.emit(msg);
        });
    });

    const namespace975 = io.of('/namespace975');
    namespace975.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace975.emit(msg);
        });
    });

    const namespace976 = io.of('/namespace976');
    namespace976.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace976.emit(msg);
        });
    });

    const namespace977 = io.of('/namespace977');
    namespace977.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace977.emit(msg);
        });
    });

    const namespace978 = io.of('/namespace978');
    namespace978.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace978.emit(msg);
        });
    });

    const namespace979 = io.of('/namespace979');
    namespace979.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace979.emit(msg);
        });
    });

    const namespace980 = io.of('/namespace980');
    namespace980.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace980.emit(msg);
        });
    });

    const namespace981 = io.of('/namespace981');
    namespace981.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace981.emit(msg);
        });
    });

    const namespace982 = io.of('/namespace982');
    namespace982.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace982.emit(msg);
        });
    });

    const namespace983 = io.of('/namespace983');
    namespace983.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace983.emit(msg);
        });
    });

    const namespace984 = io.of('/namespace984');
    namespace984.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace984.emit(msg);
        });
    });

    const namespace985 = io.of('/namespace985');
    namespace985.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace985.emit(msg);
        });
    });

    const namespace986 = io.of('/namespace986');
    namespace986.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace986.emit(msg);
        });
    });

    const namespace987 = io.of('/namespace987');
    namespace987.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace987.emit(msg);
        });
    });

    const namespace988 = io.of('/namespace988');
    namespace988.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace988.emit(msg);
        });
    });

    const namespace989 = io.of('/namespace989');
    namespace989.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace989.emit(msg);
        });
    });

    const namespace990 = io.of('/namespace990');
    namespace990.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace990.emit(msg);
        });
    });

    const namespace991 = io.of('/namespace991');
    namespace991.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace991.emit(msg);
        });
    });

    const namespace992 = io.of('/namespace992');
    namespace992.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace992.emit(msg);
        });
    });

    const namespace993 = io.of('/namespace993');
    namespace993.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace993.emit(msg);
        });
    });

    const namespace994 = io.of('/namespace994');
    namespace994.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace994.emit(msg);
        });
    });

    const namespace995 = io.of('/namespace995');
    namespace995.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace995.emit(msg);
        });
    });

    const namespace996 = io.of('/namespace996');
    namespace996.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace996.emit(msg);
        });
    });

    const namespace997 = io.of('/namespace997');
    namespace997.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace997.emit(msg);
        });
    });

    const namespace998 = io.of('/namespace998');
    namespace998.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace998.emit(msg);
        });
    });

    const namespace999 = io.of('/namespace999');
    namespace999.on('connection', function(socket) {
        socket.on('chat message', function(msg) {
            namespace999.emit(msg);
        });
    });

}
