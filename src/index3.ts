import unified from "unified";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";

const remark = unified().use(remarkParse).use(remarkGfm);
const ast = remark.parse(`- > a block quote in a list
    with https://example.com a URL`);
console.log(JSON.stringify(ast, null, 4));
