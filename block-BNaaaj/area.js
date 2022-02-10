let area = {
    square: function(l){
      return l*l;
    },
    rectangle(l,b){
        return l*b;
    },
    circle(radius){
        return Math.PI*radius*radius;
    }
}

module.exports = "area";