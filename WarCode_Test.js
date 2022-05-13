var expect = chai.expect

describe("MyFunctions", function(){
    describe("#startGame", function(){
        it("should start the game", function(){
            var x = startGame();
            expect(x).to.equal();
        })

        it("Function needs no input", function(){
            expect(function(){
                startGame(5);
            }).to.throw(Error)
        })
    })
})