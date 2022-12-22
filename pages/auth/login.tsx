import Button from "@atoms/Button";
import { FormHeading } from "@atoms/FormHeading";
import ImageWithFallback from "@atoms/ImageWithFallback";
import MainLayout from "@layout/MainLayout";
import SEO from "@misc/SEO";
import { FormInput } from "@molecules/FormInput";
import Image from "next/image";
import React, { CSSProperties } from "react";

const errorClass = "absolute left-0 top-full";
const wrapperClass = "relative";

const imgConfig = {
  quality: 100,
  priority: true,
};

const style: CSSProperties = {
  objectFit: "cover",
  objectPosition: "center",
  zIndex: "-1",
};

const login = () => {
  return (
    <>
      <SEO title="Login" />

      <div className="w-screen h-screen relative flex justify-center items-center bg-status-bg_login">
        <ImageWithFallback
          src="/images/loginImage.jpg"
          alt="a background image of a work space"
          {...imgConfig}
          style={style}
        />

        <div className="bg-white min-h-[50vh] rounded-3xl px-3 py-8 phone-mini:w-[90vw] sm:w-[70vw] lg:w-[40vw]">
          <form action="">
            <FormHeading
              text="Welcome Admin,"
              className="font-semibold text-2rem mb-2"
            />
            <p className="text-center mb-8">
              Log in to manage users on the Cafe One website
            </p>

            <div className="space-y-5 mx-4">
              <FormInput
                labelContent="Email Address"
                placeholder="Email Address"
                className={wrapperClass}
                errorClassName={errorClass}
              />
              <FormInput
                type="password"
                placeholder="Password"
                labelContent="Password"
                className={wrapperClass}
                errorClassName={errorClass}
              />

              <Button className="w-full p-4">
                <span>Continue with Password</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default login;
