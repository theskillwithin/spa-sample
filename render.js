const React          = require('react');
const ReactDOMServer = require('react-dom/server');
const App            = require('./App').default;

function render(req, res) {
    const content = ReactDOMServer.renderToString(React.createElement(App));
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Hello SSR</title>
    <link rel="stylesheet" href="/app.css" type="text/css" media="all" />
</head>
<body>
    <section id="app">
        ${content}
    </section>
    <script type="text/javascript" src="/app.js"></script>
</body>
</html>`;

    res.status(200).send(html);
};

module.exports = render;
