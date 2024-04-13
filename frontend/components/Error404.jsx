import Image from "next/image";
import box404 from "../public/images/box404.png";

export default function Error404() {
    return (
        <div>
            <Image src={box404} width={357} height={304} />
        </div>
    );
}
