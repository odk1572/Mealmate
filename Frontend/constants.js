export const NODE_ENV = '' //development

export const BASE_API = NODE_ENV === 'development' ? "http://localhost:4000" : "https://mealmate-p16n.onrender.com"
export const STRIPE_REDIRECT_URL = NODE_ENV === 'development' ? "http://localhost:5173" : "https://mealmate-p16n.onrender.com"
