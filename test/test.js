const IDOMParser = require("./../")

//const doc = IDOMParser.parse(require("./html"));
const should = require('should');
const fs = require('fs');
//const describe = require("mocha")
var html = "<div></div>"
describe('HTML Parser', function () {
    const doc = IDOMParser.parse(html);

    doc.documentElement.toString().should.eql(html);
});


describe("Reading text", function(){
    const doc = IDOMParser.parse(`<div>test</div>`);

    doc.documentElement.text().should.eql("test");
});


describe("Reading innerText", function(){
    const doc = IDOMParser.parse(`<div>test</div>`);

    doc.documentElement.innerText().should.eql("test");
});

describe("Reading textContent", function(){
    const doc = IDOMParser.parse(`<div>test</div>`);

    doc.documentElement.textContent.should.eql("test");
});

describe("Reading outerHTML", function(){
    const doc = IDOMParser.parse(`<div>test</div>`);

    doc.documentElement.outerHTML().should.eql(`<div>test</div>`);
});

describe("Reading innerHTML", function(){
    const doc = IDOMParser.parse(`<div>test</div>`);

    doc.documentElement.innerHTML.should.eql(`test`);
});

describe("Reading classList", function(){
    const doc = IDOMParser.parse(`<div class="test">test</div>`);

    doc.documentElement.classList.toString().should.eql(`test`);
});

describe("Reading hasAttribute", function(){
    const doc = IDOMParser.parse(`<div class="test">test</div>`);

    doc.documentElement.hasAttribute("class").should.eql(true);
});

describe("Reading querySelector", function(){
    const doc = IDOMParser.parse(`<div class="test"><span> test </span></div>`);

    doc.documentElement.querySelector("span").text().should.eql("test");
});

describe("Reading querySelectorAll", function(){
    const doc = IDOMParser.parse(`<div class="test"><span> test </span><span> test </span></div>`);
    doc.documentElement.querySelectorAll("span").length.should.eql(2);
});

describe("Reading closest", function(){
    const doc = IDOMParser.parse(`<div class="test" href="google"><span> test </span><span> test </span></div>`);
    doc.documentElement.querySelector("span").closest(".test").getAttribute("href").should.eql("google");
});

