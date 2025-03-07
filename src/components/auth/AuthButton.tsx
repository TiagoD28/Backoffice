"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  return (
    <div className="p-4 flex justify-end">
      {session ? (
        <div className="flex gap-4 items-center">
          <p className="text-gray-700">Welcome, {session.user?.name}</p>
          <button
            onClick={() => signOut()}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <button
          onClick={() => signIn("github")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Sign In with GitHub
        </button>
      )}
    </div>
  );
}
