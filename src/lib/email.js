
export const addSubscriber = async ({firstName, lastName, email, comment}) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            api_key: process.env.REACT_APP_CK_API_KEY, 
            email: email,
            first_name: firstName, 
            fields: {
                last_name: lastName,
                comment
            }
        })
    };
    const response = await fetch('https://api.convertkit.com/v3/forms/2847002/subscribe', requestOptions);
    console.log(response);
}

const isMember = async () => {
    const response = await fetch('')
}