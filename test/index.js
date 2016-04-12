"use strict";

const expect = require('chai').expect
const mixin = require('../index')

describe('#mixin', () => {

    class A {
        a() {
            return "a"
        }

        which() {
            return "A"
        }

        override() {
            return "A"
        }
    }

    class B {
        b() {
            return "b"
        }

        which() {
            return "B"
        }

        override() {
            return "B"
        }
    }

    class C extends mixin(Object, A, B)
    {
        override() {
            return "C"
        }
    }

    it ("should have a() and b()", () => {

        const c = new C

        expect(c.a()).to.be.equal('a')
        expect(c.b()).to.be.equal('b')

    })

    it ("should have B.which", () => {

        const c = new C

        expect(c.which()).to.be.equal('B')

    })

    it ("should have C.override", () => {

        const c = new C

        expect(c.override()).to.be.equal('C')

    })

})
