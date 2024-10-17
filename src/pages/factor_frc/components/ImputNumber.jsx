import { Input } from "@material-tailwind/react";

export function ImputNumber({ label }) {
    return (
        <div className="w-72">
            <Input label={label} />
        </div>
    );
}