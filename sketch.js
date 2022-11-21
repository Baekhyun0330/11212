
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)//0~360度 PI(180)
}

function draw() {
  background(220);
  textSize(50)
  text("x:"+mouseX+" Y:"+mouseY,50,50)
  push()
  translate(width/2,height/2)
  fill(0)
  ellipse(-120,-200,120)
  ellipse(120,-200,120)
  fill("#FFFFFF")
  ellipse(0,0,400)//臉
  fill(0)
  ellipse(0,0,100,60)//鼻子橢圓
  fill(100)
  //ellipse(-30,0,30)//左鼻孔
  //ellipse(30,0,30)//右鼻孔
  
  ellipse(-70,-80,60)//左眼
  fill(0)
  ellipse(-70+mouseX/80,-90+mouseY/60,40)//右眼
  fill(100)
  ellipse(70,-80,60)
  fill(0)
  ellipse(70+mouseX/80,-90+mouseY/60,40)

  fill("#f4978e")
  arc(0,100,200,100,0,180)
  fill(255)
  if(mouseIsPressed)
  {   
    //mouseIspressed為true，代表有按下滑鼠
    arc(0,99,200,40,0,180)
  }
  else
  {  
     //mouseIspressed為false，代表沒有按下滑鼠
    arc(0,99,200,90,0,180)
  }

  noFill()
  pop()
}










// 搭配聲音

//![](https://hackmd.io/_uploads/rkNWynb7o.gif)



//javascript=

//var face_x = []
//var face_y =[]
//var face_size =[]
//var face_num
//var song
//var songIsplay=false  //false代表音樂沒有播放，true播放音樂
//var amp

//function preload(){
  //song = loadSound("Organic Guitar House - Dyalla.mp3");
//}

//function setup() {
  //createCanvas(windowWidth, windowHeight);
  //angleMode(DEGREES)
  // face_size = 400
  // face_x = width/2
  // face_y = height/2
  //face_num =6
  //for (var i =0;i<face_num;i++){
    //face_size[i] = random(200,300)
    //face_x[i] = random(100,width)
    //face_y[i] = random(100,height)
  //}





//function draw() {
  //background(220);
   //textSize(50)
   //text("X:"+mouseX+"  Y:"+mouseY,50,50)
  //for(var j=0;j<face_num;j++)
  //{
    //push()  
      //fill(255,0,0)
      //translate(face_x[j],face_y[j]) //把(0,0)座標原點移到視窗的中間
      //let f_s = face_size[j]
      //ellipse(0,0,f_s)  //臉
      //ellipse(0,0,f_s/2,f_s/4) //鼻子橢圓
      //ellipse(-f_s/10,0,f_s/12) //左鼻孔
      //ellipse(f_s/10,0,f_s/12) //右鼻孔
      //左眼
      //ellipse(-f_s/5,-f_s/5,f_s/7)
      //fill(0)
      //ellipse(-f_s/4.5+map(mouseX,0,width,-f_s/40,f_s/12),-f_s/4.5+map(mouseY,0,height,-f_s/40,f_s/12),f_s/20)
      //noFill()
      //右眼
      //ellipse(f_s/5,-f_s/5,f_s/7)
      //fill(0)
      //ellipse(f_s/5.8+map(mouseX,0,width,-f_s/40,f_s/12),-f_s/4.5+map(mouseY,0,height,-f_s/40,f_s/12),f_s/20)
      
      //fill(255,0,0)
      //arc(0,f_s/4,f_s/2,f_s/4,0,180)  //下弧
      //fill(255)
      //if(mouseIsPressed)
