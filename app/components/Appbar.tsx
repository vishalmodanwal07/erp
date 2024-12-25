import { signIn, signOut, useSession } from "next-auth/react"

export function Appbar(){
  const session =useSession();

    return<div>
        <div className="flex justify-between">
           <div>ERM</div>
           <div>
            {session.data?.user && <button className="m-2 p-2 bg-red-600" onClick={()=>signOut()}>Logout</button>}
            {!session.data?.user && <button className="m-2 p-2 bg-blue-400"  onClick={()=>{signIn()}}>Signin</button>}
      
           </div>
        </div>
    </div>
}