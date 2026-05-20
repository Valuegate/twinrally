import { User, Shield, CreditCard, Bell } from "lucide-react";

export const faqCategories = [
    {
        id: 'getting-started',
        name: 'Getting Started',
        icon: User,
        questions: [
            {
                id: 1,
                question: 'How do I create an account?',
                answer: 'To create an account, click on the "Sign Up" button on the homepage, enter your email address, create a password, and follow the verification steps.'
            },
            {
                id: 2,
                question: 'How do I customize my profile?',
                answer: 'Go to your profile page, click the "Edit Profile" button, and you can update your photo, bio, interests, and other personal information.'
            },
            {
                id: 3,
                question: 'How do I find and join communities?',
                answer: 'Use the "Discover" tab in the Communities section to browse recommended communities based on your interests, or use the search function to find specific communities.'
            }
        ]
    },
    {
        id: 'account',
        name: 'Account & Security',
        icon: Shield,
        questions: [
            {
                id: 4,
                question: 'How do I reset my password?',
                answer: 'Click "Forgot Password" on the login page, enter your email address, and follow the instructions sent to your email to reset your password.'
            },
            {
                id: 5,
                question: 'How do I enable two-factor authentication?',
                answer: 'Go to Settings > Security > Two-Factor Authentication and follow the setup instructions to add an extra layer of security to your account.'
            },
            {
                id: 6,
                question: 'How do I delete my account?',
                answer: 'Contact our support team at support@twinrally.com to request account deletion. This process may take up to 30 days to complete.'
            }
        ]
    },
    {
        id: 'billing',
        name: 'Billing & Subscription',
        icon: CreditCard,
        questions: [
            {
                id: 7,
                question: 'How do I upgrade my subscription?',
                answer: 'Go to Settings > Subscription > Upgrade Plan to view available plans and upgrade your subscription.'
            },
            {
                id: 8,
                question: 'How do I update my payment method?',
                answer: 'Navigate to Settings > Billing > Payment Methods to add, remove, or update your payment information.'
            },
            {
                id: 9,
                question: 'How do I cancel my subscription?',
                answer: 'Go to Settings > Subscription > Manage Plan and click "Cancel Subscription". Your access will continue until the end of your billing period.'
            }
        ]
    },
    {
        id: 'notifications',
        name: 'Notifications & Privacy',
        icon: Bell,
        questions: [
            {
                id: 10,
                question: 'How do I manage my notification settings?',
                answer: 'Visit Settings > Notifications to customize which notifications you receive and how you receive them (email, push, in-app).'
            },
            {
                id: 11,
                question: 'How do I control my privacy settings?',
                answer: 'Go to Settings > Privacy to manage who can see your profile, send you messages, and view your activity.'
            }
        ]
    }
];

export const subscriptionPlans = [
    {
        id: 'free',
        name: 'Free Plan',
        price: '$0',
        period: 'forever',
        features: [
            'Up to 5 communities',
            'Basic profile customization',
            'Standard support',
            '100 friend connections'
        ],
        current: true
    },
    {
        id: 'pro',
        name: 'Pro Plan',
        price: '$9.99',
        period: 'per month',
        features: [
            'Unlimited communities',
            'Advanced profile customization',
            'Priority support',
            'Unlimited friend connections',
            'Advanced analytics',
            'Custom themes'
        ],
        current: false
    },
    {
        id: 'premium',
        name: 'Premium Plan',
        price: '$19.99',
        period: 'per month',
        features: [
            'All Pro features',
            'Dedicated account manager',
            'Early access to new features',
            'Custom community branding',
            'API access'
        ],
        current: false
    }
];

export const billingHistory = [
    {
        id: 1,
        date: 'Nov 15, 2024',
        description: 'Pro Plan Subscription',
        amount: '$9.99',
        status: 'Paid'
    },
    {
        id: 2,
        date: 'Oct 15, 2024',
        description: 'Pro Plan Subscription',
        amount: '$9.99',
        status: 'Paid'
    },
    {
        id: 3,
        date: 'Sep 15, 2024',
        description: 'Free to Pro Upgrade',
        amount: '$9.99',
        status: 'Paid'
    }
];