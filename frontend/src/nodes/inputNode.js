import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { Label, Input, Select } from '../components/FormElements';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  const handles = [
    { type: 'source', position: Position.Right, id: `${id}-value` }
  ];

  return (
    <BaseNode id={id} label="Input" handles={handles}>
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
          <Select value={inputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </Select>
        </Label>
      </div>
    </BaseNode>
  );
}
