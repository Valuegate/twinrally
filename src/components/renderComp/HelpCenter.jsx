import React, { useState } from "react";
import { faqCategories } from "@/data/dashboard/settings";
import { ChevronDown, ChevronUp } from "lucide-react";

export const HelpCenter = () => {
    const [selectedCategory, setSelectedCategory] = useState("getting-started");
    const [openQuestion, setOpenQuestion] = useState(null);

    const category =
        Array.isArray(faqCategories) &&
        faqCategories.find((cat) => cat.id === selectedCategory);

    return (
        <div className="w-full min-h-screen bg-gray-50 py-10 rounded-[10px]">
            <div className="w-[90%] mx-auto">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    Help Center
                </h2>

                {/* Categories */}
                <div className="flex flex-wrap gap-4 mb-8">
                    {Array.isArray(faqCategories) &&
                        faqCategories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition ${selectedCategory === cat.id
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                </div>

                {/* Questions */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    {category && category.questions ? (
                        category.questions.map((q) => (
                            <div key={q.id} className="border-b py-4">
                                <button
                                    className="flex items-center justify-between w-full text-left"
                                    onClick={() =>
                                        setOpenQuestion(openQuestion === q.id ? null : q.id)
                                    }
                                >
                                    <span className="text-gray-800 font-medium text-sm">
                                        {q.question}
                                    </span>
                                    {openQuestion === q.id ? (
                                        <ChevronUp size={18} className="text-gray-600" />
                                    ) : (
                                        <ChevronDown size={18} className="text-gray-600" />
                                    )}
                                </button>
                                {openQuestion === q.id && (
                                    <p className="mt-2 text-gray-600 text-sm">{q.answer}</p>
                                )}
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 text-sm">
                            No questions available for this category.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};
