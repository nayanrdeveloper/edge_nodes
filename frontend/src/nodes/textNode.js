import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { Label, Input } from '../components/FormElements';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const handles = [
    { type: 'source', position: Position.Right, id: `${id}-output` }
  ];

  return (
    <BaseNode id={id} label="Text" handles={handles}>
      <div>
        <Label>
          Text:
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
