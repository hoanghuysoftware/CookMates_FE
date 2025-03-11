const AuthLayout = ({children}) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 shadow-lg rounded-lg w-96">{children}</div>
        </div>
      );
}

export default AuthLayout