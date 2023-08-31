import { colors } from "@nextui-org/react";
import Image from "next/image";

export const Navbar = () => {
    const randNumber: number = Math.floor(Math.random() * (387 - 0 + 1) + 0);
    return (
        <div
            style={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0px 20px",
                backgroundColor: colors?.zinc[900],
            }}
        >
            <div style={{ display: "flex", alignItems: "center" }}>
                <Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randNumber}.png`}
                    alt="Pokemon icon"
                    height={70}
                    width={70}
                />
                <h1>
                    <span className="text-2xl">P</span>
                    <span className="text-xl">okémon</span>
                </h1>
            </div>

            <h3 className="text-xl">Favorites</h3>
        </div>
    );
};
