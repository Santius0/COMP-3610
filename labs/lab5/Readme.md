# Installing and Using D3.js

### Introduction
This guide provides an overview of how to include D3.js in your web projects for creating dynamic and interactive data visualizations. D3.js can be incorporated into your projects in two main ways: through npm for node-based projects or directly in your HTML files using a CDN. For the purposes of this lab, we will focus on using the CDN version to simplify the setup process and allow us to concentrate on learning D3.js fundamentals.

### Installing D3.js via npm
Though not required for this lab, understanding how to install D3.js via npm is useful for future projects that are built on node.js or utilize modern JavaScript frameworks and build tools.

1. First, ensure you have Node.js and npm installed on your computer. You can download Node.js from [https://nodejs.org/](https://nodejs.org/).
2. Open a terminal or command prompt.
3. Navigate to your project directory.
4. Run the command: `npm install d3 --save` to install D3.js and save it as a dependency in your project's `package.json` file.

This method is ideal for large-scale applications, server-side rendering, or projects using modern JavaScript frameworks.

### Using D3.js via CDN
For this lab, we will use D3.js by including it in our HTML files via a CDN. This method allows us to quickly start working with D3 without the need for npm or a build system.

#### Including D3.js in Your HTML File
To include D3.js, add the following script tag to the `<head>` or `<body>` section of your HTML file:

```html
<script src="https://d3js.org/d3.v7.min.js"></script>
```

#### Simple D3 Example
```html
<!DOCTYPE html>
<html>
<head>
    <title>Simple D3 Example</title>
    <script src="https://d3js.org/d3.v7.min.js"></script>
</head>
<body>
    <script>
        d3.select("body").append("svg")
            .attr("width", 50)
            .attr("height", 50)
          .append("circle")
            .attr("cx", 25)
            .attr("cy", 25)
            .attr("r", 20)
            .style("fill", "purple");
    </script>
</body>
</html>
```

## References
* https://scrimba.com/learn/d3js
* https://github.com/curran/screencasts/tree/gh-pages/introToD3 
* https://website.education.wisc.edu/~swu28/d3t/concept.html
* https://bl.ocks.org/mbostock/3808218