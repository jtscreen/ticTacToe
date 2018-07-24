let turn = [true, false]
let win = true;
let xo = [["x","o"],["x","o"],["x","o"],
          ["x","o"],["x","o"],["x","o"],
          ["x","o"],["x","o"],["x","o"]]

function preload(){
    x = loadImage("img/X.png")
    o = loadImage("img/O.png")
}

function setup(){
    createCanvas(601,601)
    rect(0,0,200,200)
    rect(0,200,200,200)
    rect(0,400,200,200)

    rect(200,0,200,200)
    rect(200,200,200,200)
    rect(200,400,200,200)

    rect(400,0,200,200)
    rect(400,200,200,200)
    rect(400,400,200,200)

}

function mouseClicked(){
    //column 1
    if(mouseX>0 && mouseX<200&&mouseY>0&&mouseY<200&&turn[0]&&xo[0]!="x"){
        image(o,25,25,150,150)
        turn[0] = false;
        turn[1] = true;
        xo[0] = "o"
    }else if(mouseX>0 && mouseX<200&&mouseY>0&&mouseY<200&&turn[1]&&xo[0]!="o"){
        image(x,25,25,150,150)
        turn[0] = true;
        turn[1] = false;
        xo[0] = "x"
    }else if(mouseX>0 && mouseX<200&&mouseY>200&&mouseY<400&&turn[0]&&xo[1]!="x"){
        image(o,25,225,150,150)
        turn[0] = false;
        turn[1] = true;
        xo[1] = "o"
    }else if(mouseX>0 && mouseX<200&&mouseY>200&&mouseY<400&&turn[1]&&xo[1]!="o"){
        image(x,25,225,150,150)
        turn[0] = true;
        turn[1] = false;
        xo[1] = "x"
    }else if(mouseX>0 && mouseX<200&&mouseY>400&&mouseY<600&&turn[0]&&xo[2]!="x"){
        image(o,25,425,150,150)
        turn[0] = false;
        turn[1] = true;
        xo[2] = "o"
    }else if(mouseX>0 && mouseX<200&&mouseY>400&&mouseY<600&&turn[1]&&xo[2]!="o"){
        image(x,25,425,150,150)
        turn[0] = true;
        turn[1] = false;
        xo[2] = "x"
    }

    //column 2
    if(mouseX>200 && mouseX<400&&mouseY>0&&mouseY<200&&turn[0]&&xo[3]!="x"){
        image(o,225,25,150,150)
        turn[0] = false;
        turn[1] = true;
        xo[3] = "o"
    }else if(mouseX>200 && mouseX<400&&mouseY>0&&mouseY<200&&turn[1]&&xo[3]!="o"){
        image(x,225,25,150,150)
        turn[0] = true;
        turn[1] = false;
        xo[3] = "x"
    }else if(mouseX>200 && mouseX<400&&mouseY>200&&mouseY<400&&turn[0]&&xo[4]!="x"){
        image(o,225,225,150,150)
        turn[0] = false;
        turn[1] = true;
        xo[4] = "o"
    }else if(mouseX>200 && mouseX<400&&mouseY>200&&mouseY<400&&turn[1]&&xo[4]!="o"){
        image(x,225,225,150,150)
        turn[0] = true;
        turn[1] = false;
        xo[4] = "x"
    }else if(mouseX>200 && mouseX<400&&mouseY>400&&mouseY<600&&turn[0]&&xo[5]!="x"){
        image(o,225,425,150,150)
        turn[0] = false;
        turn[1] = true;
        xo[5] = "o"
    }else if(mouseX>200 && mouseX<400&&mouseY>400&&mouseY<600&&turn[1]&&xo[5]!="o"){
        image(x,225,425,150,150)
        turn[0] = true;
        turn[1] = false;
        xo[5] = "x"
    }

    //column 3
    if(mouseX>400 && mouseX<600&&mouseY>0&&mouseY<200&&turn[0]&&xo[6]!="x"){
        image(o,425,25,150,150)
        turn[0] = false;
        turn[1] = true;
        xo[6] = "o"
    }else if(mouseX>400 && mouseX<600&&mouseY>0&&mouseY<200&&turn[1]&&xo[6]!="o"){
        image(x,425,25,150,150)
        turn[0] = true;
        turn[1] = false;
        xo[6] = "x"
    }else if(mouseX>400 && mouseX<600&&mouseY>200&&mouseY<400&&turn[0]&&xo[7]!="x"){
        image(o,425,225,150,150)
        turn[0] = false;
        turn[1] = true;
        xo[7] = "o"
    }else if(mouseX>400 && mouseX<600&&mouseY>200&&mouseY<400&&turn[1]&&xo[7]!="o"){
        image(x,425,225,150,150)
        turn[0] = true;
        turn[1] = false;
        xo[7] = "x"
    }else if(mouseX>400 && mouseX<600&&mouseY>400&&mouseY<600&&turn[0]&&x[8]!="x"){
        image(o,425,425,150,150)
        turn[0] = false;
        turn[1] = true;
        xo[8] = "o"
    }else if(mouseX>400 && mouseX<600&&mouseY>400&&mouseY<600&&turn[1]&&xo[8]!="o"){
        image(x,425,425,150,150)
        turn[0] = true;
        turn[1] = false;
        xo[8] = "x"
    }
    
    //vertical o wins
    if (xo[0]=="o"&&xo[1]=="o"&&xo[2]=="o"){winO(); strokeWeight(12.0); line(100, 0, 100, 600);}
    else if(xo[3]=="o"&&xo[4]=="o"&&xo[5]=="o"){winO(); strokeWeight(12.0); line(300, 0, 300, 600);}
    else if(xo[6]=="o"&&xo[7]=="o"&&xo[8]=="o"){winO(); strokeWeight(12.0); line(500, 0, 500, 600);}
    //horizontal o wins
    else if(xo[0]=="o"&&xo[3]=="o"&&xo[6]=="o"){winO(); strokeWeight(12.0); line(0, 100, 600, 100);}
    else if(xo[1]=="o"&&xo[4]=="o"&&xo[7]=="o"){winO(); strokeWeight(12.0); line(0, 300, 600, 300);}
    else if(xo[2]=="o"&&xo[5]=="o"&&xo[8]=="o"){winO(); strokeWeight(12.0); line(0, 500, 600, 500);}
    //diagonal o wins
    else if(xo[0]=="o"&&xo[4]=="o"&&xo[8]=="o"){winO(); strokeWeight(12.0); line(0, 0, 600, 600);}
    else if(xo[2]=="o"&&xo[4]=="o"&&xo[6]=="o"){winO(); strokeWeight(12.0); line(600, 0, 0, 600);}

    //vertical x wins
    else if(xo[0]=="x"&&xo[1]=="x"&&xo[2]=="x"){winX(); strokeWeight(12.0); line(100, 0, 100, 600);}
    else if(xo[3]=="x"&&xo[4]=="x"&&xo[5]=="x"){winX(); strokeWeight(12.0); line(300, 0, 300, 600);}
    else if(xo[6]=="x"&&xo[7]=="x"&&xo[8]=="x"){winX(); strokeWeight(12.0); line(500, 0, 500, 600);}
    //horizontal x wins
    else if(xo[0]=="x"&&xo[3]=="x"&&xo[6]=="x"){winX(); strokeWeight(12.0); line(0, 100, 600, 100);}
    else if(xo[1]=="x"&&xo[4]=="x"&&xo[7]=="x"){winX(); strokeWeight(12.0); line(0, 300, 600, 300);}
    else if(xo[2]=="x"&&xo[5]=="x"&&xo[8]=="x"){winX(); strokeWeight(12.0); line(0, 500, 600, 500);}
    //diagonal x wins
    else if(xo[0]=="x"&&xo[4]=="x"&&xo[8]=="x"){winX(); strokeWeight(12.0); line(0, 0, 600, 600);}
    else if(xo[2]=="x"&&xo[4]=="x"&&xo[6]=="x"){winX(); strokeWeight(12.0); line(600, 0, 0, 600);}
}

function winO(){
    fill(155)
    textFont("impact", 50)
    text("O's Win!",230,300)
}

function winX(){
    fill(155)
    textFont("impact", 50)
    text("X's Win!",230,300)
}