import { useState } from 'react';

interface FeedbackFormProps {
  onSubmit: (data: { name: string; email: string; message: string }) => void;
}

function FeedbackForm({ onSubmit }: FeedbackFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError('Semua kolom harus diisi.');
      return;
    }

    if (!email.includes('@')) {
      setError('Email tidak valid.');
      return;
    }

    onSubmit({ name, email, message });
    setName('');
    setEmail('');
    setMessage('');
    setError(null);
  };

  return (
    <div className="max-w-lg mx-auto p-4 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Terimakasih atas masukan dan sarannya</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nama sesuai KTP
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
            placeholder="Nama Anda"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
            placeholder="geprek@seblak.com"
            required
          />
          <p className="text-sm text-gray-500 mt-1">*Jika ingin bertanya, sertakan Email asli agar kami bisa menjawab.</p>
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Pesan
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
            placeholder="Kasih tau kami apa yang ingin kamu sampaikan"
            required
          />
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Kirim Pesan
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;
