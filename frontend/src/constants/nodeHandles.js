import { Position } from 'reactflow';
import { HANDLE_TYPES } from './nodeConstants';

export const getApiNodeHandles = (id) => [
  { type: HANDLE_TYPES.TARGET, position: Position.Left, id: `${id}-payload` },
  { type: HANDLE_TYPES.SOURCE, position: Position.Right, id: `${id}-response` },
];

export const getCombineNodeHandles = (id) => [
  { type: HANDLE_TYPES.TARGET, position: Position.Left, id: `${id}-input1`, style: { top: '33%' } },
  { type: HANDLE_TYPES.TARGET, position: Position.Left, id: `${id}-input2`, style: { top: '66%' } },
  { type: HANDLE_TYPES.SOURCE, position: Position.Right, id: `${id}-combined` },
];

export const getDisplayNodeHandles = (id) => [
  { type: HANDLE_TYPES.TARGET, position: Position.Left, id: `${id}-input` },
];

export const getFilterNodeHandles = (id) => [
  { type: HANDLE_TYPES.TARGET, position: Position.Left, id: `${id}-input` },
  { type: HANDLE_TYPES.SOURCE, position: Position.Right, id: `${id}-filtered` },
];

export const getInputNodeHandles = (id) => [
  { type: HANDLE_TYPES.SOURCE, position: Position.Right, id: `${id}-value` },
];

export const getLLMNodeHandles = (id) => [
  {
    type: HANDLE_TYPES.TARGET,
    position: Position.Left,
    id: `${id}-system`,
    style: { top: `${100 / 3}%` },
  },
  {
    type: HANDLE_TYPES.TARGET,
    position: Position.Left,
    id: `${id}-prompt`,
    style: { top: `${200 / 3}%` },
  },
  { type: HANDLE_TYPES.SOURCE, position: Position.Right, id: `${id}-response` },
];

export const getOutputNodeHandles = (id) => [
  { type: HANDLE_TYPES.TARGET, position: Position.Left, id: `${id}-value` },
];

export const getTextNodeHandles = (id) => [
  { type: HANDLE_TYPES.SOURCE, position: Position.Right, id: `${id}-output` },
];

export const getTimerNodeHandles = (id) => [
  { type: HANDLE_TYPES.SOURCE, position: Position.Right, id: `${id}-tick` },
];

export const extractVariables = (text) => {
  const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
  const matches = new Set();
  let match;
  while ((match = regex.exec(text)) !== null) {
    matches.add(match[1]);
  }
  return Array.from(matches);
};

export const getDynamicTargetHandles = (id, variables) => {
  return variables.map((variable, index) => ({
    type: HANDLE_TYPES.TARGET,
    position: Position.Left,
    id: `${id}-var-${variable}`,
    style: { top: `${((index + 1) * 100) / (variables.length + 1)}%` },
  }));
};
