import { launch } from '@env';

export class About extends Element {
  componentDidMount() {
    this.$('#ok').focus();

    const [wmin, w] = document.state.contentWidths();
    const h = document.state.contentHeight(w);
    const [sw, sh] = Window.this.screenBox('frame', 'dimension');
    Window.this.move((sw - w) / 2, (sh - h) / 2, w, h, true);
  }

  ['on click at #ok']() {
    Window.this.close();
  }

  ['on click at a'](_, a) {
    launch(a.attributes.href);
    return true;
  }

  render() {
    return (
      <body styleset='about.css#about'>
        <div id="container">
          <div id="header">
            <img id="logo" src='../logo/128.png' width="64" height="64" />
            <div id="title">
              <div>Unofficial Sciter Template</div>
              <div>v0.2.0</div>
            </div>
          </div>
          <div id="contents">
            <div class="row">
              This application uses <img src={__DIR__ + 'sciter.png'} width="16" height="16" />
              &#8202;<a href="https://sciter.com/?ref=unofficial sciter template">Sciter</a> Engine,
            </div>
            <div class="row">
              © <a href="https://terrainformatica.com/?ref=unofficial sciter template">Terra Informatica Software</a>, Inc.
            </div>
          </div>
          <div id="footer">
            <button id="ok">OK</button>
          </div>
        </div>
      </body>
    );
  }
}
