var swag = []
function setup() 
{
  createCanvas(400,400);
s1 = createSprite(200, 200, 20, 20)
s2 = createSprite(300, 300, 20, 20)
swag = [s1, s2]
console.log(swag[1].position.x)//300
console.log(swag[0].position.y)
}

function draw() 
{
background(51);

}

