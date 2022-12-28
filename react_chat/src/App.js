import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ActiveConversations } from "./components/ActiveConversations";
import { Chat } from "./components/Chat";
import { Conversations } from "./components/Conversation";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";

// imports
import { AuthContextProvider } from "./contexts/AuthContext";
import { NotificationContextProvider } from "./contexts/NotificationContext";
import { ProtectedRoute } from "./ProtectedRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthContextProvider>
              <NotificationContextProvider>
                <Navbar />
              </NotificationContextProvider>
            </AuthContextProvider>
          }
        >
          <Route
            path=""
            element={
              <ProtectedRoute>
                <Conversations />
              </ProtectedRoute>
            }
          />
          <Route
            path="chats/:conversationName"
            element={
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            }
          />
          <Route
            path="conversations/"
            element={
              <ProtectedRoute>
                <ActiveConversations />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}