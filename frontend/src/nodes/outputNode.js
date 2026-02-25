import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { Label, Input, Select } from '../components/FormElements';
import {
  NODE_LABELS,
  DEFAULT_VALUES,
  OUTPUT_TYPES,
  FIELD_LABELS,
  OUTPUT_TYPE_OPTIONS,
} from '../constants/nodeConstants';
import { getOutputNodeHandles } from '../constants/nodeHandles';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace('customOutput-', DEFAULT_VALUES.OUTPUT_NAME_PREFIX)
  );
  const [outputType, setOutputType] = useState(data.outputType || OUTPUT_TYPES.TEXT);

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  const handles = getOutputNodeHandles(id);

  return (
    <BaseNode id={id} label={NODE_LABELS.OUTPUT} handles={handles}>
      <div>
        <Label>
          {FIELD_LABELS.NAME}
          <Input type="text" value={currName} onChange={handleNameChange} />
        </Label>
        <Label>
          {FIELD_LABELS.TYPE}
          <Select value={outputType} onChange={handleTypeChange}>
            {OUTPUT_TYPE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </Select>
        </Label>
      </div>
    </BaseNode>
  );
};
