export class StatusBar extends Element {
  app;

  constructor(props) {
    super();
    this.app = props.app;
  }

  render() {
    return (
      <div styleset={__DIR__ + 'status-bar.css#status-bar'}>
        <span>{this.app.status}</span>
      </div>
    );
  }
}
