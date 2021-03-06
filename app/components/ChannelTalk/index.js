class ChannelService {
  constructor() {
    this.loadScript();
  }

  loadScript() {
    const w = window;
    if (w.ChannelIO) {
      return (window.console.error || window.console.log)(
        'ChannelIO script included twice.',
      );
    }

    const ch = (...args) => {
      ch.c(args);
    };
    ch.q = [];
    ch.c = args => {
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
      if (x) x.parentNode.insertBefore(s, x);
    }
    if (document.readyState === 'complete') {
      l();
    } else if (window.attachEvent) {
      window.attachEvent('onload', l);
    } else {
      window.addEventListener('DOMContentLoaded', l, false);
      window.addEventListener('load', l, false);
    }
    return 1;
  }

  boot(settings) {
    window.ChannelIO('boot', settings);
  }

  shutdown() {
    window.ChannelIO('shutdown');
  }
}

export default new ChannelService();
