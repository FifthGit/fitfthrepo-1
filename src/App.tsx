@@ .. @@
 import React, { useState, useEffect } from 'react'
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
+import { Toaster } from 'react-hot-toast'
 import { AuthProvider } from './contexts/AuthContext'
 import { ThemeProvider } from './contexts/ThemeContext'
 import LoadingScreen from './components/LoadingScreen'
@@ .. @@
           </Routes>
         </Router>
       </AuthProvider>
+      <Toaster position="top-right" />
     </ThemeProvider>
   )
 }