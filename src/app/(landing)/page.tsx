// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// const LandingPage= () => {
//   return (
//     <div>
//       Landing Page (Unprotected)
//       <div>
//       <Link href={"/sign-in"}> <Button>Login
//     </Button></Link>
//       </div>
//       <div>
//       <Link href={"/sign-up"}> <Button>Register
//     </Button></Link>
//       </div>
//     </div>

//   )
// }

// export default LandingPage;
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image"; // Import Image component

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="mb-12">
        <Image alt="logo" src={"/logo.png"} width={150} height={150} />
      </div>
      <h1 className="text-4xl font-bold mb-8">Welcome to Hayalai</h1>
      <p className="text-lg text-gray-700 mb-8">
        Securely sign in with Google using our Clerk security system.
      </p>
      <div className="flex space-x-4">
        <Link href="/sign-in">
          <Button variant="default">Sign In</Button>
        </Link>
        <Link href="/sign-up">
          <Button variant="secondary">Sign Up</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
