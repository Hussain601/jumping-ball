var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
}

function setup(){
    canvas = createCanvas(800,600);

    //block creation
    block1 = createSprite(0,580,200,30);
    block1.shapeColor = "blue";

    block2 = createSprite(200,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(400,580,200,30);
    block3.shapeColor = "green";

    block4 = createSprite(600,580,200,30);
    block4.shapeColor = "red";

     //ball creation
    
    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
   
     //ball velocity

    ball.velocityX="3";
    ball.velocityY="5";
   
   
    
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    //making ball bounce off blocks
    
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }


    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "blue";
        music.play();
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "blue";
        music.play();
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "blue";
        music.play();
    }
    
    //setting ball velocity to 0 when ball touches the blocks   

    if(ball.isTouching(block1)){
        ball.velocityX="0";
        ball.velocityY="0";
    }

    if(ball.isTouching(block2)){
        ball.velocityX="0";
        ball.velocityY="0";
    }

    if(ball.isTouching(block3)){
        ball.velocityX="0";
        ball.velocityY="0";
    }

    if(ball.isTouching(block4)){
        ball.velocityX="0";
        ball.velocityY="0";
    }
       
    }

    

    drawSprites();
}


