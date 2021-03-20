canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car_width=100;
car_height=90;

background_image="racing.jpg";
car_image="car1.png", "car2.png";
car_x = 10;
car_y = 10;

function add()
{
  background_imgTag = new Image();
  background_imgTag.onload = uploadBackground;
  background_imgTag.src = background_image;

  car1_imgTag = new Image();
  car1_imgTag.onload = uploadcar1;
  car1_imgTag.src = car1_image;
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1()
{
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1.width, car1.height);
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar2()
{
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2.width, car2.height);
}


window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keypressed=e.keyCode;
    console.log(keypressed);

    if(keypressed =='38'){
     car1_up();
     console.log("up arrow key");

     
    }

    if(keypressed =='40'){
        car1_down();
        console.log("down arrow key");
    }

    if(keypressed =='37'){
        car1_left();
        console.log("left arrow key");
    }

    if(keypressed =='39'){
        car1_right();
        console.log("right arrow key");
    }

    if(keypressed =='87'){
        car2_up();
        console.log("w key");
       }
   
       if(keypressed =='83'){
           car2_down();
           console.log("s key");
       }
   
       if(keypressed =='65'){
           car2_left();
           console.log("a key");
       }
   
       if(keypressed =='68'){
           car2_right();
           console.log("d key");
       }

       if(car1_x > 700){
           console.log("car1 won");
           document.getElementById('game_status').innerHTML = "Car1 won!";
       }

       if(car2_x > 700){
        console.log("car2 won");
        document.getElementById('game_status').innerHTML = "Car2 won!";
       }
}

function car1_up()
{
    if(car1_y >=0)
    {
        car1_y = car1_y - 10;
        console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_down()
{
    if(car1_y <=500)
    {
        car1_y = car1_y + 10;
        console.log("When down arrow is pressed, x = " + car1_x + " | y = " +car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_left()
{
    if(car1_x >=0)
    {
        car1_x = car1_x - 10;
        console.log("When left arrow is pressed, x = " + car1_x + " | y = " +car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_right()
{
    if(car1_x <=500)
    {
        car1_x = car1_x + 10;
        console.log("When right arrow is pressed, x = " + car1_x + " | y = " +car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_up()
{
    if(car2_y >=0)
    {
        car2_y = car2_y - 10;
        console.log("When w is pressed, x = " + car2_x + " | y = " +car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_down()
{
    if(car2_y <=500)
    {
        car2_y = car2_y + 10;
        console.log("When s is pressed, x = " + car2_x + " | y = " +car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_left()
{
    if(car2_x >=0)
    {
        car2_x = car2_x - 10;
        console.log("When a is pressed, x = " + car2_x + " | y = " +car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_right()
{
    if(car2_x <=500)
    {
        car2_x = car2_x + 10;
        console.log("When d is pressed, x = " + car2_x + " | y = " +car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}






