'use client'

import React, {createContext, useContext, useState, useEffect, useCallback} from 'react'

type User = {
    id: number;
    email: string;
    name: string | null;
    phone: string | null;
    avatar: string | null;
    createdAt: string;
} | null;

type UserContextType = {
    user: User;
    loading: boolean;
    refetchUser: () => Promise<void>;
    // isAuth: boolean;
    showLoginPopup: boolean;
    setShowLoginPopup: (callback: boolean) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({children}: { children: React.ReactNode }) {
    // const [isAuth, setIsAuth] = useState<boolean>(false)
    const [user, setUser] = useState<User>(null)
    const [loading, setLoading] = useState(true)
    const [showLoginPopup, setShowLoginPopup] = useState(false)

    const fetchUser = async () => {
        try {
            setLoading(true);
            const res = await fetch("/api/auth/me", {
                credentials: "include",
            });
            if (res.ok) {
                const data = await res.json();
                setUser(data.user);
            } else {
                setUser(null);
            }
        } catch {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        void fetchUser()
    }, [])

    return (
        <UserContext.Provider
            value={{user, refetchUser: fetchUser, loading, showLoginPopup, setShowLoginPopup}}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error("useUser باید داخل UserProvider استفاده شود")
    }
    return context
}