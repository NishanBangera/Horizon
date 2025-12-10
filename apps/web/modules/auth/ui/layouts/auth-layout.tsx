export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
        <header className="bg-gray-800 text-white p-4">
            <h1 className="text-xl font-bold">Auth Layout</h1>
        </header>
        <main className="flex-grow flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded shadow">
                {children}
            </div>
        </main>
    </div>
  );
};