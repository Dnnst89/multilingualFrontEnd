export const getExpertsIn = async () => {
    const url =
        'http://ec2-54-234-183-21.compute-1.amazonaws.com:1337/api/what-we-dos';
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        return null;
    }
};
