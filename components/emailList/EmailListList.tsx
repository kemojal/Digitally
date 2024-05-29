import React from "react";

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
      <ul>
        {emailLists.map((emailList) => (
          <li key={emailList.id}>{emailList.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmailListList;
