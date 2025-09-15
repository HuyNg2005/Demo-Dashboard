const API_URL = "http://localhost:5000";

export const api={
    get: async (endpoint: string)=>{
        const res  = await fetch(`${API_URL}/${endpoint}`);
        return res.json();
},
    post: async (endpoint: string, data: any)=>{
        const res  = await fetch(`${API_URL}/${endpoint}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        });
        return res.json();
    },
    put: async (endpoint: string, data: any)=>{
        const res  = await fetch(`${API_URL}/${endpoint}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        });
        return res.json();
    },
    delete: async (endpoint: string)=>{
        await fetch(`${API_URL}/${endpoint}`, {
            method: "DELETE",
        });
        return true;
    },
};