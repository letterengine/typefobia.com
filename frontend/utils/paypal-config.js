const paypalOptions = {
    'client-id': process.env.NEXT_PUBLIC_PAYPAL_ID,
    currency: 'MXN',
    locale: 'es_MX',
    intent: 'capture',
};

export default paypalOptions;
