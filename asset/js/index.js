const wrap = document.querySelector("#wrap");
const btns = document.querySelectorAll(".arrow-row li");
const player = document.querySelector(".player");
const PLAYER_WIDTH = 60;
let event;
let frameWidth;
let width;
let height;


let POSITION_X = 0;
let POSITION_Y = 0;
console.log(btns);
console.dir(player);

function resizeLayout(event){
    event = window;
    frameWidth = event.innerWidth;
    width = frameWidth - 40;
    height = width / 2;

    const playerFrame = wrap.querySelector(".player-wrap");
    wrap.setAttribute("style", `width : ${width}px;`);
    playerFrame.setAttribute("style", `height : ${height}px;`);
}

function setPosition(x, y){
    player.setAttribute("style", `top:${y}px; left:${x}px;`);
}

function resetPosition(){
    POSITION_X = 0;
    POSITION_Y = 0;
    player.setAttribute("style", `top:${POSITION_Y}px; left:${POSITION_X}px;`);
}

function startController(){
    for(let i = 0; i < btns.length; i++){
        btns[i].onclick = function(){
            switch(i){
                case 0:
                    if(POSITION_X > 0 && POSITION_Y > 0 ){
                        POSITION_X -= 10;
                        POSITION_Y -= 10;
                    }else if(POSITION_X > 0){
                        POSITION_X -= 10;
                    }
                    break;
                case 1:
                    if(POSITION_Y > 0){
                        POSITION_Y -= 10;
                    }
                    break;
                case 2:
                    if(POSITION_Y > 0){
                        POSITION_X += 10;
                        POSITION_Y -= 10;
                    }else{
                        POSITION_X += 10;
                    }
                        
                    break;
                case 3:
                    if(POSITION_X !== 0){
                        POSITION_X -= 10;
                    }
                    break;
                case 4:
                    resetPosition();
                    break;
                case 5:
                    if(POSITION_X < width - PLAYER_WIDTH){
                        POSITION_X += 10;
                    }
                        
                    break;
                case 6:
                    if(POSITION_X <= 0 && POSITION_Y < height - PLAYER_WIDTH){
                        POSITION_Y += 10;
                    }else{
                        POSITION_Y += 10;
                        POSITION_X -= 10;
                    }
                    break;
                case 7:
                    if(POSITION_Y < height - PLAYER_WIDTH){
                        POSITION_Y += 10;
                    }
                    break;
                case 8:
                        POSITION_X += 10;
                        POSITION_Y += 10;
                    break;
                default:
                    
                    break;    
            }
            setPosition(POSITION_X, POSITION_Y);
        }
    }
}

function handleSize(e){
    event = e.target;
    resizeLayout(event);
}

function init(){
    resizeLayout(event);
    resetPosition();
    startController();
    window.addEventListener("resize", handleSize);
}

init();

/**
 ArrauList<String> a = {"1","2"};

for(ArrauList<String> a : String b){

}
 */