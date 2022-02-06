export interface Options {
    xmlns?: { xml?: string };
    /*
        default text/html
    */
    mimeType?: string;

    /*
        
        Ignore parsing tags eg script, style etc
        This is for performance issue, will use RegExp to clean the html string before parsing it

    */
    ignoreTags?: string[];

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

export interface ErrorHandler {
    warning: (w: string) => void;
    error: (e: string) => void;
    fatalError: (e: string) => void;
}

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


export interface Attribute extends Node {

}

export class ClassList {
    toggle: (k: string) => void;
    remove: (c: string) => void;
    add: (c: string) => void;
    length: () => number;
    values: () => string[];
    has: (c: string) => boolean;
    contains: (c: string) => boolean;
    replace: (k1: string, k2: string) => void;
    toString: () => string;
}

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

export interface NodeList<T> extends Set<T> {

}


export interface Text extends Node {
    nodeName: "#text";
    nodeType: number;
    data: string;
    length: number;
    appendData: (text: string) => void;
    insertData: (offset: number, text: string) => void;
    deleteData: (offset: number, count: number) => void;
    replaceData: (offset: number, count: number, text: string) => void;
}


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
