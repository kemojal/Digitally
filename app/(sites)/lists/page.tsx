import EmailListList from '@/components/emailList/EmailListList';
import React from 'react';

// Assuming you have a function to fetch the email lists from an API or database
const fetchEmailLists = async () => {
  // Fetch email lists and return them
};

const EmailListsPage: React.FC = () => {
  const [emailLists, setEmailLists] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const emailLists = await fetchEmailLists();
      setEmailLists(emailLists);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Email Lists</h1>
      <EmailListList emailLists={emailLists} />
    </div>
  );
};

export default EmailListsPage;
