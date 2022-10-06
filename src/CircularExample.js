import React from 'react';
import { Group } from '@vx/group';
import { Text } from '@vx/text';
import { scaleOrdinal, schemeCategory10, scaleSequential, interpolateCool } from 'd3-scale';
import { format as d3format } from 'd3-format';
// import { sankeyJustify, sankeyLeft, sankeyRight } from 'd3-sankey-circular';
import { extent } from 'd3-array';

import Sankey from './CircularSankey';

const color = scaleSequential(interpolateCool);
const format = d3format(",d");

export default class CircularExample extends React.Component {
  render() {
    const {
      data,
      width,
      height,
      margin = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 100
      }
    } = this.props;

    if (width < 10) return null;

    return data && (
      <svg width={width + margin.left + margin.right} height={height}>
        <Sankey
          top={margin.top}
          left={margin.left}
          data={data}
          size={[width, height]}
          nodeWidth={5}
          nodePadding={250}
          nodePaddingRatio={0.6}
          // nodeId={d => d.name}

          iterations={32}

        >
          {({ data }) => (
            <Group>
              {
                // Hack to set color domain after <Sankey> has set depth
                color.domain(extent(data.nodes, d => d.depth))
              }
              <Group strokeOpacity={.435}>
                {data.links.map((link, i) => (
                  <path
                    key={`link-${i}`}
                    d={link.path}
                    stroke={'#6032D5'}
                    strokeWidth={Math.max(1, link.width)}
                    opacity={1}
                    fill="none"
                  />
                ))}
              </Group>

              {data.nodes.map((node, i) => (
                
                <Group top={node.y0} left={node.x0} key={`node-${i}`}>
                  <Text
                    color="white"
                    x={18}
                    y={((node.y1 - node.y0) / 2)}
                    verticalAnchor="middle"
                    fill="white"
                    style={{
                      font: '10px sans-serif',
                      color: 'white',
                      // stroke: 'white',
                      // fill: 'white',
                      // zIndex: -1
                    }}
                  >
                    {node.name}
                  </Text>
                  <rect
                    id={`rect-${i}`}
                    width={node.x1 - node.x0}
                    height={node.y1 - node.y0}
                    fill={'#6032D5'}
                    opacity={1}
                    stroke="none"
                    strokeWidth={0}
                  />


                </Group>
              ))}

              
            </Group>
          )}
        </Sankey>
      </svg>
    );
  }
}
