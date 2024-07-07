import OrderSidebar from "@/components/order/OrderSidebar";
import Header from "@/components/ui/Header";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <Header />
            <div className="max-w-screen-xl w-[95%] m-auto">
                <div className="mb-10">
                    <h2 className="mt-7 font-black text-xl md:text-2xl">Categorias</h2>
                    <OrderSidebar />
                </div>

                <main>
                    {children}
                </main>                
            </div>
        </>
    )
}