export class MenuBar extends Element {
  render() {
    return (
      <ul styleset={__DIR__ + 'menu-bar.css#menu-bar'}>
        <li>
          Help
          <menu name="help">
            <li class="command" name="about" accesskey="!F1">
              About <span class="accesskey">F1</span>
            </li>
          </menu>
        </li>
      </ul>
    );
  }

  ['on click at [name=help] > [name=about]']() {
    Window.this.modal({ url: 'about/about.htm' })
  }
}
