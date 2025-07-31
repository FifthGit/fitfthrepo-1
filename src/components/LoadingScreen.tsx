@@ .. @@
-import React from 'react'
+import React, { useEffect, useState } from 'react'
 import { motion } from 'framer-motion'

 interface LoadingScreenProps {
@@ .. @@
 }

 const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
+  const [progress, setProgress] = useState(0)
+
+  useEffect(() => {
+    const timer = setInterval(() => {
+      setProgress(prev => {
+        if (prev >= 100) {
+          clearInterval(timer)
+          setTimeout(onComplete, 500)
+          return 100
+        }
+        return prev + 2
+      })
+    }, 50)
+
+    return () => clearInterval(timer)
+  }, [onComplete])
+
   return (
     <motion.div
       className="fixed inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center z-50"
@@ .. @@
         <motion.div
           className="text-4xl md:text-6xl font-bold text-white mb-8 text-center"
           initial={{ opacity: 0, y: 20 }}
-          animate={{ opacity: 1, y: 0 }}
+          animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
         >
           BIANOTRADES
@@ .. @@
             </motion.div>
           ))}
         </div>
+        
+        <motion.div
+          className="mt-8 w-64 bg-gray-700 rounded-full h-2"
+          initial={{ opacity: 0 }}
+          animate={{ opacity: 1 }}
+          transition={{ delay: 1 }}
+        >
+          <motion.div
+            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
+            initial={{ width: 0 }}
+            animate={{ width: `${progress}%` }}
+            transition={{ duration: 0.1 }}
+          />
+        </motion.div>
+        
+        <motion.p
+          className="text-white/70 mt-4 text-center"
+          initial={{ opacity: 0 }}
+          animate={{ opacity: 1 }}
+          transition={{ delay: 1.5 }}
+        >
+          Loading your crypto trading platform...
+        </motion.p>
       </div>
     </motion.div>
   )
 }