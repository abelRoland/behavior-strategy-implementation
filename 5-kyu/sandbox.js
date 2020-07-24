function rgb(r, g, b){
  
    let red = r > 255 ? 255 : r < 0 ? 0 : r;
    let green = g > 255 ? 255 : g < 0 ? 0 : g;
    let blue = b > 255 ? 255 : b < 0 ? 0 : b;
    
    var rgb= "rgb("+red+", "+green+", "+blue+")";
        rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i); 
        
        return (rgb && rgb.length === 4) 
        ? ("0" + parseInt(rgb[1],10)
            .toString(16))
            .slice(-2)
            .toUpperCase()
        + ("0" + parseInt(rgb[2],10)
            .toString(16))
            .slice(-2)
            .toUpperCase()
        + ("0" + parseInt(rgb[3],10)
            .toString(16))
            .slice(-2) 
            .toUpperCase()
        : '';
  }