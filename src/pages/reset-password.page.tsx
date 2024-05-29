import { LoginLogoIcon } from '@/assets/icons/login-logo.icon';

const ResetPasswordPage = () => {
  return (
    <div className="bg-gray-50 text-[#333]">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-md w-full border py-8 px-6 rounded border-gray-300 bg-white">
        <div className="flex mb-10">
                        <LoginLogoIcon />
                      </div>
          <h2 className="text-center text-3xl font-extrabold">
            Reset your password
          </h2>
          <form className="mt-10 space-y-4">
            <div>
              <input name="email" type="email" autoComplete="email" required className="w-full text-sm px-4 py-3 rounded outline-none border-2 focus:border-blue-500" placeholder="Email address" />
            </div>
            <div className="!mt-10">
              <button type="button" className="primary-button w-full hover:bg-blue-700 focus:outline-none">
                Send OTP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ResetPasswordPage;