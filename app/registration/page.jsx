import Registration from "@/features/web/registration/components/Registration";
import SendOtp from "@/features/web/registration/components/SendOtp";
import VerifyOtp from "@/features/web/registration/components/VerifyOtp";

export default function RegistrationPage() {

  return (
   <div>
   <section className="bg-gray-50 pt-5 pb-10">
      <div className="rounded-2xl max-w-lg lg:max-w-2xl mx-auto p-5 ">
        <div className="text-center">
          <h2 className="font-bold text-3xl gradientText font-siliguri mb-8">
            রেজিস্ট্রেশন <span>করুন</span>
          </h2>
        </div>
        {/* <SendOtp />
        <VerifyOtp /> */}
        <Registration />
        </div>
    </section>
   </div>
  );
}
