import { MenuBar } from 'menu/menu-bar.js';
import { Content } from 'content/content.js';
import { StatusBar } from 'status/status-bar.js';

export class Application extends Element {
  status = "Hello World!";

  constructor() {
    super();

    Window.this.on('trayiconclick', (evt) => {
      if (evt.data.buttons === 2) {
        const [sx, sy] = Window.this.box('position', 'client', 'screen');
        const menu = document.$('menu#tray-menu');
        const { screenX, screenY } = evt.data;
        menu.popupAt(screenX - sx, screenY - sy, 2);
      }
    });

    document.on('click', 'menu#tray-menu > [name=about]', () => {
      Window.this.modal({ url: 'about/about.htm' });
    });
  }

  componentDidMount() {
    loadTrayIconImage('logo/16.png').then(image => {
      Window.this.trayIcon({
        image,
        text: 'Hello World!',
      });
    });
  }

  render() {
    return (
      <body>
        <MenuBar />
        <Content app={this} />
        <StatusBar app={this} />
      </body>
    );
  }
}

async function loadTrayIconImage(filename) {
  try {
    // packaged
    const image = await Graphics.Image.load(`this://app/${filename}`);
    return image;
  } catch (e) {
    // local
    const image = await Graphics.Image.load(filename);
    return image;
  }
}