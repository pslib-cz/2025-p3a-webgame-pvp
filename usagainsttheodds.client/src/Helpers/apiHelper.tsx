const apiGet = async <T,>(endpoint: string): Promise<T> => {
    const response = await fetch(endpoint);

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
}

export default apiGet;