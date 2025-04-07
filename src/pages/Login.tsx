import { AuthLayout } from "@/components/auth/AuthLayout";
import { LoginForm } from "@/components/auth/LoginForm";

const Index = () => {
  return (
    <AuthLayout>
      <main className="flex-1 bg-white px-[105px] py-[122px] max-md:px-[60px] max-sm:px-5 max-sm:py-[60px]">
        <LoginForm />
      </main>
    </AuthLayout>
  );
};

export default Index;
