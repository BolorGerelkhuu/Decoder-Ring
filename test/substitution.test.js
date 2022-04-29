const { expect } = require("chai");
const substitution = require("../src/substitution").substitution;
//For the substitution cipher (example: substitution("chemistry", "qwertyuiopasdfghjklzxcvbnm") => "eitdolzkn")

describe("Unit testing for substitution()", () => {
  //It returns false if the given alphabet isn't exactly 26 characters long.
  it("Should return false if the given alphabet isn't 26 char long", () => {
    //one letter short
    const actual = substitution("chemistry", "qwertyuiopasdfghjklzxcvbn");
    expect(actual).to.be.false;
  });
  //It correctly translates the given phrase, based on the alphabet given to the function.
  it("Should correctly translate the given phrase", () => {
    const actual = substitution("chemistry", "qwertyuiopasdfghjklzxcvbnm");
    const expected = "eitdolzkn";
    expect(actual).to.eql(expected);
  });
  it("Should decode the given phrase", () => {
    const actual = substitution(
      "eitdolzkn",
      "qwertyuiopasdfghjklzxcvbnm",
      false
    );
    const expected = "chemistry";
    expect(actual).to.eql(expected);
  });
  //It returns false if there are any duplicate characters in the given alphabet.
  it("Should return false if there are any duplicate characters in the given alphabet", () => {
    //extra a added to the alphabet
    const actual = substitution("chemistry", "qqertyuiopasdfghjklzxcvbnm");
    expect(actual).to.be.false;
  });
  //It maintains spaces in the message, before and after encoding or decoding.
  it("Should maintain spaces in the message", () => {
    const actual = substitution("chem istry", "qwertyuiopasdfghjklzxcvbnm");
    const expected = "eitd olzkn";
    expect(actual).to.eql(expected);
  });
  //It ignores capital letters. (For example, the results of A Message and a message should be the same.)
  it("Should ignore capital letters", () => {
    const actual = substitution("CHEMISTRY", "qwertyuiopasdfghjklzxcvbnm");
    const expected = "eitdolzkn";
    expect(actual).to.eql(expected);
  });
});
