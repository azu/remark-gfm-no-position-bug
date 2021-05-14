import unified from "unified";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";

const remark = unified().use(remarkParse).use(remarkGfm);
const ast = remark.parse(`This is https://example.com`);
console.log(JSON.stringify(ast, null, 4));
