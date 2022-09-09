export class Content extends Element {
  app;

  constructor(props) {
    super();
    this.app = props.app;
  }

  render() {
    return (
      <div id="container" styleset={__DIR__ + 'content.css#content'}>
        <h1>Hello World!</h1>
      </div>
    );
  }
}
