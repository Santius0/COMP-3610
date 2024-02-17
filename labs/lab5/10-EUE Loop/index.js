var scale = d3.scaleLinear()
              .domain([1, 5])   // Data space
              .range([0, 200]); // Pixel space

var svg = d3.select("body")
            .append("svg")
            .attr("width",  250)
            .attr("height", 250);

function render(data, color){

/**
 *   // DATA JOIN
  // Join new data with old elements, if any.
  var text = g.selectAll("text")
    .data(data);

  // UPDATE
  // Update old elements as needed.
  text.attr("class", "update");

  // ENTER
  // Create new elements as needed.
  //
  // ENTER + UPDATE
  // After merging the entered elements with the update selection,
  // apply operations to both.
  text.enter().append("text")
      .attr("class", "enter")
      .attr("x", function(d, i) { return i * 32; })
      .attr("dy", ".35em")
    .merge(text)
      .text(function(d) { return d; });

  // EXIT
  // Remove old elements as needed.
 */
    
// Bind data
var rects = svg.selectAll("rect")
               .data(data);


rects.enter() // Enter Select any new elements
  .append("rect")
  .attr("y", 50)// Update these new elements
  .attr("width",  20)
  .attr("height", 20)
  .attr("fill", color)
  .attr("x", function(d){
      console.log(scale(d));
      return scale(d);
  })
  .merge(rects)//merge the enter selction with rects, the resulting selection is all the elements
  .attr("fill", color);
// Exit
rects.exit().remove();
}

//render([1, 2, 2.5],     "red");
setTimeout( function (){ render([1, 2, 2.5],     "red");    }, 1000);
setTimeout( function (){ render([1, 2, 3, 4, 5], "blue");   }, 2000);
setTimeout( function (){ render([1, 2],          "green");  }, 3000);
setTimeout( function (){ render([3, 4, 5],       "cyan");   }, 4000);
setTimeout( function (){ render([4, 5],          "magenta");}, 5000);