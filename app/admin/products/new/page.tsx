import AddProductForm from "@/components/products/AddProductForm";
import ProductForm from "@/components/products/ProductForm";
import GoBackButton from "@/components/ui/GoBackButton";
import Heading from "@/components/ui/Heading";


export default function CreateProductPage() {
    return (
        <>
            <Heading>Nuevo Producto</Heading>
            <div className="mt-5">
                <GoBackButton />
            </div>

            <AddProductForm>
                <ProductForm />
            </AddProductForm>
        </>
    )
}
