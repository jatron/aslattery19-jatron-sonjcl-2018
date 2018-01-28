f = open('mySocketio.js', 'w+')

f.write("// dependencies\n")
f.write("const socketio = require('socket.io');\n")
f.write("\n")

f.write("module.exports.socketioListen = function(server) {\n")
f.write("    const io = socketio(server);\n")
f.write("\n")

for i in range(1000):
    namespaceName = 'namespace' + str(i)
    f.write("    const %s = io.of('/%s');\n" % (namespaceName, namespaceName))
    f.write("    %s.on('connection', function(socket) {\n" % namespaceName)
    f.write("        socket.on('chat message', function(msg) {\n")
    f.write("            %s.emit('chat message', msg);\n" % namespaceName)
    f.write("        });\n")
    f.write("    });\n")
    f.write("\n")

f.write("}\n")
