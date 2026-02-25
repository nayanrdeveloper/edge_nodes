import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="flex flex-1 relative">
        <PipelineUI />
        <div className="absolute top-5 left-5 z-10">
          <PipelineToolbar />
        </div>
      </div>
      <div className="absolute top-5 right-5 z-10">
        <SubmitButton />
      </div>
    </div>
  );
}

export default App;
