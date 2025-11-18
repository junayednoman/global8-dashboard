"use client";
import Image from "next/image";
import authImg from "@/assets/auth.png";
import logo from "@/assets/logo.svg";
import welcome from "@/assets/welcome.svg";
import bottomGlow from "@/assets/bottomGlow.png";
import topGlow from "@/assets/top-glow.png";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="mx-auto flex flex-col items-center justify-center">
      <div className="h-screen grid grid-cols-2 w-full ">
        <div className="px-20 flex flex-col justify-center">
          <Image
            className="mx-auto"
            src={logo}
            width={200}
            height={200}
            alt="auth"
          />
          <Image
            className="mx-auto my-3"
            src={authImg}
            width={500}
            height={500}
            alt="auth"
          />
          <div className="text-center">
            {/* <h2 className="text-[56px] font-bold mx-52">
              Welcome to Global8 Skating{" "}
            </h2> */}
            <Image
              className="mx-auto"
              src={welcome}
              width={420}
              height={420}
              alt="auth"
            />
            <p className="text-secondary-foreground mx-40 mt-2">
              Join the community, discover exciting events, shop for your
              favorite gear, and connect with skaters worldwide.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">{children}</div>
      </div>
      {/* corner glows */}
      <div>
        <Image
          alt="glow"
          className="absolute bottom-0 left-0 -z-10"
          width={500}
          height={500}
          src={bottomGlow}
        />
        <Image
          alt="glow"
          className="absolute top-0 right-0 -z-10"
          width={700}
          height={700}
          src={topGlow}
        />
      </div>
      <div></div>
    </main>
  );
};

export default AuthLayout;
