import { useState } from "react";

export default function Login() {
        const [email, setEmail] = useState<string | undefined>();
        const [password, setPassword] = useState<string | undefined>();
    return (

    <div className="flex flex-col w-full justify-center items-center">
        <label 
            htmlFor="email" 
            className="block text-sm font-medium text-gray-700">
            Email
        </label>
            <div className="mt-1">
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="anemail@email.com"
                />
            </div>
        </div>
    );
}