let vid1;
let vid2;
let bg1;
let pg;


function setup() {
  canvas = createCanvas(320, 180, WEBGL); // scale factor 4 (1280, 720)
  canvas.id("canvas");
  //canvas.width("640");
  //canvas.height("480");
  

  vid1 = createVideo(["WhiteScreen01.mp4"]);
  vid2 = createVideo(["WhiteScreen02.mp4"]);

  vid1.size(width, height);
  vid1.id("video1");
  vid2.size(width, height);
  vid2.id("video2");
  vid1.loop();
  vid1.volume(0);
  vid2.loop();
  vid2.volume(0);
  

  slider = createSlider(0, 1, 0.9, 0.01);
  slider.id("clipBlack-slider");
  slider2 = createSlider(0, 1, 0.9, 0.01);
  slider2.id("clipWhite-slider");

  var seriously = new Seriously();

  var lumakey = seriously.effect("lumakey");

  // needed a source identity video
  var src1 = seriously.source("#video1");
  var src2 = seriously.source("#video2");
  var target = seriously.target("#canvas");
  // aquí hay que dar las dimensiones originales del video - sin escalar !!!
  target.width = "1280";
  target.height = "720";
  
  var blend = seriously.effect("blend");
  blend.bottom = src1;
  blend.top = src2;
  blend.opacity = 0.9; //"#opacity"
  blend.mode = "glow"; //"screen";//"glow"; //"#lightercolor"; //"#mode"//effect('blend', { mode: "difference" } );

  lumakey.source = blend;
  //src3.source = lumakey;
  target.source = lumakey;
  
  lumakey.clipBlack = "#clipBlack-slider";
  lumakey.clipWhite = "#clipWhite-slider";

  seriously.go();

  vid1.hide();
  vid2.hide();
}



/*
<label for="mode">Blend Mode</label>
<select id="mode">
	<option value="normal">Normal</option>
	<option value="lighten">Lighten</option>
	<option value="darken">Darken</option>
	<option value="multiply">Multiply</option>
	<option value="average">Average</option>
	<option value="add">Add</option>
	<option value="subtract">Subtract</option>
	<option value="divide">Divide</option>
	<option value="difference">Difference</option>
	<option value="negation">Negation</option>
	<option value="exclusion">Exclusion</option>
	<option value="screen">Screen</option>
	<option value="overlay">Overlay</option>
	<option value="softlight">Soft Light</option>
	<option value="hardlight">Hard Light</option>
	<option value="colordodge">Color Dodge</option>
	<option value="colorburn">Color Burn</option>
	<option value="lineardodge">Linear Dodge</option>
	<option value="linearburn">Linear Burn</option>
	<option value="linearlight">Linear Light</option>
	<option value="vividlight">Vivid Light</option>
	<option value="pinlight">Pin Light</option>
	<option value="hardmix">Hard Mix</option>
	<option value="reflect">Reflect</option>
	<option value="glow">Glow</option>
	<option value="phoenix">Phoenix</option>
	<option value="hue">Hue</option>
	<option value="saturation">Saturation</option>
	<option value="color">Color</option>
	<option value="luminosity">Luminosity</option>
	<option value="lightercolor">Lighter Color</option>
	<option value="darkercolor">Darker Color</option>
</select>
        */
