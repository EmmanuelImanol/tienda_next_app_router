import GoBackButton from "@/components/ui/GoBackButton";
import Header from "@/components/ui/Header";
import ToastNotification from "@/components/ui/ToastNotification";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <Header />
            <div className="max-w-screen-xl w-[95%] m-auto">
                <div className="mt-10">
                    <GoBackButton />
                </div>
                <main>
                    {children}
                </main>
            </div>
            <ToastNotification />
        </>
    )
}