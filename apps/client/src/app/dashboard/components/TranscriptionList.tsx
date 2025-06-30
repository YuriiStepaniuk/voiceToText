const mockTranscriptions = [
  {
    id: 'trans_1',
    filename: 'meeting_with_client.mp3',
    createdAt: '2023-11-15T09:30:00Z',
    status: 'completed',
    text: 'Discussed project requirements and timeline...',
  },
  {
    id: 'trans_2',
    filename: 'interview_tech_lead.m4a',
    createdAt: '2023-11-16T14:15:00Z',
    status: 'processing',
  },
  {
    id: 'trans_3',
    filename: 'doctor_appointment_note.wav',
    createdAt: '2023-11-17T11:45:00Z',
    status: 'failed',
  },
  {
    id: 'trans_4',
    filename: 'lecture_ai_ethics.mp3',
    createdAt: '2023-11-18T16:20:00Z',
    status: 'completed',
    text: 'The ethical implications of large language models...',
  },
  {
    id: 'trans_5',
    filename: 'podcast_clip_tech_news.ogg',
    createdAt: '2023-11-19T08:05:00Z',
    status: 'completed',
  },
] as const;

export function TranscriptionList() {
  return (
    <div className="space-y-2">
      {mockTranscriptions.map((item) => (
        <div
          key={item.id}
          className="p-3 hover:bg-gray-100 rounded-lg cursor-pointer transition"
        >
          <div className="flex justify-between items-start">
            <h3 className="font-medium truncate">{item.filename}</h3>
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                item.status === 'completed'
                  ? 'bg-green-100 text-green-800'
                  : item.status === 'failed'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-blue-100 text-blue-800'
              }`}
            >
              {item.status}
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {new Date(item.createdAt).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}
