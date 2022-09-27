export default {
    nodes: [
      { name: 'startA' },
      { name: 'startB' },
      { name: 'process1' },
      { name: 'process2' },
      { name: 'process3' },
      { name: 'process4' },
      { name: 'process5' },
      { name: 'process6' },
      { name: 'process7' },
      { name: 'process8' },
      { name: 'process9' },
      { name: 'process10' },
      { name: 'process11' },
      { name: 'process12' },
      { name: 'process13' },
      { name: 'process14' },
      { name: 'process15' },
      { name: 'process16' },
      { name: 'finishA' },
      { name: 'finishB' },
      { name: 'finishC' }
    ],
    links: [
      { source: 'startA', target: 'process1', value: 15 },
      { source: 'startA', target: 'process8', value: 20 },
      { source: 'startA', target: 'process5', value: 30 },
      { source: 'startA', target: 'process6', value: 20 },
      { source: 'startB', target: 'process1', value: 15 },
      { source: 'startB', target: 'process5', value: 15 },
      { source: 'process1', target: 'process4', value: 20 },
      { source: 'process4', target: 'process1', value: 10 },
      { source: 'process2', target: 'process7', value: 30 },
      { source: 'process1', target: 'process3', value: 10 },
      { source: 'process5', target: 'process3', value: 20 },
      { source: 'process6', target: 'startA', value: 5 },
      { source: 'process4', target: 'process2', value: 5 },
      { source: 'process6', target: 'process8', value: 15 },
      { source: 'process4', target: 'startB', value: 5 },
      { source: 'process4', target: 'process7', value: 10 },
      { source: 'process3', target: 'process2', value: 25 },
      { source: 'process3', target: 'startB', value: 5 },
      { source: 'process15', target: 'process13', value: 10 },
      { source: 'process13', target: 'finishC', value: 10 },
      { source: 'process7', target: 'startB', value: 20 },
      { source: 'process8', target: 'process1', value: 10 },
      { source: 'process16', target: 'process9', value: 10 },
      { source: 'process8', target: 'process11', value: 35 },
      { source: 'process11', target: 'process10', value: 25 },
      { source: 'process4', target: 'process12', value: 10 },
      { source: 'process12', target: 'process11', value: 5 },
  
      { source: 'process7', target: 'process15', value: 20 },
      { source: 'process15', target: 'process14', value: 10 },
      { source: 'process10', target: 'process9', value: 10 },
      { source: 'process10', target: 'process16', value: 20 },
      { source: 'process14', target: 'finishB', value: 10 },
      { source: 'process9', target: 'finishA', value: 10 },
      { source: 'process16', target: 'process8', value: 10 },
      { source: 'process9', target: 'finishB', value: 10 },
      { source: 'process11', target: 'process14', value: 25 }
    ]
  };
  