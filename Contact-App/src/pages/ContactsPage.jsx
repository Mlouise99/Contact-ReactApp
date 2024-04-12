import { Link } from "react-router-dom"

const Contact = ({ contact }) => {
   

    return (
        <Link
            to={`${contact._id}`}
            className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
        >
            <span
                className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
            ></span>
            <h1 className="font-bold, ">All REGISTERED CONTACT</h1>
            <div className="sm:flex sm:justify-between sm:gap-4">
                <div>
                    <h3 className="text-lg font-bold text-white-900 sm:text-xl">
                        {contact.fullName}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-gray-400">{contact.phone}</p>
                </div>
            </div>
        </Link>
    )
}

export default Contact;
