import { useState, useEffect, useMemo } from 'react';
import { useUpdateNodeInternals } from 'reactflow';
import { BaseNode } from './BaseNode';
import { Label, AutoResizeTextarea } from '../components/FormElements';
import {
  NODE_LABELS,
  DEFAULT_VALUES,
  FIELD_LABELS,
  TEXT_NODE_STYLE,
} from '../constants/nodeConstants';
import {
  getTextNodeHandles,
  extractVariables,
  getDynamicTargetHandles,
} from '../constants/nodeHandles';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || DEFAULT_VALUES.TEXT_NODE);
  const updateNodeInternals = useUpdateNodeInternals();

  const variables = useMemo(() => extractVariables(currText), [currText]);

  useEffect(() => {
    updateNodeInternals(id);
  }, [variables.length, id, updateNodeInternals]);

  const handleTextChange = (e) => setCurrText(e.target.value);

  const dynamicHandles = getDynamicTargetHandles(id, variables);
  const handles = [...dynamicHandles, ...getTextNodeHandles(id)];

  return (
    <BaseNode id={id} label={NODE_LABELS.TEXT} handles={handles} style={TEXT_NODE_STYLE}>
      <div>
        <Label>
          {FIELD_LABELS.TEXT}
          <AutoResizeTextarea
            value={currText}
            onChange={handleTextChange}
            placeholder="Type something..."
          />
        </Label>
      </div>
    </BaseNode>
  );
};
