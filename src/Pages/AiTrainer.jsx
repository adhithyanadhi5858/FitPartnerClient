// import { useState } from "react";
// import { Send, Bot, User } from "lucide-react";
// import { AxiosInstance } from "../../Config/AxiosInstance";

// function AITrainer() {
//   const [messages, setMessages] = useState([]); // FIX: initialize as []
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Send message to backend
//   const fetchChat = async (userMessage) => {
//     try {
//       setLoading(true);

//       const res = await AxiosInstance.post("/ai/chat", {
//         message: userMessage,
//       });

//       // assuming backend sends { reply: "some text" }
//       const aiReply =
//         res.data.reply || "⚠️ Sorry, I couldn’t understand that.";

//       setMessages((prev) => [...prev, { sender: "ai", text: aiReply }]);
//     } catch (err) {
//       console.error("AI Chat Error ===", err.message);
//       setMessages((prev) => [
//         ...prev,
//         { sender: "ai", text: "⚠️ Something went wrong. Please try again." },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSend = () => {
//     if (!input.trim()) return;

//     const userMessage = input.trim();

//     // Add user message immediately to UI
//     setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
//     setInput("");

//     // Call backend for AI response
//     fetchChat(userMessage);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col">
//       {/* Header */}
//       <div className="p-4 bg-gray-800 shadow-lg flex items-center gap-2">
//         <Bot className="w-6 h-6 text-primary" />
//         <h1 className="text-lg font-semibold">AI Trainer</h1>
//       </div>

//       {/* Chat Area */}
//       <div className="flex-1 overflow-y-auto p-6 space-y-4">
//         {messages.map((msg, idx) => (
//           <div
//             key={idx}
//             className={`flex items-start gap-3 ${
//               msg.sender === "user" ? "justify-end" : "justify-start"
//             }`}
//           >
//             {msg.sender === "ai" && (
//               <div className="bg-primary p-2 rounded-full">
//                 <Bot className="w-5 h-5 text-white" />
//               </div>
//             )}

//             <div
//               className={`px-4 py-2 rounded-2xl max-w-[70%] ${
//                 msg.sender === "user"
//                   ? "bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-br-none"
//                   : "bg-gray-700 text-gray-100 rounded-bl-none"
//               }`}
//             >
//               {msg.text}
//             </div>

//             {msg.sender === "user" && (
//               <div className="bg-gradient-to-r from-pink-500 to-red-500 p-2 rounded-full">
//                 <User className="w-5 h-5 text-white" />
//               </div>
//             )}
//           </div>
//         ))}

//         {loading && (
//           <div className="flex items-center gap-2 text-gray-400">
//             <Bot className="w-4 h-4 animate-spin" /> Typing...
//           </div>
//         )}
//       </div>

//       {/* Input Box */}
//       <div className="p-4 bg-gray-800 flex items-center gap-3">
//         <input
//           type="text"
//           className="flex-1 input input-bordered input-primary text-black"
//           placeholder="Type your message..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && handleSend()}
//         />
//         <button
//           className="btn btn-primary rounded-full"
//           onClick={handleSend}
//           disabled={loading}
//         >
//           <Send className="w-5 h-5" />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default AITrainer;








import { useState } from "react";
import { Send, Bot, User } from "lucide-react";
import { AxiosInstance } from "../../Config/AxiosInstance";
import ReactMarkdown from "react-markdown"; // ✅ Added

function AITrainer() {
  const [messages, setMessages] = useState([]); 
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Send message to backend
  const fetchChat = async (userMessage) => {
    try {
      setLoading(true);

      const res = await AxiosInstance.post("/ai/chat", {
        message: userMessage,
      });

      // assuming backend sends { reply: "some text" }
      const aiReply =
        res.data.reply || "⚠️ Sorry, I couldn’t understand that.";

      setMessages((prev) => [...prev, { sender: "ai", text: aiReply }]);
    } catch (err) {
      console.error("AI Chat Error ===", err.message);
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "⚠️ Something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();

    // Add user message immediately to UI
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setInput("");

    // Call backend for AI response
    fetchChat(userMessage);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col">
      {/* Header */}
      <div className="p-4 bg-gray-800 shadow-lg flex items-center gap-2">
        <Bot className="w-6 h-6 text-primary" />
        <h1 className="text-lg font-semibold">AI Trainer</h1>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-3 ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender === "ai" && (
              <div className="bg-primary p-2 rounded-full">
                <Bot className="w-5 h-5 text-white" />
              </div>
            )}

            <div
              className={`px-4 py-2 rounded-2xl max-w-[70%] whitespace-pre-wrap ${
                msg.sender === "user"
                  ? "bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-br-none"
                  : "bg-gray-700 text-gray-100 rounded-bl-none"
              }`}
            >
              {msg.sender === "ai" ? (
                <ReactMarkdown>{msg.text}</ReactMarkdown> // ✅ AI reply with markdown
              ) : (
                msg.text
              )}
            </div>

            {msg.sender === "user" && (
              <div className="bg-gradient-to-r from-pink-500 to-red-500 p-2 rounded-full">
                <User className="w-5 h-5 text-white" />
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div className="flex items-center gap-2 text-gray-400">
            <Bot className="w-4 h-4 animate-spin" /> Typing...
          </div>
        )}
      </div>

      {/* Input Box */}
      <div className="p-4 bg-gray-800 flex items-center gap-3">
        <input
          type="text"
          className="flex-1 input input-bordered input-primary text-black"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          className="btn btn-primary rounded-full"
          onClick={handleSend}
          disabled={loading}
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default AITrainer;
