const { expect } = require("chai");
const mocha = require("mocha");
const caesarTest = require("../src/caesar").caesar;

describe("Caesar shift cipher can encode and decode a message based on the arguments", () => {
  //should return encoded message properly
  it("should encode a string with a given shift parameter", () => {
    const actual = caesarTest("chemistry", 5);
    const expected = "hmjrnxywd";
    expect(actual).to.eql(expected);
  });
  //should decode a message properly
  it("should decode a string with a given shift parameter", () => {
    const actual = caesarTest("hmjrnxywd", 5, false);
    const expected = "chemistry";
    expect(actual).to.eql(expected);
  });
});
describe("Caesar shift cipher returns false for shift of 0, < 25, or > 25, or not present", () => {
  //returns false if shift is 0
  it("should return false if the shift is 0", () => {
    const actual = caesarTest("chemistry", 0);
    expect(actual).to.be.false;
  });
  //returns false if shift is < 25
  it("should return false if the shift is less than 25", () => {
    const actual = caesarTest("chemistry", -30);
    expect(actual).to.be.false;
  });
  //return false if shift is > 25
  it("should return false if the shift is greater than 25", () => {
    const actual = caesarTest("chemistry", 30);
    expect(actual).to.be.false;
  });

  //return false if no shift given
  it("should return false if the shift is not present", () => {
    const actual = caesarTest("chemistry");
    expect(actual).to.be.false;
  });
});
describe("Caesar shift cipher ignores capital letters when encoding and decoding", () => {
  //returns same message regardless of capital letters being included
  it("should encode a message with capital letters", () => {
    const actual = caesarTest("ChEmistRy", 5);
    const expected = "hmjrnxywd";
    expect(actual).to.eql(expected);
  });
});
describe("Caesar shift cipher handles shifts that go past the end of the alphabet", () => {
  //encodes properly with positive shift going past z
  it("should encode a message with positive shift going past z", () => {
    const actual = caesarTest("chemistry", 23);
    const expected = "zebjfpqov";
    expect(actual).to.eql(expected);
  });
//encodes properly with negative shift going past a
  it("should encode a message with negative shift going past a", () => {
    const actual = caesarTest("chemistry", -23);
    const expected = "fkhplvwub";
    expect(actual).to.eql(expected);
  });
//decodes properly with positive shift going past z
  it("should decode a message with positive shift going past z", () => {
    const actual = caesarTest("fkhplvwub", -23, false);
    const expected = "chemistry";
    expect(actual).to.eql(expected);
  });
//decodes properly with negative shift going past a
  it("should decode a message with negative shift going past a", () => {
    const actual = caesarTest("zebjfpqov", 23, false);
    const expected = "chemistry";
    expect(actual).to.eql(expected);
  });
});
describe("Caesar shift cipher should maintain spaces and other nonalphabetic symbols", () => {
  //encodes spaces and nonalphabetic symbols as themselves
  it("should maintain spaces and other nonalphabetic symbols when encoding", () => {
    const actual = caesarTest("chemistry is cool!", 5);
    const expected = "hmjrnxywd nx httq!";
    expect(actual).to.eql(expected);
  });
  //decodes spaces and nonalphabetic symbols as themselves
  it("should maintain spaces and other nonalphabetic symbols when decoding", () => {
    const actual = caesarTest("hmjrnxywd nx httq!", 5, false);
    const expected = "chemistry is cool!";
    expect(actual).to.eql(expected);
  });
});