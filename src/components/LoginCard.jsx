import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Image from "next/image";




function LoginCard() {
    const router = useRouter();

    const handleSignIn = async () => {
      await signIn("google");
      router.push("/onebox");
    };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create a new account</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="outline" onClick={handleSignIn}
        className={cn("flex items-center gap-2")}
        >
            <Image
            src={"/google.svg"}
            alt={"Google"}
            width={16}
            height={16}
            />
            Sign Up with Google
            </Button>
        <Button variant="blue">Create an Account</Button>
      </CardContent>
      <CardFooter className={cn("")}>
        <p className="ml-6">Already have an account?</p>
        <span>Sign In</span>
      </CardFooter>
    </Card>
  );
}

export default LoginCard;
