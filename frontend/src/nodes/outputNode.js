import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { Label, Input, Select } from '../components/FormElements';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-value` }
  ];

  return (
    <BaseNode id={id} label="Output" handles={handles}>
      <div>
        <Label>
          Name:
          <Input
            type="text"
            value={currName}
            onChange={handleNameChange}
          />
        </Label>
        <Label>
          Type:
          <Select value={outputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </Select>
        </Label>
      </div>
    </BaseNode>
  );
}
