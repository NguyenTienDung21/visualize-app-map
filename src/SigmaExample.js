import {v4 as uuid} from "uuid"
// import Sigma from "sigma"
// import Graph from "graphology"
import data from './data/data.json'
import { convertToSigma } from "./utils"
import { Sigma, RelativeSize,RandomizeNodePositions, EdgeShapes, ForceAtlas2, NOverlap } from "react-sigma"
import Dagre from "react-sigma/lib/Dagre"



const converted = convertToSigma(data)
const SigmaExample = () => {
    // console.log(converted)
    
    return <Sigma
        graph={converted}
        renderer="webgl"
    >
        <RelativeSize initialSize={15}/>
        <ForceAtlas2 worker barnesHutOptimize barnesHutTheta={0.6} iterationsPerRender={10} linLogMode timeout={3000}/>
        <EdgeShapes default="arrow"/>
        <RandomizeNodePositions />
        <NOverlap gridSize={10} maxIterations={100}/>
        <Dagre directed={true} />
        {/* <Dagre directed={true}/> */}
    </Sigma>
}
export default SigmaExample;
