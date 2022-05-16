var canvas= new fabric.Canvas("myCanvas");

playerX=10;
playerY=10;

widthOfBlock=30;
heightOfBlock=30;

var player="";
var block="";

function playerObject(){

    fabric.image.fromURL("player.png",function(Img){
        player=Img;
        player.scaleToWidth(150);
        player.scaleToHeight(140);
        player.set({
            top:playerY,left:playerX
        });
        canvas.add(player);
    });
}

function blockObject(get_image){

    fabric.image.fromURL(get_image,function(Img){
        block=Img;
        block.scaleToWidth(widthOfBlock);
        block.scaleToHeight(heightOfBlock);
        block.set({
            top:playerY,left:playerX
        });
        canvas.add(block);
    });
}

window.addEventListener("keydown",my_Keydown);
function my_Keydown(e){
    keypressed=e.keyCode;
   
    if(e.shiftKey == true && keypressed == "80"){
        widthOfBlock = widthOfBlock+10;
        heightOfBlock = heightOfBlock+10;
        document.getElementById("width1").innerHTML = widthOfBlock;
        document.getElementById("height1").innerHTML = heightOfBlock;
    }

    if(e.shiftKey == true && keypressed == "77"){
        widthOfBlock = widthOfBlock-10;
        heightOfBlock = heightOfBlock-10;
        document.getElementById("width1").innerHTML = widthOfBlock;
        document.getElementById("height1").innerHTML = heightOfBlock;
    }

    if(keypressed == "38"){
        up();
    }

    if(keypressed == "40"){
        down();
    }

    if(keypressed == "37"){
        left();
    }

    if(keypressed == "39"){
        right();
    }

    if(keypressed == "87"){
        blockObject("wall.jpg");
    }

    if(keypressed == "71"){
        blockObject("ground.png");
    }

    if(keypressed == "76"){
        blockObject("light_green.png");
    }

    if(keypressed == "84"){
        blockObject("trunk.jpg");
    }

    if(keypressed == "82"){
        blockObject("roof.jpg");
    }

    if(keypressed == "89"){
        blockObject("yellow_wall.png");
    }

    if(keypressed == "68"){
        blockObject("dark_green.png");
    }

    if(keypressed == " 85"){
        blockObject("unique.png");
    }

    if(keypressed == "67"){
        blockObject("cloud.jpg");
    }
}

function up(){
    if(playerY >= 0){
        playerY = playerY - heightOfBlock;
        canvas.remove(player);
        playerObject();
    }
}

function down(){
    if(playerY <= 500){
        playerY = playerY + heightOfBlock;
        canvas.remove(player);
        playerObject();
    }
}

function left(){
    if(playerX >= 0){
        playerX = playerX - widthOfBlock;
        canvas.remove(player);
        playerObject();
    }
}

function right(){
    if(playerX <= 850){
        playerX = playerX + widthOfBlock;
        canvas.remove(player);
        playerObject();
    }
}