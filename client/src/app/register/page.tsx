'use client';

import CustomButton from '@/components/UI/CustomButton';
import CustomInput from '@/components/UI/CustomInput';
import AuthFooterLink from '@/components/auth/AuthFooterLink';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { registerSchema } from '@/lib/validations/auth-schemas';
import PasswordInput from '@/components/auth/PasswordInput';

type RegisterFormData = z.infer<typeof registerSchema>;

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => {
    // TODO: Replace with actual login logic
    alert(`Logging in with ${data.email}`);
  };

  return (
    <div className="mt-20 mx-auto w-full max-w-md flex flex-col justify-center items-center bg-zinc-900 p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-white text-center">
        Register to Voice to Text
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <CustomInput
          label="First Name"
          type="text"
          {...register('firstName')}
          error={errors.firstName?.message}
          placeholder="John"
          isRequired
        />
        <CustomInput
          label="Last Name"
          type="text"
          {...register('lastName')}
          error={errors.lastName?.message}
          placeholder="Doe"
          isRequired
        />
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
        <PasswordInput
          label="Confirm Password"
          type="password"
          {...register('confirmPassword')}
          error={errors.confirmPassword?.message}
          placeholder="********"
          isRequired
        />

        <CustomButton btnName="Register" type="submit" />

        <AuthFooterLink haveAccount={true} />
      </form>
    </div>
  );
};

export default Register;
