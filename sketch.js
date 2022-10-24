function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  rectMode(CENTER)
  background(173,216,230)
  noFill()
  stroke(255,240,245)
  
  var w=mouseX/10
  for(var j=0;j<height;j++)
  {
    for(var i=0;i<width/20;i++)
    {
      stroke(255,240,255)
    ellipse(25+100*i,25+100*j,w)
    stroke(255)
    rect(25+100*i,25+100*j,mouseY/10)  
    ellipse(50+100*i,50,+100*j,50)

      }
  }
}