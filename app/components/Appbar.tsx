// "use client";

// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/react";


// export function Appbar() {
//   const { data: session, status } = useSession();

//   return (
//     <nav className="bg-white shadow-sm">
//       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//         <Link href="/" className="text-xl font-semibold">
//           Mini ERP
//         </Link>
//         <ul className="flex space-x-4 items-center">
//           {status === "authenticated" ? (
//             <>
//               <li><Link href="/dashboard">Dashboard</Link></li>
//               <li><Link href="/products">Products</Link></li>
//               <li><Link href="/sales-orders">Sales Orders</Link></li>
//               <li><Link href="/reports">Reports</Link></li>
//               <li>
//                 <Button 
//                   variant="outline" 
//                   size="sm" 
//                   onClick={() => signOut({ callbackUrl: '/' })}
//                 >
//                   Sign out
//                 </Button>
//               </li>
//             </>
//           ) : (
//             <li>
//               <Button 
//                 variant="ghost" 
//                 size="sm" 
//                 onClick={() => signIn("google", { callbackUrl: '/dashboard' })}
//               >
//                 Log in
//               </Button>
//             </li>
//           )}
//         </ul>
//       </div>
//     </nav>
//   );
// }

"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"

export function Appbar() {
  const { data: session, status } = useSession()

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold">
          Mini ERP
        </Link>
        <ul className="flex space-x-4 items-center">
          {status === "authenticated" ? (
            <>
              <li><Link href="/dashboard">Dashboard</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/sales-orders">Sales Orders</Link></li>
              <li><Link href="/reports">Reports</Link></li>
              <li>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => signOut({ callbackUrl: '/' })}
                >
                  Sign out
                </Button>
              </li>
            </>
          ) : (
            <li>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => signIn("google", { callbackUrl: '/dashboard' })}
              >
                Sign in with Google
              </Button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}

