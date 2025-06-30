'use client';

import CustomButton from '@/components/UI/CustomButton';
import CustomInput from '@/components/UI/CustomInput';
import AuthFooterLink from '@/components/auth/AuthFooterLink';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { loginSchema } from '@/lib/validations/auth-schemas';
import PasswordInput from '@/components/auth/PasswordInput';

type LoginFormData = z.infer<typeof loginSchema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    // TODO: Replace with actual login logic
    alert(`Logging in with ${data.email}`);
  };

  return (
    <div className="mt-40 mx-auto w-full max-w-md flex flex-col justify-center items-center bg-zinc-900 p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-white text-center">
        Log In to Voice to Text
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <CustomInput
          label="Email"
          type="email"
          {...register('email')}
          error={errors.email?.message}
          placeholder="your_email@example.com"
          isRequired
        />

        <PasswordInput
          label="Password"
          type="password"
          {...register('password')}
          error={errors.password?.message}
          placeholder="********"
          isRequired
        />

        <CustomButton btnName="Login" type="submit" />

        <AuthFooterLink haveAccount={false} />
      </form>
    </div>
  );
};

export default Login;
