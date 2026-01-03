import React, { useState } from 'react';
import { Search, KeyboardArrowUp, KeyboardArrowDown, ThumbUp, Add } from '@mui/icons-material';
import './LawTalkHub.css';

interface Reply {
  id: string;
  author: string;
  authorAvatar: string;
  content: string;
  likes: number;
}

interface Thread {
  id: string;
  author: string;
  authorAvatar: string;
  title: string;
  replies: Reply[];
}

const LawTalkHub: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('for-you');
  const [expandedThreads, setExpandedThreads] = useState<Set<string>>(new Set(['thread-1']));
  const [searchQuery, setSearchQuery] = useState('');

  // Dummy data
  const threads: Thread[] = [
    {
      id: 'thread-1',
      author: 'Raviraj',
      authorAvatar: '#',
      title: 'Best practices for intellectual property protection?',
      replies: [
        {
          id: 'reply-1',
          author: 'Jaishree B.',
          authorAvatar: '#',
          content: 'Looking for insights on the best ways to safeguard original content and digital assets. What steps should creators take early on, and what are common mistakes to avoid? Would love expert tips from lawyers experienced in IP rights.',
          likes: 12
        }
      ]
    },
    {
      id: 'thread-2',
      author: 'Raviraj',
      authorAvatar: '#',
      title: 'Best practices for intellectual property protection?',
      replies: [
        {
          id: 'reply-2',
          author: 'John Doe',
          authorAvatar: '#',
          content: 'Great question! I recommend starting with proper documentation and copyright registration for your creative works.',
          likes: 8
        },
        {
          id: 'reply-3',
          author: 'Sarah Smith',
          authorAvatar: '#',
          content: 'Don\'t forget about trademark protection for your brand identity. It\'s crucial for long-term business protection.',
          likes: 5
        }
      ]
    },
    {
      id: 'thread-3',
      author: 'Alex Johnson',
      authorAvatar: '#',
      title: 'What are the key differences between patents and trademarks?',
      replies: [
        {
          id: 'reply-4',
          author: 'Legal Expert',
          authorAvatar: '#',
          content: 'Patents protect inventions and processes, while trademarks protect brand names, logos, and slogans. Both serve different purposes in IP protection.',
          likes: 15
        }
      ]
    }
  ];

  const toggleThread = (threadId: string) => {
    setExpandedThreads(prev => {
      const newSet = new Set(prev);
      if (newSet.has(threadId)) {
        newSet.delete(threadId);
      } else {
        newSet.add(threadId);
      }
      return newSet;
    });
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <div className="lawtalk-hub">
      <div className="lawtalk-hub-container">
        {/* Title Section */}
        <div className="lawtalk-title-section">
          <h1 className="lawtalk-title">LawTalk Hub</h1>
          <p className="lawtalk-subtitle">Explore real discussions and get clarity from people who've been there.</p>
        </div>

        {/* Search Bar */}
        <div className="lawtalk-search-container">
          <div className="lawtalk-search-bar">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search threads, topics, or people..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="lawtalk-tabs">
          <button
            className={`lawtalk-tab ${selectedTab === 'latest' ? 'active' : ''}`}
            onClick={() => setSelectedTab('latest')}
          >
            Latest
          </button>
          <button
            className={`lawtalk-tab ${selectedTab === 'for-you' ? 'active' : ''}`}
            onClick={() => setSelectedTab('for-you')}
          >
            For you
          </button>
          <button
            className={`lawtalk-tab ${selectedTab === 'trending' ? 'active' : ''}`}
            onClick={() => setSelectedTab('trending')}
          >
            Trending
          </button>
          <button
            className={`lawtalk-tab ${selectedTab === 'topics' ? 'active' : ''}`}
            onClick={() => setSelectedTab('topics')}
          >
            Topics
          </button>
        </div>

        {/* Threads List */}
        <div className="lawtalk-threads">
          {threads.map((thread) => {
            const isExpanded = expandedThreads.has(thread.id);
            return (
              <div key={thread.id} className="lawtalk-thread-card">
                <div className="thread-header">
                  <div className="thread-author-info">
                    <div className="thread-avatar">{getInitials(thread.author)}</div>
                    <span className="thread-author-name">{thread.author}</span>
                  </div>
                  <button
                    className="thread-expand-button"
                    onClick={() => toggleThread(thread.id)}
                  >
                    {isExpanded ? (
                      <KeyboardArrowUp className="expand-icon" />
                    ) : (
                      <KeyboardArrowDown className="expand-icon" />
                    )}
                  </button>
                </div>

                <h3 className="thread-title">{thread.title}</h3>

                {isExpanded && (
                  <div className="thread-replies">
                    {thread.replies.map((reply) => (
                      <div key={reply.id} className="thread-reply">
                        <div className="reply-header">
                          <div className="reply-author-info">
                            <div className="reply-avatar">{getInitials(reply.author)}</div>
                            <span className="reply-author-name">{reply.author}</span>
                          </div>
                        </div>
                        <p className="reply-content">{reply.content}</p>
                        <div className="reply-actions">
                          <button className="reply-like-button">
                            <ThumbUp className="like-icon" />
                          </button>
                          <button className="reply-button">Reply</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Start a Thought Button */}
        <button className="start-thought-button">
          <Add className="plus-icon" />
          <span>start a thought</span>
        </button>
      </div>
    </div>
  );
};

export default LawTalkHub;

