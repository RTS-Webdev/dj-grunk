import { name } from "../../utils"

export const Footer = () => {
    return (
        <footer className="p-8 text-center text-sm text-black">
            &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </footer>
    )
}