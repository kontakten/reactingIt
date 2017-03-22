# Project Title

Testing out Webpack configuration and reaching limits of bundling view layer. Incomming ReacJS project using this 'swiss army knife' - tool. 

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
// index.ejs
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
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