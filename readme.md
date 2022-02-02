# react-native-html-parser

Can use html parser in react-native, titanium, and anywhere. This is based on [xmldom](https://github.com/jindw/xmldom).

This library is based on [react-native-html-parser](https://github.com/g6ling/react-native-html-parser) where it has much more features and it can decode almost all charecters set, also 
added support to CSS3 selectors and typescript.

## Install:
-------
>npm install advanced-html-parser 

## Example
```js

const IDOMParser = require("advanced-html-parser");
// or import IDOMParser from 'advanced-html-parser'
const doc = IDOMParser.parse(`<div class="test" href="google"><span> test </span><span> test </span></div>`);
const attr = doc.documentElement.querySelector("span").closest(".test").getAttribute("href"); // google

```

## CSS3 Selector support
The library uses [css-select](https://github.com/fb55/css-select) and it support everything css-select uses


## Node Class
```ts
export interface Node {
    readonly nodeName: string;
    readonly tagName: string;
    readonly nodeType: number;
    readonly firstChild: Element | null;
    readonly lastChild: Element | null;
    readonly previousSibling: Element | null;
    readonly nextSibling: Element | null;
    readonly attributes: NamedNodeMap | null;
    readonly parentNode: Node | null;
    readonly childNodes: NodeList<Node> | null;
    readonly children: Node[];
    readonly ownerDocument: Document | null;
    nodeValue: string | null;
    value: string | null;
    readonly namespaceURI: string | null;
    readonly prefix: string | null;
    readonly localName: string | null;
    readonly insertBefore: (newChild: Node, refChild: Element) => Element;
    readonly replaceChild: (newChild: Node, refChild: Element) => void;
    readonly removeChild: (oldChild: Node) => void;
    readonly remove: () => void;
    readonly appendChild: (child: Node) => void;
    readonly hasChildNodes: () => boolean;
    readonly cloneNode: () => Node;
    readonly normalize: () => void;
    readonly isSupported: (feature: number, version: string) => boolean;
    readonly hasAttributes: () => boolean;
    readonly lookupPrefix: (namespaceURI: string) => Node | null;
    readonly lookupNamespaceURI: (prefix: string) => Node | null;
    readonly isDefaultNamespace: (namespaceURI: string) => boolean;
    readonly toString: () => string;
    innerHTML: string;
    textContent: string;
    readonly outerHTML: string;
    /*
        RawText
    */
    readonly innerText: () => string;
    /*
        structored text based
    */
    readonly text: () => string;

}

```

## Element
```ts
export interface Element extends Node {
    readonly hasAttribute: (attrName: string) => boolean;
    readonly getAttribute: (attrName: string) => Attribute;
    readonly getAttributeNode: (attrName: string) => any;
    readonly setAttribute: (name: string, value: string) => void;
    readonly removeAttribute: (name: string) => any;
    readonly setAttributeNode: (newAttr: string) => Attribute;
    readonly setAttributeNodeNS: (newAttr: string) => Attribute;
    readonly removeAttributeNode: (oldAttr: string) => void;
    //get real attribute name,and remove it by removeAttributeNode
    readonly removeAttributeNS: (namespaceURI: string, localName: string) => void;
    readonly hasAttributeNS: (namespaceURI: string, localName: string) => boolean;
    readonly getAttributeNS: (namespaceURI: string, localName: string) => Attribute;
    readonly setAttributeNS: (namespaceURI: string, qualifiedName: string, value: string) => Attribute;
    readonly getAttributeNodeNS: (namespaceURI: string, qualifiedName: string) => Attribute;
    readonly getElementsByTagName: (tagName: string) => NodeList<Element>;
    readonly getElementsByClassName: (className: string) => NodeList<Element>;
    readonly getElementsByTagNameNS: (namespaceURI: string, localName: string) => NodeList<Element>;
    readonly getElementsByAttribute: (attribute: string, selector: string, undefine: string) => NodeList<Element>;
    readonly querySelectorAll: (selector: string) => NodeList<Element>;
    readonly querySelector: (selector: string) => Element | null;
    readonly closest: (selector: string) => Element | null;
    readonly classList: ClassList;
}

```

## Document
```ts
export interface Document {
    nodeName: string;
    nodeType: number;
    doctype: string | null;
    documentElement: Element;
    insertBefore: (newChild: Node, refChild: Node) => Element;
    removeChild: (child: Node) => void;
    importNode: (importedNode: Node, deep: number) => Element;
    getElementById: (id: string) => Element | null;
    getElementByClassName: (className: string) => Element | null;
    getElementByAttribute: (attibute: string) => Element | null;
    createElement: (tagName: string) => Element;
    createDocumentFragment: () => DocumentFragment;
    createTextNode: (data: string) => Text;
    createComment: (data: string) => Node;
    createCDATASection: (data: string) => Node;
    createProcessingInstruction: (target: string, data: string) => Node;
    createAttribute: (name: string) => Attribute;
    createEntityReference: (name: string) => Attribute;
    createElementNS: (namespaceURI: string, qualifiedName: string) => Element;
    createAttributeNS: (namespaceURI: string, qualifiedName: string) => Attribute;
}
```