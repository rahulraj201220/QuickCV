import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Root } from './pages/Root.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { Service } from './pages/Service.jsx'
import { Contact } from './pages/Contact.jsx'
import GenerateResume from './pages/GenerateResume.jsx'
import { Toaster } from 'react-hot-toast'
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";


const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
    <BrowserRouter>
    <Toaster />
      <Routes>
        <Route path='/' element={<Root />}>
          <Route index element={<Home />} />
         <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Service />} />
          <Route path="contact" element={<Contact />} />
          <Route
              path="generate-resume"
              element={
                <>
                  <SignedIn>
                    <GenerateResume />
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              }
            />
          </Route>
        
      </Routes>
    </BrowserRouter>
    </ClerkProvider>
  </StrictMode>,
)
