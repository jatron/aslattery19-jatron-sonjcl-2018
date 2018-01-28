f = open('mySocketio.js', 'w+')

f.write("// dependencies\n")
f.write("const socketio = require('socket.io');\n")
f.write("\n")
f.write("const server = require('./server');\n")
f.write("\n")
f.write("module.exports.socketioListen = function() {\n")
f.write("    const io = socketio(server.httpServer);\n")
f.write("\n")

for i in range(1000):
    namespaceName = 'namespace' + str(i)
    f.write("    const %s = io.of('/%s');\n" % (namespaceName, namespaceName))
    f.write("    %s.on('connection', function(socket) {\n" % namespaceName)
    f.write("        socket.on('chat message', function(msg) {\n")
    f.write("            %s.emit(msg);\n" % namespaceName)
    f.write("        });\n")
    f.write("    });\n")
    f.write("\n")

f.write("}\n")
