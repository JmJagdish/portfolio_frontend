import { brandFont } from "@/app/fonts";

export default function BrandLogo() {
    return (
        <h1 className={`${brandFont.className} text-3xl text-foreground font-bold`}>
            {'Jagdish'}
        </h1>
    );
}