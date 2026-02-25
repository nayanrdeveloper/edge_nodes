import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { Label, Input } from '../components/FormElements';
import { NODE_LABELS, DEFAULT_VALUES, FIELD_LABELS } from '../constants/nodeConstants';
import { getTextNodeHandles } from '../constants/nodeHandles';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || DEFAULT_VALUES.TEXT_NODE);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const handles = getTextNodeHandles(id);

  return (
    <BaseNode id={id} label={NODE_LABELS.TEXT} handles={handles}>
      <div>
        <Label>
          {FIELD_LABELS.TEXT}
          <Input
            type="text"
            value={currText}
            onChange={handleTextChange}
          />
        </Label>
      </div>
    </BaseNode>
  );
}
