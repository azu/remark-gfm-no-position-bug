import unified from "unified";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";

const remark = unified().use(remarkParse).use(remarkGfm);
const ast = remark.parse(`http&#x3A;//a`);
console.log(JSON.stringify(ast, null, 4));
