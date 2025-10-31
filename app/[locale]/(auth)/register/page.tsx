import RegisterForm from "./RegisterForm";
import ClientRegisterLink from "./ClientRegisterLink";
import Container from "@/components/shared/container";
import { getTranslations } from "next-intl/server";
import bgLeft from "@/public/images/bg-left.png";
import bgRight from "@/public/images/bg-right.png";
import Image from "next/image";

interface LayoutProps {
  params: { locale: string };
}

const page = async ({ params }: LayoutProps) => {
  const { locale } = params;
  const t = await getTranslations("RegisterPage");

  return (
    <div className="relative">
      <div className="absolute top-20 hidden md:block left-0  ">
        <Image src={bgLeft} alt="bgLeft" />
      </div>
      <div className="absolute top-20 hidden md:block  right-0">
        <Image src={bgRight} alt="bgRight" />
      </div>
      <Container>
        <div className="flex flex-col items-center justify-center min-h-screen my-5">
          <h2 className="font-bold text-[29px] text-[#EB2302] my-2">
            {t("register_title")}
          </h2>
          <h3 className="text-lg text-[#989898] mb-6">
            {t("register_subtitle")}
          </h3>{" "}
          <div className="w-full max-w-md mx-auto text-center">
            <RegisterForm />

            <div className="mt-10">
              <h4 className="text-[#989898]">{t("existing_account")}</h4>

              <ClientRegisterLink locale={locale} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
