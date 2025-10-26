import React, { useState } from "react";
import { subscriptionPlans, billingHistory } from "@/data/dashboard/settings";
import { CreditCard, CheckCircle2 } from "lucide-react";

export const AccountSettings = () => {
    const [selectedPlan, setSelectedPlan] = useState("free");

    // Ensure data exists before filtering (prevents TypeError)
    const currentPlan =
        Array.isArray(subscriptionPlans) &&
        subscriptionPlans.find((plan) => plan.id === selectedPlan);

    const filteredHistory = Array.isArray(billingHistory)
        ? billingHistory.filter((item) => item.status === "Paid")
        : [];

    return (
        <div className="w-full min-h-screen bg-gray-50 py-10 rounded-[10px]">
            <div className="w-[90%] mx-auto">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    Account Settings
                </h2>

                {/* Subscription Plans */}
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                    {Array.isArray(subscriptionPlans) &&
                        subscriptionPlans.map((plan) => (
                            <div
                                key={plan.id}
                                onClick={() => setSelectedPlan(plan.id)}
                                className={`p-6 rounded-2xl border transition cursor-pointer ${selectedPlan === plan.id
                                        ? "border-blue-600 bg-blue-50"
                                        : "border-gray-200 bg-white"
                                    }`}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {plan.name}
                                    </h3>
                                    {selectedPlan === plan.id && (
                                        <CheckCircle2 className="text-blue-600" size={20} />
                                    )}
                                </div>
                                <p className="text-2xl font-bold text-gray-900">
                                    {plan.price}
                                    <span className="text-sm font-medium text-gray-500 ml-1">
                                        {plan.period}
                                    </span>
                                </p>
                                <ul className="mt-4 space-y-2">
                                    {plan.features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="text-gray-700 text-sm flex items-center gap-2"
                                        >
                                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                </div>

                {/* Billing History */}
                <div className="bg-white p-6 shadow-sm border border-gray-100 rounded-[5px]">
                    <div className="flex items-center gap-2 mb-4">
                        <CreditCard className="text-gray-600" size={20} />
                        <h3 className="text-lg font-semibold text-gray-800">
                            Billing History
                        </h3>
                    </div>

                    {filteredHistory.length > 0 ? (
                        <table className="w-full border-collapse rounded-full">
                            <thead>
                                <tr className="text-left text-gray-600 border-b text-sm">
                                    <th className="py-2">Date</th>
                                    <th className="py-2">Description</th>
                                    <th className="py-2">Amount</th>
                                    <th className="py-2">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredHistory.map((item) => (
                                    <tr key={item.id} className="border-b text-sm">
                                        <td className="py-2 text-gray-700">{item.date}</td>
                                        <td className="py-2 text-gray-700">{item.description}</td>
                                        <td className="py-2 text-gray-700">{item.amount}</td>
                                        <td className="py-2 text-green-600 font-medium">
                                            {item.status}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className="text-gray-500 text-sm">No billing history found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};
