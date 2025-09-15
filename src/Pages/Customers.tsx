import React, {useEffect, useState} from "react";
import {api} from "../Service/api";

type Customer = {
    id: number;
    name: string;
    email: string;
};

const Customers: React.FC = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [form, setForm] = useState({name: "", email: ""});

    // Load data
    useEffect(() => {
        api.get("customers").then(setCustomers);
    }, []);

    // Add
    const addCustomer = async () => {
        const trimmedForm = {
            name: form.name.trim(),
            email: form.email.trim(),
        };

        if (!trimmedForm.name || !trimmedForm.email) {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }
        const created = await api.post("customers", form);
        setCustomers([...customers, created]);
        setForm({name: "", email: ""});
    };

    // Update
    const updateCustomer = async (id: number) => {
        const updated = await api.put(`customers/${id}`, {
            ...form,
            id,
        });
        setCustomers(customers.map((c) => (c.id === id ? updated : c)));
        setForm({name: "", email: ""});
    };

    // Delete
    const deleteCustomer = async (id: number) => {
        await api.delete(`customers/${id}`);
        setCustomers(customers.filter((c) => c.id !== id));
    };

    return (
        <div className="flex justify-center items-center p-3  ">
            <div className="p-6 bg-white border-amber-400 border-2 rounded-xl shadow mt-5 ">
                <h2 className="font-bold text-xl mb-4">Customers</h2>

                {/* Form */}
                <div className="flex gap-2 mb-4">
                    <input
                        className="border p-2"
                        type="text"
                        placeholder="Name"
                        value={form.name}
                        onChange={(e) => setForm({...form, name: e.target.value})}
                    />
                    <input
                        className="border p-2"
                        type="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={(e) => setForm({...form, email: e.target.value})}
                    />
                    <button
                        onClick={addCustomer}
                        className="px-4 py-2 bg-green-500 text-white rounded"
                    >
                        Add
                    </button>
                </div>

                {/* List */}
                <ul className="space-y-2">
                    {customers.map((c) => (
                        <li
                            key={c.id}
                            className="flex justify-between items-center border p-2 rounded"
                        >
            <span>
              {c.name} - {c.email}
            </span>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => updateCustomer(c.id)}
                                    className="px-3 py-1 bg-blue-500 text-white rounded"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => deleteCustomer(c.id)}
                                    className="px-3 py-1 bg-red-500 text-white rounded"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Customers;
