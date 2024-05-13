const circle = {
    radius: 2,
    get area() {
        return this.radius * this.radius * Math.PI;
    },
    set raio(value) {
        this.radius = value;
    },
    get areaobjeto() {
        return this.area;
    }
};

console.log(circle.areaobjeto);
circle.raio = 4;
console.log(circle.areaobjeto);