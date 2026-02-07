import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { KeyRound, Mail, ShieldCheck, User } from "lucide-react";

const Signin = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <Card className="w-full max-w-md">
          <CardHeader className="flex justify-center items-center">
            <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-4 shadow-xl shadow-indigo-100 dark:shadow-none">
              <KeyRound className="w-8 h-8" />
            </div>
            <CardTitle>Welcome Back</CardTitle>
            <CardDescription>
              Access your productivity workspace
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                

                <div className="grid gap-2">
                  <Label
                    htmlFor="email"
                    className="text-xs font-bold text-zinc-400 uppercase"
                  >
                    Email
                  </Label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
                    />

                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label
                    htmlFor="password"
                    className="text-xs font-bold text-zinc-400 uppercase"
                  >
                    Password
                  </Label>

                  <div className="relative">
                    <ShieldCheck
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
                    />

                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white"
            >
              Signin
            </Button>
            <div className="mt-10">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-zinc-800"></div>
                </div>
                <div className="relative flex justify-center text-[10px] uppercase font-black tracking-[0.3em]">
                  <span className="bg-[#0a0a0a] px-4 text-zinc-600">
                    Verification Gateway
                  </span>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="w-full gap-2 text-xs font-bold text-zinc-400"
                >
                  <FcGoogle size={18} />
                  Google
                </Button>
                <Button
                  variant="outline"
                  className="w-full gap-2 text-xs font-bold text-zinc-400"
                >
                  <FaGithub size={18} />
                  GitHub
                </Button>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Signin;
