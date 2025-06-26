"use client";
import React, { useState, useRef, useEffect } from "react";
import { TbMessageChatbot } from "react-icons/tb";
import { FaPaperPlane, FaMicrophoneAlt, FaMicrophoneAltSlash } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import parse from "html-react-parser";
import axios from "axios";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const ChatBot = () => {
  const [formData, setFormData] = useState({ content: "" });
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);
  const greetedRef = useRef(false);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  const startListening = () => {
    if (!browserSupportsSpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }
    resetTranscript();
    SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    setIsListening(true);
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    setIsListening(false);
  };

  useEffect(() => {
    if (transcript && isListening) {
      setFormData((prev) => ({ ...prev, content: transcript }));
    }
  }, [transcript]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSend = async (e) => {
    if (e?.preventDefault) e.preventDefault();
    const input = formData.content.trim();
    if (!input) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setFormData({ content: "" });
    resetTranscript();
    
    setLoading(true);

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_AI_SERVER_URL}/prompt`,
        { content: input }
      );

      const botResponse = res?.data?.step || "No response from chatbot.";
      const botMessage = { role: "bot", content: botResponse };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "Something went wrong. Please try again!" },
      ]);
    } finally {
      setLoading(false);
      stopListening();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSend(e);
    }
  };

  const toggleChatbot = () => {
    setIsOpen((prev) => {
      const openingNow = !prev;

      if (openingNow && !greetedRef.current) {
        setMessages([
          {
            role: "bot",
            content: "Hey I am Major, Mridul AI Assistant. How can I help you? My first response will take sometime due to server restarting reason😓 ",
          },
        ]);
        greetedRef.current = true;
      }

      return openingNow;
    });
  };

  useEffect(() => {
  if (!isListening && transcript.trim()) {
    const delay = setTimeout(() => {
      handleSend();
    }, 2000); 
    return () => clearTimeout(delay); 
  }
}, [isListening]);

  return (
    <>
      {isOpen && (
        <div
          className="backdrop-blur-sm w-full h-full fixed z-[49] top-0 left-0 right-0 bottom-0"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="fixed bottom-9 right-7 z-50 flex flex-col items-end gap-4">
        {isOpen && (
          <div className="w-screen h-screen md:w-[480px] md:h-[500px] bg-white shadow-xl rounded-none md:rounded-xl flex flex-col overflow-hidden fixed top-0 left-0 bottom-0 right-0 md:relative z-[100]">
            <div className="bg-blue-600 text-white p-4 font-bold flex items-center justify-between">
              Mridul AI Assistant
              <span
                className="cursor-pointer text-sm hover:rotate-90 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <FaXmark className="text-xl" />
              </span>
            </div>

            <div
              style={{ backgroundImage: 'url("/images/whatsbg.jpg")' }}
              className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50"
            >
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-3 px-5 rounded-lg max-w-[80%] text-sm chatbot text-wrap ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white self-end ml-auto"
                      : "bg-gray-50 text-gray-900 self-start mr-auto"
                  }`}
                >
                  {parse(msg.content)}
                </div>
              ))}

              {loading && (
                <div className="text-gray-500 animate-pulse bg-gray-100 p-2  rounded-lg w-fit">
                  Typing...
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            <form
              onSubmit={handleSend}
              className="border-t border-gray-300 p-2 px-3 flex items-center gap-1 sm:fixed sm:bottom-0 md:relative"
            >
              <div>
                {isListening ? (
                  <button type="button" className="h-8 w-8 mic relative z-50 rounded-full bg-blue-100 flex items-center text-lg justify-center text-blue-600" onClick={stopListening}>
                    <FaMicrophoneAlt  />
                    
                  </button>
                ) : (
                  <button type="button" onClick={startListening} className="h-8 w-8 rounded-full bg-blue-100 text-lg flex items-center justify-center text-blue-600">
                    <FaMicrophoneAltSlash  />
                  </button>
                )}
              </div>
              <textarea
                rows={1}
                name="content"
                value={formData.content}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Write your message..."
                className="flex-1 resize-none border-none focus:outline-none p-2"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 p-3 rounded-lg text-white ml-2 hover:bg-blue-700 disabled:opacity-50"
              >
                <FaPaperPlane />
              </button>
            </form>
          </div>
        )}

        <div
          className="bot relative bg-blue-600 h-16 w-16 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
          onClick={toggleChatbot}
        >
          <TbMessageChatbot className="text-white text-3xl" />
        </div>
      </div>
    </>
  );
};

export default ChatBot;
