const AuthLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <main className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center">
            {children}
        </main>
    );
}

export default AuthLayout;