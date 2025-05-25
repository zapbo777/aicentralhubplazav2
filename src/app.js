import React, { useState } from 'react';

function App() {
  const [selectedProvider, setSelectedProvider] = useState('');
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const aiProviders = [
    'OpenAI GPT-4',
    'Anthropic Claude',
    'Google Gemini',
    'Microsoft Copilot',
    'Mistral AI'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setResponse(`Response from ${selectedProvider}: This is a demo response to "${prompt}"`);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', color: 'white' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
        🤖 AI Central Hub Plaza
      </h1>
      
      <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
        <h2>AI Provider Selection</h2>
        <select 
          value={selectedProvider} 
          onChange={(e) => setSelectedProvider(e.target.value)}
          style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px', border: 'none' }}
        >
          <option value="">Select AI Provider</option>
          {aiProviders.map(provider => (
            <option key={provider} value={provider}>{provider}</option>
          ))}
        </select>
      </div>

      <form onSubmit={handleSubmit} style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
        <h2>Enter Your Prompt</h2>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your AI prompt here..."
          style={{ width: '100%', height: '100px', padding: '10px', borderRadius: '5px', border: 'none', resize: 'vertical' }}
        />
        <button 
          type="submit"
          disabled={!selectedProvider || !prompt}
          style={{ 
            backgroundColor: '#4CAF50', 
            color: 'white', 
            padding: '10px 20px', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            marginTop: '10px',
            opacity: !selectedProvider || !prompt ? 0.5 : 1
          }}
        >
          Generate Response
        </button>
      </form>

      {response && (
        <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '10px' }}>
          <h2>AI Response</h2>
          <p style={{ backgroundColor: 'rgba(0,0,0,0.2)', padding: '15px', borderRadius: '5px' }}>
            {response}
          </p>
        </div>
      )}

      <div style={{ textAlign: 'center', marginTop: '30px', opacity: 0.7 }}>
        <p>AI Central Hub Plaza v2.0 - Multiple AI Provider Integration</p>
      </div>
    </div>
  );
}

export default App;
