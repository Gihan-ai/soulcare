import React, { useState } from 'react';
import {
  Calendar,
  Users,
  Heart,
  MessageSquare,
  Star,
  ArrowRight,
  Plus,
  X,
  Save,
  Bold,
  Italic,
  Underline,
  Highlighter,
  Type,
  AlignLeft
} from 'lucide-react';
import HeaderNavbar from '../componets/HeaderNavbar';
import SlideNavbar from '../componets/SlideNavbar';

const Blog = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Hymn to the United Nations",
      content:
        "Get inspired by this revised W.H. Auden's Hymn to the United Nations. \"Let music for peace Be the paradigm, For peace means to change At the right time, As the World-Clock, Goes Tick and Tock So may the story Of our human city Presently move\"",
      author: "Windy Bond",
      date: "24 Oct 2021",
      comments: "190 COMMENTS",
      rating: "4.5",
      ratingText: "Ratings"
    },
    {
      id: 2,
      title: "Hymn to the United Nations",
      content:
        "Get inspired by this revised W.H. Auden's Hymn to the United Nations. \"Let music for peace Be the paradigm, For peace means to change At the right time, As the World-Clock, Goes Tick and Tock So may the story Of our human city Presently move\"",
      author: "Windy Bond",
      date: "24 Oct 2021",
      comments: "105 COMMENTS",
      rating: "4.5",
      ratingText: "Ratings"
    },
    {
      id: 3,
      title: "Hymn to the United Nations",
      content:
        "Get inspired by this revised W.H. Auden's Hymn to the United Nations. \"Let music for peace Be the paradigm, For peace means to change At the right time, As the World-Clock, Goes Tick and Tock So may the story Of our human city Presently move\"",
      author: "Windy Bond",
      date: "24 Oct 2021",
      comments: "135 COMMENTS",
      rating: "4.5",
      ratingText: "Ratings"
    }
  ]);

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newBlog, setNewBlog] = useState({
    title: '',
    content: '',
    author: ''
  });

  const [textareaRef, setTextareaRef] = useState(null);

  const handleCreateBlog = () => {
    setShowCreateForm(true);
  };

  const handleCloseForm = () => {
    setShowCreateForm(false);
    setNewBlog({ title: '', content: '', author: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveBlog = () => {
    if (newBlog.title && newBlog.content && newBlog.author) {
      const currentDate = new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });

      const newPost = {
        id: posts.length + 1,
        title: newBlog.title,
        content: newBlog.content,
        author: newBlog.author,
        date: currentDate,
        comments: "0 COMMENTS",
        rating: "0.0",
        ratingText: "Ratings"
      };

      setPosts(prev => [newPost, ...prev]);
      handleCloseForm();
    }
  };

  const applyTextFormat = (formatType) => {
    if (!textareaRef) return;

    const start = textareaRef.selectionStart;
    const end = textareaRef.selectionEnd;
    const selectedText = newBlog.content.substring(start, end);
    
    if (selectedText) {
      let formattedText = selectedText;
      
      switch (formatType) {
        case 'bold':
          formattedText = `**${selectedText}**`;
          break;
        case 'italic':
          formattedText = `*${selectedText}*`;
          break;
        case 'underline':
          formattedText = `<u>${selectedText}</u>`;
          break;
        case 'highlight':
          formattedText = `<mark>${selectedText}</mark>`;
          break;
        case 'uppercase':
          formattedText = selectedText.toUpperCase();
          break;
        case 'lowercase':
          formattedText = selectedText.toLowerCase();
          break;
        default:
          break;
      }

      const newContent = newBlog.content.substring(0, start) + formattedText + newBlog.content.substring(end);
      setNewBlog(prev => ({
        ...prev,
        content: newContent
      }));

      // Focus back to textarea and set cursor position
      setTimeout(() => {
        textareaRef.focus();
        textareaRef.setSelectionRange(start + formattedText.length, start + formattedText.length);
      }, 0);
    }
  };

  return (
    <div className="min-h-screen" style={{backgroundColor: '#E3F2FD'}}>
      <div className="flex h-screen">
        {/* Sidebar */}
        <SlideNavbar/>
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <HeaderNavbar/>
          
          {/* Content Area */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-light text-gray-600">Share your experience......</h2>
                
                {/* Create Blog Button */}
                <button
                  onClick={handleCreateBlog}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center space-x-2 transition-colors shadow-lg"
                >
                  <Plus className="w-5 h-5" />
                  <span className="font-medium">Create Blog</span>
                </button>
              </div>

              {/* Create Blog Form Modal */}
              {showCreateForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                  <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                    <div className="p-6">
                      {/* Form Header */}
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-semibold text-gray-800">Create New Blog Post</h3>
                        <button
                          onClick={handleCloseForm}
                          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                          <X className="w-6 h-6 text-gray-500" />
                        </button>
                      </div>

                      {/* Form Fields */}
                      <div className="space-y-6">
                        {/* Title Input */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Blog Title
                          </label>
                          <input
                            type="text"
                            name="title"
                            value={newBlog.title}
                            onChange={handleInputChange}
                            placeholder="Enter your blog title..."
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>

                        {/* Author Input */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Author Name
                          </label>
                          <input
                            type="text"
                            name="author"
                            value={newBlog.author}
                            onChange={handleInputChange}
                            placeholder="Enter author name..."
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>

                        {/* Content Textarea */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Blog Content
                          </label>
                          
                          {/* Text Formatting Toolbar */}
                          <div className="border border-gray-300 rounded-t-lg bg-gray-50 p-2 flex items-center space-x-2">
                            <button
                              type="button"
                              onClick={() => applyTextFormat('bold')}
                              className="p-2 hover:bg-gray-200 rounded transition-colors"
                              title="Bold"
                            >
                              <Bold className="w-4 h-4 text-gray-600" />
                            </button>
                            
                            <button
                              type="button"
                              onClick={() => applyTextFormat('italic')}
                              className="p-2 hover:bg-gray-200 rounded transition-colors"
                              title="Italic"
                            >
                              <Italic className="w-4 h-4 text-gray-600" />
                            </button>
                            
                            <button
                              type="button"
                              onClick={() => applyTextFormat('underline')}
                              className="p-2 hover:bg-gray-200 rounded transition-colors"
                              title="Underline"
                            >
                              <Underline className="w-4 h-4 text-gray-600" />
                            </button>
                            
                            <button
                              type="button"
                              onClick={() => applyTextFormat('highlight')}
                              className="p-2 hover:bg-gray-200 rounded transition-colors"
                              title="Highlight"
                            >
                              <Highlighter className="w-4 h-4 text-gray-600" />
                            </button>
                            
                            <div className="w-px h-6 bg-gray-300"></div>
                            
                            <button
                              type="button"
                              onClick={() => applyTextFormat('uppercase')}
                              className="p-2 hover:bg-gray-200 rounded transition-colors"
                              title="Uppercase"
                            >
                              <Type className="w-4 h-4 text-gray-600" />
                              <span className="text-xs ml-1">AA</span>
                            </button>
                            
                            <button
                              type="button"
                              onClick={() => applyTextFormat('lowercase')}
                              className="p-2 hover:bg-gray-200 rounded transition-colors"
                              title="Lowercase"
                            >
                              <Type className="w-4 h-4 text-gray-600" />
                              <span className="text-xs ml-1">aa</span>
                            </button>
                          </div>
                          
                          <textarea
                            ref={setTextareaRef}
                            name="content"
                            value={newBlog.content}
                            onChange={handleInputChange}
                            placeholder="Write your blog content here... Select text and use the formatting buttons above to apply styles."
                            rows={8}
                            className="w-full px-4 py-3 border border-gray-300 border-t-0 rounded-b-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                          />
                          
                          <div className="mt-2 text-xs text-gray-500">
                            <strong>Tip:</strong> Select text and click formatting buttons to apply styles.
                          </div>
                        </div>
                      </div>

                      {/* Form Actions */}
                      <div className="flex justify-end space-x-4 mt-8">
                        <button
                          onClick={handleCloseForm}
                          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleSaveBlog}
                          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                        >
                          <Save className="w-4 h-4" />
                          <span>Save Blog</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {posts.map((post) => (
                  <div key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    {/* Header image */}
                    <div className="h-52 bg-gradient-to-r from-blue-200 to-purple-200 relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                      <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-blue-300 via-green-200 to-yellow-200">
                        <div className="text-center">
                          <div className="w-32 h-20 bg-white/20 rounded-lg mb-4 mx-auto flex items-center justify-center">
                            <div className="text-white font-bold text-lg">
                              {post.title.split(' ').map(word => word[0]).join('').slice(0, 2).toUpperCase()}
                            </div>
                          </div>
                          <div className="flex justify-center space-x-1">
                            {[...Array(8)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-2 h-12 ${
                                  i % 4 === 0
                                    ? 'bg-red-400'
                                    : i % 4 === 1
                                    ? 'bg-blue-400'
                                    : i % 4 === 2
                                    ? 'bg-green-400'
                                    : 'bg-yellow-400'
                                } rounded-sm`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center text-xs text-gray-500 mb-4 space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <MessageSquare className="w-3 h-3 mr-1" />
                          <span>{post.comments}</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-3 h-3 mr-1 text-yellow-400 fill-current" />
                          <span>{post.rating}</span>
                          <span className="ml-1">{post.ratingText}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-blue-600 mb-4">{post.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        {post.content.length > 250 ? post.content.slice(0, 250) + '...' : post.content}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gray-300 rounded-full mr-3 flex items-center justify-center">
                            <span className="text-gray-600 font-medium text-sm">
                              {post.author.split(' ').map(name => name[0]).join('').toUpperCase()}
                            </span>
                          </div>
                          <span className="text-sm text-gray-600 font-medium">{post.author}</span>
                        </div>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors flex items-center">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer CTA */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex-1 max-w-2xl">
                    <h3 className="text-3xl font-light text-gray-800 leading-relaxed">
                      <span className="font-medium">Support your fellow healthcare providers</span> by advocating
                      for better mental health awareness.
                    </h3>
                  </div>
                  <div className="flex items-center space-x-6 ml-8">
                    <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center">
                      <Users className="w-10 h-10 text-blue-600" />
                    </div>
                    <div className="flex space-x-3">
                      <div className="w-28 h-20 bg-gradient-to-br from-teal-300 to-blue-300 rounded-lg flex items-center justify-center">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                      <div className="w-28 h-20 bg-gradient-to-br from-purple-300 to-pink-300 rounded-lg flex items-center justify-center">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;