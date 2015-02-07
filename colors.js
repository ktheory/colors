window.colorsByHue = {
  "blue": [
    "LightSteelBlue",
    "PowderBlue",
    "LightBlue",
    "SkyBlue",
    "LightSkyBlue",
    "DeepSkyBlue",
    "DodgerBlue",
    "CornflowerBlue",
    "SteelBlue",
    "RoyalBlue",
    "Blue",
    "MediumBlue",
    "DarkBlue",
    "Navy",
    "MidnightBlue"
  ],
  "brown": [
    "Cornsilk",
    "BlanchedAlmond",
    "Bisque",
    "NavajoWhite",
    "Wheat",
    "BurlyWood",
    "Tan",
    "RosyBrown",
    "SandyBrown",
    "Goldenrod",
    "DarkGoldenrod",
    "Peru",
    "Chocolate",
    "SaddleBrown",
    "Sienna",
    "Brown",
    "Maroon"
  ],
  "cyan": [
    "MediumAquamarine",
    "Aqua",
    "Cyan",
    "LightCyan",
    "PaleTurquoise",
    "Aquamarine",
    "Turquoise",
    "MediumTurquoise",
    "DarkTurquoise",
    "LightSeaGreen",
    "CadetBlue",
    "DarkCyan",
    "Teal"
  ],
  "gray": [
    "Gainsboro",
    "LightGrey",
    "Silver",
    "DarkGray",
    "Gray",
    "DimGray",
    "LightSlateGray",
    "SlateGray",
    "DarkSlateGray",
    "Black"
  ],
  "green": [
    "DarkOliveGreen",
    "Olive",
    "OliveDrab",
    "YellowGreen",
    "LimeGreen",
    "Lime",
    "LawnGreen",
    "Chartreuse",
    "GreenYellow",
    "SpringGreen",
    "MediumSpringGreen",
    "LightGreen",
    "PaleGreen",
    "DarkSeaGreen",
    "MediumSeaGreen",
    "SeaGreen",
    "ForestGreen",
    "Green",
    "DarkGreen"
  ],
  "orange": [
    "OrangeRed",
    "Tomato",
    "Coral",
    "DarkOrange",
    "Orange"
  ],
  "pink": [
    "Pink",
    "LightPink",
    "HotPink",
    "DeepPink",
    "PaleVioletRed",
    "MediumVioletRed"
  ],
  "purple": [
    "Lavender",
    "Thistle",
    "Plum",
    "Violet",
    "Orchid",
    "Fuchsia",
    "Magenta",
    "MediumOrchid",
    "MediumPurple",
    "BlueViolet",
    "DarkViolet",
    "DarkOrchid",
    "DarkMagenta",
    "Purple",
    "Indigo",
    "DarkSlateBlue",
    "RebeccaPurple",
    "SlateBlue",
    "MediumSlateBlue"
  ],
  "red": [
    "LightSalmon",
    "Salmon",
    "DarkSalmon",
    "LightCoral",
    "IndianRed",
    "Crimson",
    "FireBrick",
    "DarkRed",
    "Red"
  ],
  "white": [
    "White",
    "Snow",
    "Honeydew",
    "MintCream",
    "Azure",
    "AliceBlue",
    "GhostWhite",
    "WhiteSmoke",
    "Seashell",
    "Beige",
    "OldLace",
    "FloralWhite",
    "Ivory",
    "AntiqueWhite",
    "Linen",
    "LavenderBlush",
    "MistyRose"
  ],
  "yellow": [
    "Yellow",
    "LightYellow",
    "LemonChiffon",
    "LightGoldenrodYellow",
    "PapayaWhip",
    "Moccasin",
    "PeachPuff",
    "PaleGoldenrod",
    "Khaki",
    "DarkKhaki",
    "Gold"
  ]
};

window.hues = ["pink", "red", "orange", "yellow", "brown", "green", "cyan", "blue", "purple", "white", "gray" ];
window.colors = _.reduce(hues, function(memo, hue){ return memo.concat(colorsByHue[hue]); }, []);
$.each(colors, function(i, c) {
  var friendly_color = c.replace(/([A-Z])/g, function($1){return " "+$1; });
  $('#colors').append('<div class=color style="background-color: ' + c + '">' + friendly_color + '</div>');
});

$('#colors div').each(function() {
  var rgb = $(this).css('background-color').replace(/[^\d,]/g, '').split(',');

  var brightness = rgb[0]*0.299 + rgb[1]*0.587 + rgb[2]*0.114;
  console.log(brightness);
  if (brightness <= 160) $(this).addClass('light');
});
