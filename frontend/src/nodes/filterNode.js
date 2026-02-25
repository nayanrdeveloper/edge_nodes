import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { Label, Input } from '../components/FormElements';
import { NODE_LABELS, DEFAULT_VALUES, FIELD_LABELS } from '../constants/nodeConstants';
import { getFilterNodeHandles } from '../constants/nodeHandles';

export const FilterNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || DEFAULT_VALUES.FILTER_CONDITION);

  const handles = getFilterNodeHandles(id);

  return (
    <BaseNode id={id} label={NODE_LABELS.FILTER} handles={handles}>
      <div>
        <Label>
          {FIELD_LABELS.CONDITION}
          <Input type="text" value={condition} onChange={(e) => setCondition(e.target.value)} />
        </Label>
      </div>
    </BaseNode>
  );
};
