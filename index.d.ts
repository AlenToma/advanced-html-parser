
import { Document, Node, Options } from "./types"

export declare namespace IDomParser {
    const parse: (html: string, options?: Options) => Document;
    const serializeToString: (node: Node, attributeSorter?: any) => string;
}
export default IDomParser;


