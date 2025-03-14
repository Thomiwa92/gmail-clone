import React, { useState } from 'react';
import {
  Menu,
  Plus,
  Inbox,
  Star,
  Clock,
  Send,
  File,
  Trash2,
  Search,
  Settings,
  HelpCircle,
  Mail,
  ChevronDown,
} from 'lucide-react';

const emails = [
  {
    id: 1,
    from: 'GitHub',
    subject: 'Your daily GitHub digest',
    preview: 'Check out what happened in your repositories today...',
    time: '10:30 AM',
    isStarred: false,
    isRead: false,
  },
  {
    id: 2,
    from: 'LinkedIn',
    subject: 'New job opportunities for you',
    preview: 'Based on your profile, we found these jobs...',
    time: '9:15 AM',
    isStarred: true,
    isRead: true,
  },
  {
    id: 3,
    from: 'Stack Overflow',
    subject: 'Weekly Newsletter',
    preview: 'Top questions and answers this week...',
    time: 'Yesterday',
    isStarred: false,
    isRead: true,
  },
];

function App() {
  const [selectedEmail, setSelectedEmail] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="h-16 px-4 flex items-center justify-between border-b">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Menu size={20} />
          </button>
          <img
            src="https://www.google.com/gmail/about/static-2.0/images/logo-gmail.png?fingerprint=c2eaf4aae389c3f885e97081bb197b97"
            alt="Gmail"
            className="h-8"
          />
        </div>
        <div className="flex-1 max-w-2xl mx-4">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <Search size={20} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search mail"
              className="ml-2 bg-transparent outline-none flex-1"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <HelpCircle size={20} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Settings size={20} />
          </button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 p-4 space-y-2">
          <button className="flex items-center gap-4 px-6 py-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow bg-blue-50">
            <Plus size={20} />
            <span>Compose</span>
          </button>

          <div className="mt-4 space-y-1">
            <button className="flex items-center gap-4 px-6 py-2 rounded-r-full w-full hover:bg-gray-100 bg-blue-100">
              <Inbox size={20} />
              <span>Inbox</span>
            </button>
            <button className="flex items-center gap-4 px-6 py-2 rounded-r-full w-full hover:bg-gray-100">
              <Star size={20} />
              <span>Starred</span>
            </button>
            <button className="flex items-center gap-4 px-6 py-2 rounded-r-full w-full hover:bg-gray-100">
              <Clock size={20} />
              <span>Snoozed</span>
            </button>
            <button className="flex items-center gap-4 px-6 py-2 rounded-r-full w-full hover:bg-gray-100">
              <Send size={20} />
              <span>Sent</span>
            </button>
            <button className="flex items-center gap-4 px-6 py-2 rounded-r-full w-full hover:bg-gray-100">
              <File size={20} />
              <span>Drafts</span>
            </button>
            <button className="flex items-center gap-4 px-6 py-2 rounded-r-full w-full hover:bg-gray-100">
              <Trash2 size={20} />
              <span>Trash</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 border-l">
          {/* Toolbar */}
          <div className="h-12 border-b flex items-center px-4 justify-between">
            <div className="flex items-center gap-4">
              <input type="checkbox" className="rounded" />
              <ChevronDown size={20} className="text-gray-500" />
              <button className="p-2 hover:bg-gray-100 rounded">
                <Mail size={20} className="text-gray-500" />
              </button>
            </div>
          </div>

          {/* Email List */}
          <div className="divide-y">
            {emails.map((email) => (
              <div
                key={email.id}
                className={`flex items-center px-4 py-2 hover:shadow-md cursor-pointer ${
                  selectedEmail === email.id ? 'bg-blue-50' : ''
                } ${!email.isRead ? 'font-semibold' : ''}`}
                onClick={() => setSelectedEmail(email.id)}
              >
                <input type="checkbox" className="mr-4 rounded" />
                <Star
                  size={20}
                  className={email.isStarred ? 'text-yellow-400' : 'text-gray-400'}
                />
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="w-32 truncate">{email.from}</span>
                    <span className="text-sm text-gray-500">{email.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{email.subject}</span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">
                    {email.preview}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

export default App