import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { Label, Input, Select } from '../components/FormElements';
import { NODE_LABELS, DEFAULT_VALUES, INPUT_TYPES, FIELD_LABELS, INPUT_TYPE_OPTIONS } from '../constants/nodeConstants';
import { getInputNodeHandles } from '../constants/nodeHandles';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', DEFAULT_VALUES.INPUT_NAME_PREFIX));
  const [inputType, setInputType] = useState(data.inputType || INPUT_TYPES.TEXT);

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  const handles = getInputNodeHandles(id);

  return (
    <BaseNode id={id} label={NODE_LABELS.INPUT} handles={handles}>
      <div>
        <Label>
          {FIELD_LABELS.NAME}
          <Input
            type="text"
            value={currName}
            onChange={handleNameChange}
          />
        </Label>
        <Label>
          {FIELD_LABELS.TYPE}
          <Select value={inputType} onChange={handleTypeChange}>
            {INPUT_TYPE_OPTIONS.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </Select>
        </Label>
      </div>
    </BaseNode>
  );
}
