/**
 * 
 * @description DOM query tool.
 * @export
 * @param {node} node The node element returned.
 * @param {node} [selector=document] The current selector used.
 * @returns {Array} Returns an array of nodes.
 * 
 */
export default function query(node, selector=document) {
    return Array.from(selector.querySelectorAll(node));
}
