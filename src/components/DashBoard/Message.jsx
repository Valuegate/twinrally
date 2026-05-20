import React, { useState } from "react";
import { Menu, Search, Send, X } from "lucide-react";
import { mockConversations } from "@/data/dashboard/message";

export function Message() {
    const [selectedConversation, setSelectedConversation] = useState(mockConversations[0]);
    const [messageInput, setMessageInput] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [showList, setShowList] = useState(false);

    const filteredConversations = mockConversations.filter((convo) =>
        convo.user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSendMessage = () => {
        if (messageInput.trim() && selectedConversation) {
            const newMessage = {
                id: Date.now().toString(),
                sender: "user",
                content: messageInput,
                timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            };

            // Update the conversation immutably
            setSelectedConversation((prev) => ({
                ...prev,
                messages: [...prev.messages, newMessage],
            }));

            setMessageInput("");
        }
    };

    return (
        <div className="h-screen flex overflow-hidden relative bg-white">
            {/* Conversations List */}
            <div
                className={`${showList ? 'bg-[#040e28]': 'bg-white'} fixed inset-y-0 left-0 w-72 border-r border-border flex flex-col z-20 transition-transform duration-300 transform lg:relative lg:translate-x-0
          ${showList ? "translate-x-0" : "-translate-x-full"}
        `}
            >
                {/* Header */}
                <div className="p-4 border-b border-border flex items-center justify-between flex-shrink-0 ">
                    <div className="flex items-center gap-3">
                        {/* <button onClick={() => window.history.back()} className="p-2 hover:bg-secondary rounded-lg">
                            <ArrowLeft className="w-5 h-5" />
                        </button> */}
                        <h1 className="text-2xl font-bold text-foreground">Messages</h1>
                    </div>

                    {/* Close button (mobile only) */}
                    <button className="lg:hidden p-2 hover:bg-secondary rounded-lg" onClick={() => setShowList(false)}>
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Search */}
                <div className="p-4 border-b border-border flex-shrink-0 ">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search conversations..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Conversations List - Fixed scrolling container */}
                <div className="flex-1 overflow-hidden min-h-0 ">
                    <div className="h-full overflow-y-auto no-scroll">
                        {filteredConversations.map((convo) => (
                            <button
                                key={convo.id}
                                onClick={() => {
                                    setSelectedConversation(convo);
                                    setShowList(false);
                                }}
                                className={`w-full p-4  border-border text-left transition-colors ${selectedConversation?.id === convo.id ? "bg-secondary" : "hover:bg-secondary/50"
                                    }`}
                            >
                                <div className="flex gap-3">
                                    <div className="relative flex-shrink-0 text-white">
                                        <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
                                            <span className="font-semibold text-foreground">
                                                {convo.user.name.charAt(0)}
                                            </span>
                                        </div>
                                        <div
                                            className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-card ${convo.user.status === "online" ? "bg-green-500" : "bg-gray-400"
                                                }`}
                                        />
                                    </div>

                                    <div className="flex-1 min-w-0 text-white">
                                        <div className="flex items-center justify-between mb-1">
                                            <h3 className={`font-semibold ${convo.unread ? "text-foreground" : "text-muted-foreground"}`}>
                                                {convo.user.name}
                                            </h3>
                                            <span className="text-xs text-muted-foreground">{convo.timestamp}</span>
                                        </div>
                                        <p
                                            className={`text-sm truncate ${convo.unread ? "text-foreground font-medium" : "text-muted-foreground"
                                                }`}
                                        >
                                            {convo.lastMessage}
                                        </p>
                                    </div>

                                    {convo.unread && <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col min-w-0 ">
                {/* Header (mobile toggle) */}
                <div className="lg:hidden p-4 border-b border-border flex items-center justify-between sticky top-0 bg-card z-10 flex-shrink-0">
                    <button onClick={() => setShowList(true)} className="p-2 bg-secondary rounded-lg">
                        <Menu className="w-5 h-5" />
                    </button>
                    <h2 className="font-semibold">Chat</h2>
                    <div />
                </div>

                {selectedConversation ? (
                    <>
                        {/* Chat Header (Desktop) */}
                        <div className="hidden lg:flex p-4 border-b border-border items-center justify-between sticky top-0 flex-shrink-0 ">
                            <div className="flex items-center gap-3 ">
                                <div className="relative">
                                    <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                                        <span className="font-semibold text-foreground">
                                            {selectedConversation.user.name.charAt(0)}
                                        </span>
                                    </div>
                                    <div
                                        className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-card ${selectedConversation.user.status === "online" ? "bg-green-500" : "bg-gray-400"
                                            }`}
                                    />
                                </div>
                                <div>
                                    <h2 className="font-semibold text-foreground">{selectedConversation.user.name}</h2>
                                    <p className="text-xs text-muted-foreground">
                                        {selectedConversation.user.status === "online" ? "Active now" : "Offline"}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Messages - Fixed scrolling container */}
                        <div className="flex-1 overflow-hidden min-h-0 ">
                            <div className="h-full overflow-y-auto p-4 space-y-4">
                                {selectedConversation.messages.map((msg) => (
                                    <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                                        <div
                                            className={`max-w-xs px-4 py-2 rounded-lg ${msg.sender === "user" ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"
                                                }`}
                                        >
                                            <p className="text-sm">{msg.content}</p>
                                            <p
                                                className={`text-xs mt-1 ${msg.sender === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                                                    }`}
                                            >
                                                {msg.timestamp}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Input Box */}
                        <div className="p-4 border-t border-border bg-card flex-shrink-0">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Type a message..."
                                    value={messageInput}
                                    onChange={(e) => setMessageInput(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                                    className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                />
                                <button
                                    onClick={handleSendMessage}
                                    disabled={!messageInput.trim()}
                                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex items-center justify-center text-muted-foreground">
                        <p>Select a conversation to start messaging</p>
                    </div>
                )}
            </div>

            {/* Background overlay for mobile when sidebar is open */}
            {showList && (
                <div
                    className="fixed inset-0 bg-black/40 lg:hidden z-10"
                    onClick={() => setShowList(false)}
                />
            )}
        </div>
    );
}
