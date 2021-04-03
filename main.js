function FFO_ShutdownWindow() {
    var execSync = require('child_process').execSync;
    execSync('shutdown -s -t 10'); //10秒后关机
}

// FFO_ShutdownWindow();



var wol = require('wake_on_lan');
wol.wake('00:D0:61:0D:51:FF');
wol.wake('00:D0:61:0D:51:FF', function (error) {
    if (error) {
        console.log(err);
        //handle error
    } else {
        //done sending packets
    }
});
var magic_packet = wol.createMagicPacket('00:D0:61:0D:51:FF');