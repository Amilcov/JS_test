
const {expect} = require('chai');
const User = require('../class/user.js');

describe('User class', function() {
    it ('should create succesfully', function(){
        let user = new User();
        expect(user).to.exist;
    });

    it('should set username on creation', function(){
        let user = new User('My Beautiful Name');
         expect(user.username).to.equal('My Beautiful Name');
    });
});
