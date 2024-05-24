import React from 'react';

interface EmailList {
  id: number;
  name: string;
  // Add other email list properties as needed
}

interface EmailListListProps {
  emailLists: EmailList[];
}

const EmailListList: React.FC<EmailListListProps> = ({ emailLists }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Email Lists</h2>
      <ul>
        {emailLists.map((emailList) => (
          <li key={emailList.id}>{emailList.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmailListList;