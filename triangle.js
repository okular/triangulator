'use strict';

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        this.sides = [ a, b, c ];
    }

    integerCheck() {
        let arr = this.sides;
        let allIntegers = true;

        arr.forEach(function(value, index) {
            if(!Number.isInteger(value)) {
                return allIntegers = false;
            }
        });

        return allIntegers;
    }

    type () {
        if( !this.integerCheck() ) {
            throw new Error('only integers please!');
        }

        if ( this.a + this.b <= this.c
            || this.b + this.c <= this.a
            || this.c + this.a <= this.b
           )
        {
            throw new Error('not a valid triangle');
        }
        return (this.a === this.b && this.b === this.c)
                && 'equilateral'
                ||(this.a === this.b || this.a === this.c
                || this.b === this.c) && 'isosceles' ||
                'scalene';
    }
}

module.exports = Triangle;