const Namespace = require('../classes/Namespace');
const Room = require('../classes/Room')

const wikiNs = new Namespace(0,'Wikipedia','https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/103px-Wikipedia-logo-v2.svg.png','/wiki');
const mozillaNs = new Namespace(1,'Mozilla','https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png','/mozilla');
const linuxNs = new Namespace(2,'Linux','https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png','/linux');

wikiNs.addRoom(new Room(0,'News',0,false));
wikiNs.addRoom(new Room(1,'Sport',0,false));
wikiNs.addRoom(new Room(2,'Politics',0,false));

mozillaNs.addRoom(new Room(0,'Chrome',1,false));
mozillaNs.addRoom(new Room(1,'Firefox',1,false));
mozillaNs.addRoom(new Room(2,'Internet Explorer',1,false));

linuxNs.addRoom(new Room(0,'MacOS',2,false));
linuxNs.addRoom(new Room(1,'Red Hat',2,false));
linuxNs.addRoom(new Room(2,'Ubuntu',2,false));

const namespaces = [wikiNs,mozillaNs,linuxNs];

module.exports = namespaces;