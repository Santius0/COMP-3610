//Run server with  http-server -c-1 -p 8000

var outerWidth  = 500;
      var outerHeight = 250;
      var margin = { left: -50, top: 0, right: -50, bottom: 0 };

      var xColumn = "longitude";
      var yColumn = "latitude";
      var rColumn = "population";
      var peoplePerPixel = 100000;

      var innerWidth  = outerWidth  - margin.left - margin.right;
      var innerHeight = outerHeight - margin.top  - margin.bottom;

      var svg = d3.select("body").append("svg")
        .attr("width",  outerWidth)
        .attr("height", outerHeight);

      var g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      var xScale = d3.scaleLinear().range([0, innerWidth]);
      var yScale = d3.scaleLinear().range([innerHeight, 0]);

      var rScale = d3.scaleSqrt();

      function render(data){

        xScale.domain( d3.extent(data, function (d){ return d[xColumn]; }));
        yScale.domain( d3.extent(data, function (d){ return d[yColumn]; }));
        rScale.domain([0, d3.max(data, function (d){ return d[rColumn]; })]);
        
        // Compute the size of the biggest circle as a function of peoplePerPixel.
        var peopleMax = rScale.domain()[1];
        var rMin = 0;
        var rMax = Math.sqrt(peopleMax / (peoplePerPixel * Math.PI)); //A = Pi*r^2
        rScale.range([rMin, rMax]);

        var circles = g.selectAll("circle").data(data);
        circles.enter()
          .append("circle")
          .attr("cx", function (d){ return xScale(d[xColumn]); })
          .attr("cy", function (d){ return yScale(d[yColumn]); })
          .attr("r",  function (d){ return rScale(d[rColumn]); });

        circles.exit().remove();

      }

      function type(d){
        d.latitude   = +d.latitude;
        d.longitude  = +d.longitude;
        d.population = +d.population;
        return d;
      }

      setTimeout( function (){ d3.csv("geonames_cities1000.csv", type, render);}, 1000);
      setTimeout( function (){ d3.csv("geonames_cities100000.csv", type, render);}, 3000);
