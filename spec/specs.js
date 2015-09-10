describe("romanNumerator", function(){
  it("returns 'I', when 1 is entered", function()  {
    expect(romanNumerator(1)).to.eql("I");
  });
  it("returns three 'I's when 3 is entered", function() {
    expect(romanNumerator(3)).to.eql("III");
  });
});

// describe("countUpBy", function() {
//   it('counts up by the user input', function() {
//     expect(countUpBy(10, 2)).to.eql([2,4,6,8,10]);
//   })
// });
