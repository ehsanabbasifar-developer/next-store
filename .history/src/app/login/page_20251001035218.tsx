import Navbar from "../features/header/NavBar";

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow flex mt-8 items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-md w-full space-y-8 bg-white p-10 shadow-2xl rounded-xl">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900">
              Log In to Your Account
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Welcome back! Please enter your credentials.
            </p>
          </div>

          
        </div>
      </main>
    </div>
  );
}
