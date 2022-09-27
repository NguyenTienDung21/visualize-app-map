import { LINE_COLOR, LINE_WIDTH, NODE_PAD, NODE_THICKNESS, ORIENTATION, SANKEY_TYPE } from "./constant"

export const processNode = (node, idLookup, index) => {
    const { label, id } = node;
    idLookup[id] = index;
    return {name: label}
} 

export const processEdge = (edge, idLookup) => {
    const {source, target, count} = edge
    return {source: idLookup[source], target: idLookup[target], value: count}
}

export const convertNode = (nodes, idLookup) => {
    return nodes.map((node, index) => processNode(node,idLookup, index))
}

export const convertEdge = (edges, idLookup) => edges.map((edge) => processEdge(edge, idLookup))

export const convertPathJSON = (jsonObj, setData) => {
    const lookup = new Object()
    const {nodes, edges} = jsonObj
    const newNode = convertNode(nodes,lookup)

    const newEdge = convertEdge(edges, lookup).filter(item=> item.source !== item.target)

    setData({nodes:newNode, links: newEdge})
    }

export const prepareData =(data) =>{
    const lookup = new Object();
    const {nodes, edges} = data
    const color = nodes.map(item => "blue")
    const label = nodes.map((item, index) => processNode(item, lookup, index))
    const edgesFilterSourceEqualTarget = edges.filter(item => item.source != item.target)
    const Edges =edgesFilterSourceEqualTarget
    
    
    const value = edges.map(item => 1)
    return {
        type: SANKEY_TYPE,
        orientation: ORIENTATION,
        node: {
          pad: NODE_PAD,
          thickness: NODE_THICKNESS,
          line: {
            color: LINE_COLOR,
            width: LINE_WIDTH
          },
         label: label,
         color: color
            },
      
        link: {
          value:  value
        }
    }
}