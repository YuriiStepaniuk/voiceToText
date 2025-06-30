'use client';

import { useState } from 'react';

export function AudioUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append('audio', file);

      const res = await fetch('http://localhost:3001/transcriptions', {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });

      if (!res.ok) throw new Error(await res.text());
      alert('Upload successful!');
      setFile(null);
    } catch (error) {
      alert(`Upload failed:`);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Upload Audio</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <input
            type="file"
            accept="audio/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="hidden"
            id="audio-upload"
            disabled={isUploading}
          />
          <label
            htmlFor="audio-upload"
            className={`cursor-pointer block ${isUploading ? 'opacity-50' : ''}`}
          >
            {file ? (
              <p className="font-medium">{file.name}</p>
            ) : (
              <>
                <p>Select audio file</p>
                <p className="text-sm text-gray-500 mt-2">
                  MP3, WAV, OGG (max 25MB)
                </p>
              </>
            )}
          </label>
        </div>

        <button
          type="submit"
          disabled={!file || isUploading}
          className="w-full bg-blue-600 text-white py-2 rounded disabled:bg-gray-400"
        >
          {isUploading ? 'Processing...' : 'Convert to Text'}
        </button>
      </form>
    </div>
  );
}
