console.log('App.js is running');

// JSX - Javascript XML
//var template = <h1 id="someid">Something new</h1>;
var template = React.createElement(
    'h1',
    { id: "someid" },
    "Something new"
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);