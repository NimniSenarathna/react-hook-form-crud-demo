import { useState } from "react";

export function Users() {
    const [input, setInput] = useState("");
    return <input value={input} onChange={(e) => setInput(e.target.value)}/>;
}