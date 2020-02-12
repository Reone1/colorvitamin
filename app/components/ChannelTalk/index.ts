class ChannelService {
    constructor() {
        this.loadScript();
    }

    public loadScript() {
        const w = window;
        if (w.ChannelIO) {
            return (window.console.error || window.console.log)('ChannelIO script included twice.');
        }
        const d = window.document;
        const ch = (): void => {
            ch.c(arguments);
        };
        ch.q = [];
        ch.c = (args: any) => {
            ch.q.push(args);
        };
        w.ChannelIO = ch;
        function l() {
            if (w.ChannelIOInitialized) {
                return;
            }
            w.ChannelIOInitialized = true;
            const s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
            s.charset = 'UTF-8';
            const x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
        }
        if (document.readyState === 'complete') {
            l();
            //  else if (window.attachEvent) {window.attachEvent('onload', l); } 
        } else {
            window.addEventListener('DOMContentLoaded', l, false);
            window.addEventListener('load', l, false);
        }
    }

    public boot(settings: object) {
        window.ChannelIO('boot', settings);
    }

    public shutdown() {
        window.ChannelIO('shutdown');
    }
}

export default new ChannelService();
