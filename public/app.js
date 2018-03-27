(function () {

  var renderElement = function (element, props, children) {

    if ( ! texasBuilder ) return;

    if ( ! texasBuilder.cmp ) return;

    var root = document.createElement("div");

    document.body.appendChild(root);

    var element = texasBuilder.cmp[element];

    if ( ! element ) return;

    ReactDOM.render(
      React.createElement(
        element,
        props,
        children
      ),
      root
    )

  };

  var props = {
    type: "warning"
  };

  var children = "Click Me";

  renderElement("Button", props, children);

}) ()