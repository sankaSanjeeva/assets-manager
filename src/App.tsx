import { Outlet } from 'react-router-dom';
import { AuthProvider, ThemeProvider } from './common/hooks';

function App() {
  return (
    // <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <div>
          <div className="w-[80vh] h-[80vh] fixed -z-10 top-0 right-0 blur-[100px] bg-[#ff0099] translate-x-0 -translate-y-1/2" />
          <div className="w-[80vh] h-[80vh] fixed -z-10 top-0 right-0 blur-[100px] bg-[#5754f8] translate-x-1/2 -translate-y-1/3" />
          {/* <div className="w-[80vh] h-[80vh] fixed -z-10 top-0 right-0 blur-[100px] bg-[#ff0099] translate-x-0 -translate-y-1/2 animate-bubble" />
          <div className="w-[80vh] h-[80vh] fixed -z-10 top-0 right-0 blur-[100px] bg-[#5754f8] translate-x-1/2 -translate-y-1/3 animate-[bubble_10s_infinite_5s] rounded-[35%_65%_65%_35%_/_56%_49%_51%_44%]" /> */}
          <Outlet />
        </div>
      </AuthProvider>
    </ThemeProvider>

    //   <ReactQueryDevtools initialIsOpen={false} />
    // </QueryClientProvider>
  );
}

export default App;
