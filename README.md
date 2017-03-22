# Project Title

Testing out Webpack configuration (+ hashing) and ReactJS testing the limits of bundling the view/frontend layer. Incomming ReacJS project using this 'swiss army knife' - tool. 


## Getting Started

These instructions will get you a clone of the project up and running with local server for live development.

### Prerequisites

```
Node.js
```

### Installing

step by step:

```
npm install // Installing dependencies and preparing for execution.


```

## Running the webpack dev-server

Using webpack-dev-server for local server.

```

npm run:

//..package.json;

"scripts": {
    "dev": "webpack-dev-server", // For development
    "prod": "webpack -p" // For production
}

```

### Examples:


```
// app.js

const css = require('./app.scss');

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <h1>Hello, World</h1>,
    document.getElementById('root')
);

// index.ejs
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <div id="root"></div>
    <p>This is the bundled content</p>
  </body>
</html>

// ..webpack.config.js - bundling HTML
new HtmlWebpackPlugin({
    title: 'Bundled HTML',
    minify: {
        collapseWhitespace: true
    },
    hash: true,
    template: './src/index.ejs', (template can also be a type of .html);
}),
```

Possibilities for reaching bundling limit.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D