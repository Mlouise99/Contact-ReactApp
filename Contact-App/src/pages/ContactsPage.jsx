import React, { useState, useEffect } from 'react';

const ContactsPage = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    
    const fetchContacts = async () => {
      try {
        const response = await fetch('/api/contacts',{
         method:'GET',
         headers:{
          'Content-type':'application/json'
         } 
        }); 
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      
      }
    };
  
    fetchContacts();
  }, []);
  

  return (
    <div className="container flex mx-auto mt-10  justify-center w-full items-center border border-gray-100 rounded-lg p-4 bg-white  shadow-lg ">
      <h1 className="text-2xl font-bold mb-5 mt-10 pr-20">All Registered Contacts</h1>
      <div className='pl-10'>
        <button
          className="bg-blue-500 hover:bg-blue-700 w-30 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
         Add New
        </button>
      </div>
      <div>
        {contacts.map((contact) => (
          <div key={contact.id}>
            
            <p>FullName: {contact.fullname}</p>
            <p>Phone: {contact.phone}</p>
            <p>Email: {contact.email}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ContactsPage;
