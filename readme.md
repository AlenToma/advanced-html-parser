# advanced-html-parser

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
The library uses `css-select` and it support all advanced selectors `css-select` support like 
`#info > .description > .small strong:first-child span` and more.
See [css-select](https://github.com/fb55/css-select) for more info.


## Speed up the parsing
The libray is very fast, and if you want to use it to scrap some data from website. then using the settings below may speed the parsing.

```js
    const doc = IDOMParser.parse(page, {
        ignoreTags: ["script", "style", "head"] // This will remove all those tags before begining to parse the string.
        onlyBody: true
    });
```

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
    readonly cloneNode: (deep: boolean) => Node;
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
    readonly getAttribute: (attrName: string) => string;
    readonly getAttributeNode: (attrName: string) => Attribute;
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
    readonly nodeName: string;
    readonly nodeType: number;
    readonly doctype: string | null;
    readonly documentElement: Element;
    readonly insertBefore: (newChild: Node, refChild: Node) => Element;
    readonly removeChild: (child: Node) => void;
    readonly importNode: (importedNode: Node, deep: number) => Element;
    readonly getElementById: (id: string) => Element | null;
    readonly getElementByClassName: (className: string) => Element | null;
    readonly getElementByAttribute: (attibute: string) => Element | null;
    readonly createElement: (tagName: string) => Element;
    readonly createDocumentFragment: () => DocumentFragment;
    readonly createTextNode: (data: string) => Text;
    readonly createComment: (data: string) => Node;
    readonly createCDATASection: (data: string) => Node;
    readonly createProcessingInstruction: (target: string, data: string) => Node;
    readonly createAttribute: (name: string) => Attribute;
    readonly createEntityReference: (name: string) => Attribute;
    readonly createElementNS: (namespaceURI: string, qualifiedName: string) => Element;
    readonly createAttributeNS: (namespaceURI: string, qualifiedName: string) => Attribute;
}
```

## Parser Options

```ts

export interface Options {
    xmlns?: { xml?: string };
    /*
        default text/html
    */
    mimeType?: string;

    /*

        Ignore parsing tags eg script, style etc
        This is for performance issue, will use RegExp to clean the html string before parsing it.

    */
    ignoreTags?:string[];

    /*
        Parse only the body.
        this will extract the <body> from the html string and parse it only
    */
    onlyBody?: boolean;

      /*
        override the errorHandler. 

    */
    errorHandler?: ErrorHandler;
}

```