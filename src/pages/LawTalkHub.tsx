import React, { useState } from 'react';
import { Search, Add, KeyboardArrowDown, KeyboardArrowUp, ThumbUp, Reply as ReplyIcon } from '@mui/icons-material';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import Footer from '../components/Footer';
import './LawTalkHub.css';

interface Reply {
  id: number;
  author: string;
  initials: string;
  content: string;
  timestamp: string;
  likes: number;
}

interface Thread {
  id: number;
  author: string;
  initials: string;
  title: string;
  content: string;
  timestamp: string;
  replies: Reply[];
  likes: number;
  category: string;
}

const LawTalkHub: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('for-you');
  const [expandedThreads, setExpandedThreads] = useState<number[]>([]);
  const [showNewThreadModal, setShowNewThreadModal] = useState(false);
  const [replyingToThread, setReplyingToThread] = useState<number | null>(null);
  
  const [newThread, setNewThread] = useState({
    title: '',
    category: 'General'
  });
  
  const [threadError, setThreadError] = useState('');
  const [newReply, setNewReply] = useState('');
  
  const [threads, setThreads] = useState<Thread[]>([
    {
      id: 1,
      author: 'Raviraj',
      initials: 'R',
      title: 'Best practices for intellectual property protection?',
      content: '',
      timestamp: '2 hours ago',
      likes: 12,
      category: 'IP Law',
      replies: [
        {
          id: 1,
          author: 'Jaishree B.',
          initials: 'JB',
          content: 'Looking for insights on the best ways to safeguard original content and digital assets. What steps should creators take early on, and what are common mistakes to avoid? Would love expert tips from lawyers experienced in IP rights.',
          timestamp: '1 hour ago',
          likes: 8
        }
      ]
    },
    {
      id: 2,
      author: 'Raviraj',
      initials: 'R',
      title: 'Best practices for intellectual property protection?',
      content: '',
      timestamp: '5 hours ago',
      likes: 5,
      category: 'IP Law',
      replies: []
    },
    {
      id: 3,
      author: 'Alex Johnson',
      initials: 'AJ',
      title: 'What are the key differences between patents and trademarks?',
      content: '',
      timestamp: '1 day ago',
      likes: 18,
      category: 'IP Law',
      replies: []
    }
  ]);

  const toggleThread = (threadId: number) => {
    setExpandedThreads(prev =>
      prev.includes(threadId)
        ? prev.filter(id => id !== threadId)
        : [...prev, threadId]
    );
  };

  const handleLikeThread = (threadId: number) => {
    setThreads(prev =>
      prev.map(thread =>
        thread.id === threadId
          ? { ...thread, likes: thread.likes + 1 }
          : thread
      )
    );
  };

  const handleLikeReply = (threadId: number, replyId: number) => {
    setThreads(prev =>
      prev.map(thread =>
        thread.id === threadId
          ? {
              ...thread,
              replies: thread.replies.map(reply =>
                reply.id === replyId
                  ? { ...reply, likes: reply.likes + 1 }
                  : reply
              )
            }
          : thread
      )
    );
  };

  const handleCreateThread = () => {
    // Validation
    if (!newThread.title.trim()) {
      setThreadError('Please enter a title for your thread');
      return;
    }

    if (newThread.title.trim().length < 10) {
      setThreadError('Title must be at least 10 characters long');
      return;
    }

    if (!newThread.category) {
      setThreadError('Please select a category for your thread');
      return;
    }

    const thread: Thread = {
      id: threads.length + 1,
      author: 'You',
      initials: 'Y',
      title: newThread.title,
      content: '', // No content field
      timestamp: 'Just now',
      likes: 0,
      category: newThread.category,
      replies: []
    };
    
    setThreads([thread, ...threads]);
    setNewThread({ title: '', category: 'General' });
    setThreadError('');
    setShowNewThreadModal(false);
  };

  const handleAddReply = (threadId: number) => {
    if (newReply.trim()) {
      const reply: Reply = {
        id: Date.now(),
        author: 'You',
        initials: 'Y',
        content: newReply,
        timestamp: 'Just now',
        likes: 0
      };
      
      setThreads(prev =>
        prev.map(thread =>
          thread.id === threadId
            ? { ...thread, replies: [...thread.replies, reply] }
            : thread
        )
      );
      
      setNewReply('');
      setReplyingToThread(null);
    }
  };

  const filteredThreads = threads.filter(thread =>
    thread.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    thread.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    thread.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="lawtalk-hub-page" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div className="lawtalk-container">
        {/* Header */}
        <div className="lawtalk-header">
          <h1 className="lawtalk-title">LawTalk Hub</h1>
          <p className="lawtalk-subtitle">
            Explore real discussions and get clarity from people who've been there.
          </p>
        </div>

        {/* Search Bar */}
        <div className="search-bar-wrapper">
          <Search className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search threads, topics, or people..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          <button
            className={`filter-tab ${activeTab === 'latest' ? 'active' : ''}`}
            onClick={() => setActiveTab('latest')}
          >
            Latest
          </button>
          <button
            className={`filter-tab ${activeTab === 'for-you' ? 'active' : ''}`}
            onClick={() => setActiveTab('for-you')}
          >
            For you
          </button>
          <button
            className={`filter-tab ${activeTab === 'trending' ? 'active' : ''}`}
            onClick={() => setActiveTab('trending')}
          >
            Trending
          </button>
          <button
            className={`filter-tab ${activeTab === 'topics' ? 'active' : ''}`}
            onClick={() => setActiveTab('topics')}
          >
            Topics
          </button>
        </div>

        {/* Threads List */}
        <div className="threads-list">
          {filteredThreads.map((thread) => (
            <div key={thread.id} className="thread-card">
              <div className="thread-header">
                <div className="thread-author-info">
                  <div className="author-avatar">{thread.initials}</div>
                  <div className="author-details">
                    <span className="author-name-lawtalk">{thread.author}</span>
                    <span className="thread-category-badge">{thread.category}</span>
                  </div>
                </div>
                <button
                  className="expand-button"
                  onClick={() => toggleThread(thread.id)}
                >
                  {expandedThreads.includes(thread.id) ? (
                    <KeyboardArrowUp />
                  ) : (
                    <KeyboardArrowDown />
                  )}
                </button>
              </div>

              <h3 className="thread-title">{thread.title}</h3>

              {expandedThreads.includes(thread.id) && (
                <>
                  {thread.content && (
                    <p className="thread-content">{thread.content}</p>
                  )}

                  {/* Replies Section */}
                  {thread.replies.length > 0 && (
                    <div className="replies-section">
                      {thread.replies.map((reply) => (
                        <div key={reply.id} className="reply-card">
                          <div className="reply-header">
                            <div className="author-avatar small">{reply.initials}</div>
                            <span className="reply-author">{reply.author}</span>
                            <span className="reply-timestamp">{reply.timestamp}</span>
                          </div>
                          <p className="reply-content">{reply.content}</p>
                          <button
                            className="like-button-small"
                            onClick={() => handleLikeReply(thread.id, reply.id)}
                          >
                            <ThumbUp fontSize="small" />
                            <span>{reply.likes}</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Reply Input */}
                  {replyingToThread === thread.id ? (
                    <div className="reply-input-section">
                      <textarea
                        className="reply-textarea"
                        placeholder="Write your reply..."
                        value={newReply}
                        onChange={(e) => setNewReply(e.target.value)}
                        rows={3}
                      />
                      <div className="reply-actions">
                        <button
                          className="cancel-reply-button"
                          onClick={() => {
                            setReplyingToThread(null);
                            setNewReply('');
                          }}
                        >
                          Cancel
                        </button>
                        <button
                          className="submit-reply-button"
                          onClick={() => handleAddReply(thread.id)}
                        >
                          Post Reply
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      className="reply-button"
                      onClick={() => setReplyingToThread(thread.id)}
                    >
                      <ReplyIcon fontSize="small" />
                      Reply
                    </button>
                  )}
                </>
              )}

              <div className="thread-footer">
                <button
                  className="like-button"
                  onClick={() => handleLikeThread(thread.id)}
                >
                  <ThumbUp fontSize="small" />
                  <span>{thread.likes}</span>
                </button>
                <span className="thread-timestamp">{thread.timestamp}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Action Button */}
        <button
          className="fab-button"
          onClick={() => setShowNewThreadModal(true)}
        >
          <Add />
          <span>start a thought</span>
        </button>

        {/* New Thread Modal */}
        {showNewThreadModal && (
          <div className="modal-overlay" onClick={() => {
            setShowNewThreadModal(false);
            setThreadError('');
          }}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2 className="modal-title">Start a New Thread</h2>
              
              {threadError && (
                <div className="error-message">
                  <span className="error-icon">⚠️</span>
                  {threadError}
                </div>
              )}
              
              <div className="form-field">
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="category-label">Category</InputLabel>
                  <Select
                    labelId="category-label"
                    value={newThread.category}
                    onChange={(e) => {
                      setNewThread({ ...newThread, category: e.target.value });
                      setThreadError('');
                    }}
                    label="Category"
                    className="category-select"
                  >
                    <MenuItem value="General">General</MenuItem>
                    <MenuItem value="IP Law">IP Law</MenuItem>
                    <MenuItem value="Criminal Law">Criminal Law</MenuItem>
                    <MenuItem value="Family Law">Family Law</MenuItem>
                    <MenuItem value="Corporate Law">Corporate Law</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="form-field">
                <label>Thread Title</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="What would you like to discuss? (minimum 10 characters)"
                  value={newThread.title}
                  onChange={(e) => {
                    setNewThread({ ...newThread, title: e.target.value });
                    setThreadError('');
                  }}
                />
                <div className="character-count">
                  {newThread.title.length} characters
                </div>
              </div>

              <div className="modal-actions">
                <button
                  className="modal-cancel-button"
                  onClick={() => {
                    setShowNewThreadModal(false);
                    setNewThread({ title: '', category: 'General' });
                    setThreadError('');
                  }}
                >
                  Cancel
                </button>
                <button
                  className="modal-submit-button"
                  onClick={handleCreateThread}
                >
                  Post Thread
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Footer Section */}
      <div style={{ marginTop: '4rem', paddingTop: '2rem', flexShrink: 0 }}>
        <Footer />
      </div>
    </div>
  );
};

export default LawTalkHub;
