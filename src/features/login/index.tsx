import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@/common/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/common/ui/form';
import { Input } from '@/common/ui/input';
import { ReactComponent as LoginIcon } from '../../assets/login.svg';
import { ReactComponent as LogoIcon } from '../../assets/react.svg';
import { ReactComponent as VisibilityOffIcon } from '../../assets/visibility-off.svg';
import { ReactComponent as VisibilityOnIcon } from '../../assets/visibility-on.svg';
import { LoginInput, loginSchema } from './schema';

export default function Login() {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const form = useForm<LoginInput>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: LoginInput) => {
    // eslint-disable-next-line no-console
    console.log(values);
  };

  return (
    <div className="flex justify-center items-center h-[100dvh]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-[600px] p-[30px] rounded-large flex flex-col items-center gap-[30px] bg-gray-100 dark:bg-gray-800 dark:text-white"
        >
          <div className="flex justify-center gap-4 p-5">
            <LogoIcon className="dark:[&>path:not(:first-child)]:fill-white" />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Password</FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      className="pr-11"
                      placeholder="Password"
                      type={isVisiblePassword ? 'text' : 'password'}
                      {...field}
                    />
                  </FormControl>
                  <button
                    type="button"
                    className="absolute inset-y-0 right-4 flex items-center"
                    onClick={() => setIsVisiblePassword((prev) => !prev)}
                  >
                    {isVisiblePassword ? (
                      <VisibilityOnIcon className="dark:[&_path]:fill-white" />
                    ) : (
                      <VisibilityOffIcon className="dark:[&_path]:fill-white" />
                    )}
                  </button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="gap-4 w-[200px]">
            <LoginIcon />
            Login
          </Button>

          <Button
            type="button"
            variant="link"
            className="p-0 h-auto text-blue dark:text-blue"
          >
            Forgot Password?
          </Button>
        </form>
      </Form>
    </div>
  );
}
