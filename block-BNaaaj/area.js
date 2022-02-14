    function square(l){
      return l*l;
    }
    function rectangle(l,b){
        return l*b;
    }
    function circle(radius){
        return Math.PI*radius*radius;
    }


module.exports = {
    square : square,
    rectangle : rectangle,
    circle : circle
}