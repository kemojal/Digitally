'use client';
import React, { useState } from 'react';
import EmailListList from '@/components/emailList/EmailListList';
import { Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const emailListsData = [
  {
    id: 1,
    name: 'Book Lovers',
  },
  {
    id: 2,
    name: 'Web Dev Students',
  },
  {
    id: 3,
    name: 'Productivity Enthusiasts',
  },
  {
    id: 4,
    name: 'Music Fans',
  },
  {
    id: 5,
    name: 'Cooking Hobbyists',
  },
];

const EmailListsPage: React.FC = () => {
  const [emailLists, setEmailLists] = useState(emailListsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [newListName, setNewListName] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
  };

  const filteredEmailLists = emailLists.filter((list) =>
    list.name.toLowerCase().includes(searchTerm)
  );

  const handleAddNewList = () => {
    if (newListName?.trim() !== '') {
      const newList = {
        id: emailLists.length + 1,
        name: newListName?.trim(),
      };
      setEmailLists([...emailLists, newList]);
      setNewListName('');
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center bg-gray-100 rounded-md w-[90%] p-2">
          <Search className="h-5 w-5 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search email lists..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full bg-transparent focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-1">
          <input
            type="text"
            placeholder="New List Name"
            value={newListName}
            onChange={(e) => setNewListName(e.target.value)}
            className="w-48 p-2 border rounded-md focus:outline-none"
          />
          <Button
            className="p-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            onClick={handleAddNewList}
          >
            <Plus className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <EmailListList emailLists={filteredEmailLists} />
    </div>
  );
};

export default EmailListsPage;


