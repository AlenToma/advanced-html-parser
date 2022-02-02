const DOMParser = require("./components/dom-parser").DOMParser;
const XMLSerializer = require("./components/dom-parser").XMLSerializer;

const IDomParser = {
    parse: (html, mimeType, options) => new DOMParser(options).parseFromString(html, mimeType),
    serializeToString: (node, attributeSorter) => new XMLSerializer().serializeToString(node, attributeSorter)
}

module.exports = IDomParser;