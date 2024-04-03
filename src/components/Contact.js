import React, { useRef } from "react";

const Contact = () => {
  const contactName = useRef(null);
  const contactEmail = useRef(null);
  const contactNumber = useRef(null);

  async function postUserInfo() {
    const UserData = {
      contactName: contactName.current.value,
      contactEmail: contactEmail.current.value,
      contactNumber: contactNumber.current.value,
    };
    try {
      const response = await fetch(
        "https://react-deployment-demo-f24d5-default-rtdb.asia-southeast1.firebasedatabase.app/contactInfo.json",
        {
          method: "POST",
          body: JSON.stringify(UserData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      alert(
        "Details Submited with id " +
          data.name +
          ". Team will contact you Shortly."
      );
    } catch (err) {
      alert(err.message);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    postUserInfo();
    contactName.current.value = null;
    contactEmail.current.value = null;
    contactNumber.current.value = null;
  };

  return (
    <div className="w-[40%] m-auto my-8">
      <h1 className="text-center font-bold text-3xl my-4">Contact Us</h1>
      <form
        className="flex flex-col bg-gray-200 py-4 px-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Full Name"
          className="my-4 p-2 rounded-lg text-lg"
          ref={contactName}
        />
        <input
          type="email"
          placeholder="Email Id"
          className="my-4 p-2 rounded-lg text-lg"
          ref={contactEmail}
        />
        <input
          type="number"
          placeholder="Phone Number"
          className="my-4 p-2 rounded-lg text-lg"
          ref={contactNumber}
        />
        <button className="bg-blue-400 rounded-lg py-2 my-4 hover:bg-blue-500 cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
