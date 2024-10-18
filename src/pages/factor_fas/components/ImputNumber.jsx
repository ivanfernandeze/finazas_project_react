import { Input } from "@material-tailwind/react";

export function ImputNumber({ label, value, type, onChange, className, labelProps }) {
    return (
        <div className="w-72">
            <Input label={label} value={value} type={type} onChange={onChange} className={className} labelProps={labelProps} />
        </div>
    );
}