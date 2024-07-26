//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  var flower_x = 25;
  var flower_y = 55;
  
  flower(flower_x, flower_y);
  flower(flower_x+40, flower_y+40);
  flower(flower_x+80, flower_y+80);
  flower(flower_x+120, flower_y+120);

}

function flower(x, y) {
  let pistilSize = 15; 
  let petalx = 30;
  let petaly = 20;
  

  fill('pink'); //petals
  stroke('white');
  ellipse(x-10, y, petalx, petaly);
  ellipse(x, y-10, petalx-10, petaly+10);
  ellipse(x+10, y, petalx, petaly);
  ellipse(x, y+10, petalx-10, petaly+10);

  fill('lightyellow');
  circle(x, y, pistilSize); //pistil

}
