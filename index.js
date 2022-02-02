const DOMParser = require("./components/dom-parser").DOMParser;
const XMLSerializer = require("./components/dom-parser").XMLSerializer;

const IDomParser = {
    parse: (html, options) => new DOMParser(options).parseFromString(html, options),
    serializeToString: (node, attributeSorter) => new XMLSerializer().serializeToString(node, attributeSorter)
}

module.exports = IDomParser;