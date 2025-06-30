import { AudioUploader } from './components/AudioUploadForm';
import { TranscriptionList } from './components/TranscriptionList';

export default function Dashboard() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-80 border-r p-4">
        <TranscriptionList />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <AudioUploader />
      </div>
    </div>
  );
}
