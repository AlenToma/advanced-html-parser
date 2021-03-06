NodeType = {}
NodeType.ELEMENT_NODE = 1;
NodeType.ATTRIBUTE_NODE = 2;
NodeType.TEXT_NODE = 3;
NodeType.CDATA_SECTION_NODE = 4;
NodeType.ENTITY_REFERENCE_NODE = 5;
NodeType.ENTITY_NODE = 6;
NodeType.PROCESSING_INSTRUCTION_NODE = 7;
NodeType.COMMENT_NODE = 8;
NodeType.DOCUMENT_NODE = 9;
NodeType.DOCUMENT_TYPE_NODE = 10;
NodeType.DOCUMENT_FRAGMENT_NODE = 11;
NodeType.NOTATION_NODE = 12;


function isTag(node) {
    return node && node.nodeType === NodeType.ELEMENT_NODE;
}

function getAttributeValue(elem, name) {
    return isTag(elem) ? elem.getAttribute(name) || elem.getAttribute(name.toLowerCase()) : undefined;
}

function getName(elem) {
    return ((elem && elem.nodeName) || '').toLowerCase();
}

function getChildren(node) {

    return node && node.childNodes && node.childNodes.length > 0 ? Array.from(node.childNodes) : [];
}

function getParent(node) {
    return node ? node.parentNode : null;
}

function getText(node) {
    return node ? node.text() : "";
}

function removeSubsets(nodes) {
    let idx = nodes.length;
    let node;
    let ancestor;
    let replace;

    // Check if each node (or one of its ancestors) is already contained in the
    // array.
    while (--idx > -1) {
        node = ancestor = nodes[idx];

        // Temporarily remove the node under consideration
        nodes[idx] = null;
        replace = true;

        while (ancestor) {
            if (nodes.indexOf(ancestor) > -1) {
                replace = false;
                nodes.splice(idx, 1);
                break;
            }
            ancestor = getParent(ancestor);
        }

        // If the node has been found to be unique, re-insert it.
        if (replace) {
            nodes[idx] = node;
        }
    }

    return nodes;
}

function existsOne(test, elems) {
    return elems.some((elem) => {
        return isTag(elem) ? test(elem) || existsOne(test, getChildren(elem)) : false;
    });
}

function getSiblings(node) {
    const parent = getParent(node);
    return parent && getChildren(parent);
}

function hasAttrib(elem, name) {
    return getAttributeValue(elem, name) !== undefined;
}

function findOne(test, elems) {
    let elem = null;
    for (let i = 0, l = elems.length; i < l && !elem; i++) {
        const el = elems[i];
        if (test(el)) {
            elem = el;
        } else {
            const childs = getChildren(el);
            if (childs && childs.length > 0) {
                elem = findOne(test, childs);
            }
        }
    }

    return elem;
}

function findAll(test, nodes) {
    let result = [];

    for (let i = 0, j = nodes.length; i < j; i++) {
        if (!isTag(nodes[i])) continue;
        if (test(nodes[i])) result.push(nodes[i]);
        const childs = getChildren(nodes[i]);
        if (childs) result = result.concat(findAll(test, childs));
    }

    return result;
}

module.exports = {
    isTag,
    getAttributeValue,
    getName,
    getChildren,
    getParent,
    getText,
    removeSubsets,
    existsOne,
    getSiblings,
    hasAttrib,
    findOne,
    findAll
};
