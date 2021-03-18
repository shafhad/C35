var ball;
var database
var position
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database=firebase.database()
    ballPos= database.ref('ball/position')
    ballPos.on("value",readPos,showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('ball/position').set({
      'x': position.x + x ,
      'y': position.y + y
    })
  }
/*function readPos(data){
postion=data.val()
ball.x=position
ball.y=position
}*/

function readPos(data){
    position = data.val();
    console.log(position.x);
    ballPos.x = position.x;
    ballPos.y = position.y;
  }
function showError(){
    console.log ("error")
    
}


