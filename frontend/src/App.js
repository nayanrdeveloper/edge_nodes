import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      <div style={{ display: 'flex', flex: 1, position: 'relative' }}>
        <PipelineUI />
        <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 10 }}>
          <PipelineToolbar />
        </div>
      </div>
      <div style={{ position: 'absolute', top: 20, right: 20, zIndex: 10 }}>
        <SubmitButton />
      </div>
    </div>
  );
}

export default App;
