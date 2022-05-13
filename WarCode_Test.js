var expect = chai.expect

describe("MyFunctions", function(){
    describe("#startGame", function(){
        it("should start the game", function(){
            var x = startGame("Hello", 5);
            expect(x).to.equal("Hello5");
        })

        it("should throw and error if code is broken", function(){
            expect(function(){
                startGame(5, 5);
            }).to.throw(Error)
        })
    })
})