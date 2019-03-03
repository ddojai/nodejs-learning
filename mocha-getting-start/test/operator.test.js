const operator = require('../src/operator');
const sum = operator.sum;
const chai = require('chai');
const expect = chai.expect;

describe('operator.js Test', () => {
    describe('sum 함수 테스트', () => {
        before(() => {
            console.log('before')
        });
        beforeEach(() => {
            console.log('beforeEach')
        });
        it ('10 + 20 = 30', done => {
            const result = sum(10, 20);
            expect(result).to.equal(30);
            done();
        });
        after(() => {
            console.log('after')
        });
        afterEach(() => {
            console.log('afterEach')
        });
    })
});
