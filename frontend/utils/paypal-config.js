const paypalOptions = {
    'client-id': process.env.NEXT_PUBLIC_PAYPAL_ID,
    components: 'buttons',
    currency: 'MXN',
    locale: 'es_MX',
};

export default paypalOptions;
