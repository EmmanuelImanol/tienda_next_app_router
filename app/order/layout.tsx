import OrderSidebar from "@/components/order/OrderSidebar";
import Header from "@/components/ui/Header";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <Header />
            <div className="max-w-screen-xl w-[95%] mx-auto pt-28">
                <div className="pb-10">
                    <h2 className=" font-black text-xl md:text-2xl">Categorias</h2>
                    <OrderSidebar />
                </div>

                <main>
                    {children}
                </main>                
            </div>
        </>
    )
}